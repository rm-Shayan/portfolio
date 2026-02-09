'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { Roboto, Outfit } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Vibrant Blue
    },
    secondary: {
      main: '#9333ea', // Purple
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontFamily: outfit.style.fontFamily, fontWeight: 700 },
    h2: { fontFamily: outfit.style.fontFamily, fontWeight: 700 },
    h3: { fontFamily: outfit.style.fontFamily, fontWeight: 600 },
    button: { fontFamily: outfit.style.fontFamily, fontWeight: 600 },
  },
};

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#60a5fa', // Blue 400
    },
    secondary: {
      main: '#c084fc', // Purple 400
    },
    background: {
      default: '#0f172a', // Slate 900
      paper: '#1e293b', // Slate 800
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: { fontFamily: outfit.style.fontFamily, fontWeight: 700 },
    h2: { fontFamily: outfit.style.fontFamily, fontWeight: 700 },
    h3: { fontFamily: outfit.style.fontFamily, fontWeight: 600 },
    button: { fontFamily: outfit.style.fontFamily, fontWeight: 600 },
  },
};

export const createCustomTheme = (mode: 'light' | 'dark') => {
  return createTheme(mode === 'light' ? lightThemeOptions : darkThemeOptions);
};
