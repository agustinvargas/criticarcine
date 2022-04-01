import Layout from '../src/components/layout/Layout';
import SitesCheckedProvider from '../src/contexts/SitesChecked';
import DataFromAPIs from '../src/contexts/DataFromAPIs';
import NextUI from '../src/contexts/NextUI';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextUI>
      <SitesCheckedProvider>
        <DataFromAPIs>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataFromAPIs>
      </SitesCheckedProvider>
    </NextUI>
    // <NextUI>
    //   <SitesCheckedProvider>
    //     <DataFromAPIs>
    //       <Layout>
    //         <Component {...pageProps} />
    //       </Layout>
    //     </DataFromAPIs>
    //   </SitesCheckedProvider>
    // </NextUI>
  );
}

export default MyApp;
