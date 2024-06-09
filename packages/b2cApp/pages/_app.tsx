
import { Poppins } from '@next/font/google';
import MainLayout from 'layout/MainLayout';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Store } from 'store';
import '/styles/index.scss';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';

// Deploy b2c page
const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient(); 

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={poppins.className}>
        <Provider store={Store}>
        <QueryClientProvider client={queryClient}>

        <MainLayout>
          <Component {...pageProps} storeId={'abc'}/>
          </MainLayout>
        </QueryClientProvider>
          
          
        </Provider>

      </main>
    </>

  )
}

export default MyApp
