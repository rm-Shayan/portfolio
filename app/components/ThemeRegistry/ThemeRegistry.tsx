'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { createCustomTheme } from '../../../lib/theme';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const mode = useSelector((state: RootState) => state.ui.mode);
    const theme = React.useMemo(() => createCustomTheme(mode), [mode]);

    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
