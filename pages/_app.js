import Layout from '../src/components/layout/Layout';
import SitesCheckedProvider from '../src/contexts/SitesChecked';
import DataFromAPIs from '../src/contexts/DataFromAPIs';
import NextUI from '../src/contexts/NextUI';
import Script from 'next/script';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Criticar</title>
        <meta name='description' content='Buscador de críticas de cine' />
        <meta
          name='keywords'
          content='críticas de cine, buscador críticas cine, análisis cine, cine, críticas, críticas cine argentina, revista cine'
        />
        <meta
          itemProp='name'
          content='Criticar. Buscador de críticas de cine'
        />
        <meta itemProp='description' content='Buscador de críticas de cine' />
      </Head>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id='google-analytics' strategy='lazyOnload'>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
    `}
      </Script>
      <NextUI>
        <SitesCheckedProvider>
          <DataFromAPIs>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </DataFromAPIs>
        </SitesCheckedProvider>
      </NextUI>
    </>
  );
}

export default MyApp;
