import { ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import theme from '../theme/my-theme';

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
