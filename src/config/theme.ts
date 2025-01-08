import { createTheme } from '@mui/material/styles'
import { Montserrat } from 'next/font/google'
import { Roboto } from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});


export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
})

export const theme = createTheme({
  palette: {
    primary: {
      main: '#9d44de',
    },
    secondary: {
      main: '#f9eefe',
    },
    info: {
      main: '#0496ff',
    },
  },
  typography: {
    fontFamily: "'Chantilly-Serial', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 700, // Bold
    },
    h2: {
      fontWeight: 600, // Semi-Bold
    },
    h3: {
      fontWeight: 500, // Medium
    },
    body1: {
      fontWeight: 400, // Regular
    },
    body2: {
      fontWeight: 300, // Light
    },
    button: {
      fontWeight: 600, // Semi-Bold para botões
      textTransform: 'none', // Evita letras maiúsculas automáticas
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "'Chantilly-Serial', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
      },
    },
  },
});


