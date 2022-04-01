import React, { useEffect } from 'react';
import { Container, Input, Loading, useInput } from '@nextui-org/react';
import axios from 'axios';
import { regex } from '../../utils/regexSearch';
import useDataAPIs from '../../hooks/useDataAPIs';
import useSitesChecked from '../../hooks/useSitesChecked';

const SearchBar = () => {
  const { setData, setLoading } = useDataAPIs();
  const { sites } = useSitesChecked();
  const { value, reset, bindings } = useInput('');

  const helper = React.useMemo(() => {
    if (!value || value.length < 3)
      return {
        text: '',
        color: '',
      };
    const isValid = regex.test(value);
    return {
      text: isValid ? '' : 'Ingresaste algún caracter inválido',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  useEffect(() => {
    const fetch = setTimeout(() => {
      if (value.length < 3 || regex.test(value) === false) {
        return;
      }
      (async () => {
        try {
          console.log('PALABRA A BUSCAR', value);
          console.log('siteToSearch', sites);
          setLoading(true);
          const valToString = value.toString();
          const queries = sites.map(site => {
            return (
              site.reqDirection +
              `?per_page=5&_embed=true&search=${valToString}`
            );
          });

          const allData = await Promise.allSettled(
            queries.map(query => axios.get(query))
          ).then(values => {
            const dataWithSiteRef = values.map((value, i) => {
              const ob = {
                ...value,
                site: sites[i].name,
                id: sites[i].id,
                avatar: sites[i].avatar,
              };
              return ob;
            });
            const onlySuccessData = dataWithSiteRef.filter(
              data => data.status === 'fulfilled' && data.value.data.length > 0
            );
            return onlySuccessData;
          });
          setData(allData);
        } catch (e) {
          console.log('ERROR', e.message);
        } finally {
          setLoading(false);
        }
      })();
    }, 450);
    return () => {
      clearTimeout(fetch);
    };
  }, [value, setData, setLoading, sites]);

  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1.5em',
      }}
    >
      <Input
        {...bindings}
        size='xl'
        clearable
        shadow={false}
        onClearClick={reset}
        status={helper.color}
        color={helper.color}
        helperColor={helper.color}
        helperText={helper.text}
        type='text'
        aria-label='Buscar'
        placeholder='Buscá algo, por ejemplo, El Padrino'
        css={{
          w: '100%',
          m: 'auto',
          display: 'block',
          '@md': {
            w: '35em',
          },
        }}
      />
    </Container>
  );
};

export default SearchBar;
