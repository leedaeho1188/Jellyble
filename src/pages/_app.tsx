import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({
  Component, 
  pageProps, 
}: AppProps) {


  return (
    <>
      {/* <CacheProvider value={emotionCache}> */}
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        {/* <ThemeProvider theme={theme}> */}
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        {/* </ThemeProvider> */}
      {/* </CacheProvider> */}
    </>
  )

}
