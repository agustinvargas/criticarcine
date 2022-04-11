import React from 'react';
import { Loading, Spacer } from '@nextui-org/react';
import Avatars from '../src/components/avatars/Avatars';
import GifLoader from '../src/components/loaders/GifLoader';
import SearchBar from '../src/components/search/SearchBar';
import SiteContainer from '../src/components/siteContainer/SiteContainer';
import useDataAPIs from '../src/hooks/useDataAPIs';

const Home = () => {
  const { data, loading } = useDataAPIs();
  return (
    <>
      <section style={{ margin: '5em 0' }}>
        <SearchBar />
      </section>
      <main>
        {data?.length > 0 && !loading ? (
          <Avatars data={data} />
        ) : (
          data?.length > 0 &&
          loading && (
            <Loading
              type='gradient'
              size='lg'
              css={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )
        )}
        {data?.length > 0 ? (
          data?.map(el => <SiteContainer key={el?.id} data={el} />)
        ) : loading ? (
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
        ) : (
          !loading && (
            <GifLoader
              src='https://res.cloudinary.com/dp2no7dm6/image/upload/v1649708197/criticar/giphy_3_wvardq.webp'
              txt={
                data?.length === 0
                  ? 'No hay resultados'
                  : 'Esperando tu búsqueda'
              }
            />
          )
        )}
      </main>
    </>
  );
};

export default Home;
