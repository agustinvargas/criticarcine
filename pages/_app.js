import Layout from '../src/components/layout/Layout';
import SitesCheckedProvider from '../src/contexts/SitesChecked';
import DataFromAPIs from '../src/contexts/DataFromAPIs';
import NextUI from '../src/contexts/NextUI';
import Script from 'next/script';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
