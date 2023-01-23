import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import theme from '../theme/my-theme';
import '../theme/globals.css';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <CssBaseline />
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </ReduxProvider>
  );
}
