import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import MainLayout from '../components/layout/main-layout';
import theme from '../theme/my-theme';
import '../theme/globals.css';
export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <CssBaseline />
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}
