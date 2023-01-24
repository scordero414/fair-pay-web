import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          color: '#FEFFFE',
          borderColor: '#BFD7EA',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: '#BFD7EA',
          '&.Mui-focused:not(.Mui-error)': {
            color: '#BFD7EA',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0B3954',
      dark: '#FF6663',
    },
    secondary: {
      main: '#BFD7EA',
      light: '#FEFFFE',
      '100': '#BFD7EA80',
    },
    warning: {
      main: '#E0FF4F'
    },
    background: {
      default: '#0B3954'
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#FEFFFE'
    }

  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;