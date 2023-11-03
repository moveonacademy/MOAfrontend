import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { AuthConsumer, AuthProvider } from 'src/contexts/auth-context';
import { useNProgress } from 'src/hooks/use-nprogress';
import { createTheme } from '../theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import 'simplebar-react/dist/simplebar.min.css';
import Script from 'next/script';


import "./styles.css";
import { MoralisProvider } from "react-moralis";
const clientSideEmotionCache = createEmotionCache();

const SplashScreen = () => null;

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNProgress();

  const getLayout = Component.getLayout ?? ((page) => page);

  const theme = createTheme();

  return (   
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          MoveOnAcademy
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      
      </Head>
      <MoralisProvider
    serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_URL }
    appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID }
  > 
      <ThemeProvider theme={theme}>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
       
            <CssBaseline />

            <AuthProvider>
  <AuthConsumer>
              {
                (auth) => auth.isLoading
                  ? <SplashScreen />
                  : getLayout(<Component {...pageProps} />)
              }
              </AuthConsumer>
        </AuthProvider>
        

      </LocalizationProvider>
      </ThemeProvider>

              </MoralisProvider>
   {/*            
      <Script
        src="https://cdn.voiceflow.com/widget/bundle.mjs"
        strategy="lazyOnload"
        onLoad={() =>

          window.voiceflow.chat.load({
            verify: { projectID: '653a78d8978fad000708e03e' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          })
        }
      />   */}
    </CacheProvider>
  );
};

export default App;
