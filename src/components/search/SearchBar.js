import React, { useEffect } from 'react';
import { Container, Input, useInput } from '@nextui-org/react';
import { regex } from '../../utils/regexSearch';
import useDataAPIs from '../../hooks/useDataAPIs';
import useSitesChecked from '../../hooks/useSitesChecked';
import { fetchDataFromSites } from '../../utils/fetchSitesData';

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
          setLoading(true);
          const data = await fetchDataFromSites(sites, value);
          setData(data);
        } catch (e) {
          console.log(e.message);
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
        placeholder='Buscá algo, por ejemplo, Licorice Pizza'
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
