'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const TerminalWidget = ({ isDark = true }: { isDark?: boolean }) => {
    return (
        <Box
            sx={{
                background: isDark ? 'rgba(5, 12, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.2)' : 'rgba(15, 23, 42, 0.1)'}`,
                padding: '1.2rem',
                fontFamily: 'var(--font-share-tech-mono), monospace',
                fontSize: '0.78rem',
                color: isDark ? 'primary.main' : 'primary.dark',
                position: 'relative',
                borderRadius: '8px',
                boxShadow: isDark 
                    ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 245, 255, 0.08)' 
                    : '0 12px 40px rgba(15, 23, 42, 0.06)',
                width: '100%',
                transition: 'all 0.3s ease',
            }}
        >
            <Box sx={{ display: 'flex', gap: '0.4rem', marginBottom: '0.8rem' }}>
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
            </Box>
            <Box sx={{ lineHeight: 1.8 }}>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                    <Box component="span" sx={{ color: isDark ? 'secondary.main' : 'secondary.dark', fontWeight: 600 }}>~/shayan $</Box>{' '}
                    <Box component="span" sx={{ color: isDark ? '#fff' : '#0f172a', fontWeight: 500 }}>whoami</Box>
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit', color: isDark ? 'text.secondary' : 'text.primary', opacity: 0.8 }}>
                    MERN Stack Developer · Open to Work · Karachi, PK
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                    <Box component="span" sx={{ color: isDark ? 'secondary.main' : 'secondary.dark', fontWeight: 600 }}>~/shayan $</Box>{' '}
                    <Box component="span" sx={{ color: isDark ? '#fff' : '#0f172a', fontWeight: 500 }}>npm run build-startup</Box>
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit', color: isDark ? 'text.secondary' : 'text.primary', opacity: 0.8 }}>
                    ✔ Compiling dream → reality...
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            width: '8px',
                            height: '14px',
                            background: isDark ? '#00f5ff' : '#0369a1',
                            marginLeft: '2px',
                            animation: 'blink 1s step-end infinite',
                            verticalAlign: 'middle',
                            '@keyframes blink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
                        }}
                    />
                </Typography>
            </Box>
        </Box>
    );
};

export default TerminalWidget;
