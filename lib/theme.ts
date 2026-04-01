import { createTheme, ThemeOptions } from '@mui/material/styles';

export const createCustomTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: isDark ? '#00f5ff' : '#0369a1', // Neon Cyan vs Deep Blue (slightly darker for better contrast)
        light: isDark ? '#00b8c8' : '#0ea5e9',
        contrastText: isDark ? '#000' : '#fff',
      },
      secondary: {
        main: isDark ? '#ff00c8' : '#9333ea', // Neon Magenta vs Vibrant Purple
      },
      background: {
        default: isDark ? '#020508' : '#f8fafc', // Slate 50 for light mode
        paper: isDark ? '#050c12' : '#ffffff',
      },
      text: {
        primary: isDark ? '#cde8f0' : '#0f172a', // Slate 900 for deep legibility
        secondary: isDark ? '#6a9aaa' : '#475569', // Slate 600
      },
      divider: isDark ? 'rgba(0, 245, 255, 0.18)' : 'rgba(15, 23, 42, 0.08)',
    },
    typography: {
      fontFamily: 'var(--font-inter), sans-serif',
      h1: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 900,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
      h3: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 700,
      },
      h4: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
      },
      subtitle2: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
      body2: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
        fontSize: '0.85rem',
      },
      button: {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontWeight: 700,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            borderRadius: 0,
            transition: 'all 0.25s ease-in-out',
          },
          containedPrimary: {
            boxShadow: isDark ? '0 0 20px rgba(0, 245, 255, 0.35)' : '0 4px 14px rgba(2, 132, 199, 0.25)',
            '&:hover': {
              boxShadow: isDark ? '0 0 40px rgba(0, 245, 255, 0.6)' : '0 6px 20px rgba(2, 132, 199, 0.35)',
              transform: 'translateY(-2px)',
            },
          },
          outlinedPrimary: {
            borderWidth: '1px !important',
            '&:hover': {
              background: isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(2, 132, 199, 0.05)',
              boxShadow: isDark ? '0 0 20px rgba(0, 245, 255, 0.25)' : '0 4px 12px rgba(2, 132, 199, 0.1)',
              transform: 'translateY(-2px)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: isDark ? '#091520' : '#ffffff',
            border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.18)' : 'rgba(15, 23, 42, 0.08)'}`,
            clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            boxShadow: isDark ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
            transition: 'all 0.3s ease-in-out',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
