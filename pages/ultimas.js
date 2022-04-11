import { orderByName, SITES } from '../src/utils/sitesList';
import axios from 'axios';
import { Container, Loading, Spacer, Text } from '@nextui-org/react';
import SiteContainer from '../src/components/siteContainer/SiteContainer';
import { IoReloadCircleSharp } from 'react-icons/io5';
import Avatars from '../src/components/avatars/Avatars';

export async function getStaticProps() {
  const orderSites = orderByName(SITES);
  const queries = orderSites.map(site => {
    return site.reqDirection + `?per_page=3&_embed=true`;
  });

  const fetching = await Promise.allSettled(
    queries.map(query => axios.get(query))
  );

  const dataWithSiteRef = fetching.map((value, i) => {
    const ob = {
      ...value,
      site: orderSites[i].name,
      id: orderSites[i].id,
      avatar: orderSites[i].avatar,
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
      time: new Date().toISOString(),
      data,
    },
    // 1 hour
    revalidate: 3600,
  };
}

const LastAticles = ({ time, data }) => {
  const d = new Date(time);
  const dateToUTM = d.toLocaleString('es-AR');

  const handleReloaded = () => {
    window.location.reload();
  };

  return (
    <>
      <section style={{ margin: '5em 0' }}>
        <Container
          css={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
          }}
        >
          <Container
            css={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '.5em',
              padding: '5px',
            }}
          >
            <small>Última actualización: {dateToUTM} ARG</small>
            <IoReloadCircleSharp
              size='1.5em'
              onClick={handleReloaded}
              className='cursor-pointer'
            />
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
        {data?.length > 0 && <Avatars data={data} />}
        {data?.length > 0 ? (
          data?.map(el => <SiteContainer key={el?.id} data={el} />)
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
