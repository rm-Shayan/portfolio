'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';

const TerminalWidget = () => {
    return (
        <Box
            sx={{
                background: 'rgba(0, 0, 0, 0.7)',
                border: '1px solid rgba(0, 245, 255, 0.18)',
                padding: '1.2rem',
                fontFamily: 'var(--font-share-tech-mono)',
                fontSize: '0.78rem',
                color: 'primary.main',
                marginTop: '2rem',
                position: 'relative',
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.05)',
            }}
        >
            <Box sx={{ display: 'flex', gap: '0.4rem', marginBottom: '0.8rem' }}>
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56' }} />
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e' }} />
                <Box sx={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f' }} />
            </Box>
            <Box sx={{ lineHeight: 1.8 }}>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                    <Box component="span" sx={{ color: 'secondary.main' }}>~/shayan $</Box> <Box component="span" sx={{ color: '#fff' }}>whoami</Box>
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit', color: 'text.secondary' }}>
                    MERN Stack Developer · Open to Work · Karachi, PK
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
                    <Box component="span" sx={{ color: 'secondary.main' }}>~/shayan $</Box> <Box component="span" sx={{ color: '#fff' }}>npm run build-startup</Box>
                </Typography>
                <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 'inherit', color: 'text.secondary' }}>
                    ✔ Compiling dream → reality...
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            width: '8px',
                            height: '14px',
                            background: '#00f5ff',
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
