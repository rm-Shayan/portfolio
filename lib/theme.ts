import { createTheme, ThemeOptions } from '@mui/material/styles';

export const createCustomTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        main: '#00f5ff', // Cyan
        light: '#00b8c8',
        contrastText: isDark ? '#000' : '#fff',
      },
      secondary: {
        main: '#ff00c8', // Magenta
      },
      background: {
        default: isDark ? '#020508' : '#f0f4f8',
        paper: isDark ? '#050c12' : '#ffffff',
      },
      text: {
        primary: isDark ? '#cde8f0' : '#1a202c',
        secondary: isDark ? '#6a9aaa' : '#4a5568',
      },
      divider: isDark ? 'rgba(0, 245, 255, 0.18)' : 'rgba(0, 184, 200, 0.12)',
    },
    typography: {
      fontFamily: 'var(--font-rajdhani), sans-serif',
      h1: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 900,
        letterSpacing: '0.02em',
      },
      h2: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 700,
        letterSpacing: '0.04em',
      },
      h3: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 700,
      },
      h4: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: 'var(--font-orbitron), sans-serif',
        fontWeight: 600,
      },
      subtitle1: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
      },
      subtitle2: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
      },
      body1: {
        fontSize: '1.05rem',
        lineHeight: 1.8,
      },
      body2: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
        fontSize: '0.85rem',
      },
      button: {
        fontFamily: 'var(--font-share-tech-mono), monospace',
        fontWeight: 700,
        letterSpacing: '0.12em',
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
            boxShadow: isDark ? '0 0 20px rgba(0, 245, 255, 0.35)' : '0 4px 12px rgba(0, 245, 255, 0.2)',
            '&:hover': {
              boxShadow: isDark ? '0 0 40px rgba(0, 245, 255, 0.6)' : '0 6px 16px rgba(0, 245, 255, 0.3)',
              transform: 'translateY(-2px)',
            },
          },
          outlinedPrimary: {
            borderWidth: '1px !important',
            '&:hover': {
              background: isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(0, 245, 255, 0.05)',
              boxShadow: isDark ? '0 0 20px rgba(0, 245, 255, 0.25)' : '0 2px 8px rgba(0, 245, 255, 0.1)',
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
            border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.18)' : 'rgba(0, 184, 200, 0.12)'}`,
            clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
            boxShadow: isDark ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.05)',
          },
        },
      },
    },
  };

  return createTheme(themeOptions);
};
