import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import theme from '../theme/my-theme';
import '../theme/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <CssBaseline />
            <Component {...pageProps} />
          </MainLayout>
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
