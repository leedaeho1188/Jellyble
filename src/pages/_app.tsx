import '@/styles/globals.css'
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/utils/theme';
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();
interface Props extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({
  Component, 
  pageProps, 
  emotionCache = clientSideEmotionCache 
}: Props) {


  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )

}
