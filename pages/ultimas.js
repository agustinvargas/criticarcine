import { SITES } from '../src/utils/sitesList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container, Loading, Spacer, Text } from '@nextui-org/react';
import SiteContainer from '../src/components/siteContainer/SiteContainer';
import { IoReloadCircleSharp } from 'react-icons/io5';
import Avatars from '../src/components/avatars/Avatars';

export async function getStaticProps() {
  const queries = SITES.map(site => {
    return site.reqDirection + `?per_page=3&_embed=true`;
  });

  const fetching = await Promise.allSettled(
    queries.map(query => axios.get(query))
  );

  const dataWithSiteRef = fetching.map((value, i) => {
    const ob = {
      ...value,
      site: SITES[i].name,
      id: SITES[i].id,
      avatar: SITES[i].avatar,
    };
    return ob;
  });

  const filter = dataWithSiteRef.filter(
    data => data.status === 'fulfilled' && data.value.data.length > 0
  );

  const data = filter.map(data => {
    const obj = {
      value: {
        data: data.value.data,
      },
      site: data.site,
      id: data.id,
      avatar: data.avatar,
    };

    return obj;
  });

  return {
    props: {
      time: new Date().toLocaleString('es-AR'),
      data,
    },
    // 4 hours
    revalidate: 14400,
  };
}

const LastAticles = ({ time, data }) => {
  const [safeD, setSafeD] = useState(false);
  const [date, setDate] = useState(time);
  const [loadingReloaded, setLoadingReloaded] = useState(false);

  useEffect(() => {
    setSafeD(data);
  }, [data]);

  console.log('data', data);

  const handleReloaded = () => {
    (async () => {
      setLoadingReloaded(true);

      const queries = SITES.map(site => {
        return site.reqDirection + `?per_page=3&_embed=true`;
      });

      const fetching = await Promise.allSettled(
        queries.map(query => axios.get(query))
      );

      const dataWithSiteRef = fetching.map((value, i) => {
        const ob = {
          ...value,
          site: SITES[i].name,
          id: SITES[i].id,
          avatar: SITES[i].avatar,
        };
        return ob;
      });

      const filter = dataWithSiteRef.filter(
        data => data.status === 'fulfilled' && data.value.data.length > 0
      );

      const data = filter.map(data => {
        const obj = {
          value: {
            data: data.value.data,
          },
          site: data.site,
          id: data.id,
          avatar: data.avatar,
        };

        return obj;
      });

      setSafeD(data);
      setDate(new Date().toLocaleString('es-AR'));
      setLoadingReloaded(false);
    })();
  };

  return (
    <>
      <section style={{ margin: '5em 0' }}>
        <Container
          css={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',

            // alignItems: 'center',
            // gap: '.5em',
            // padding: 0,
            // justifyContent: 'center',
          }}
        >
          <Container
            css={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.5em',
              padding: '5px',
            }}
          >
            {loadingReloaded ? (
              <Loading size='sm' type='points-opacity' />
            ) : (
              <IoReloadCircleSharp
                size='1.5em'
                onClick={handleReloaded}
                className='cursor-pointer'
              />
            )}
            <small>Última actualización: {date} (Arg)</small>
          </Container>
          <Text
            h1
            size={47}
            css={{
              textGradient: '45deg, $yellow500 -20%, $red500 100%',
              width: '100%',

              textAlign: 'center',
            }}
            weight='bold'
          >
            Recientes
          </Text>
        </Container>
      </section>
      <main>
        {safeD?.length > 0 && !loadingReloaded && <Avatars data={safeD} />}
        {safeD?.length > 0 ? (
          safeD?.map(el => <SiteContainer key={el?.id} data={el} />)
        ) : (
          <>
            <Spacer y={2} />
            <Loading
              type='gradient'
              size='xl'
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </>
        )}
      </main>
    </>
  );
};

export default LastAticles;
