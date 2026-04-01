import React from 'react';
import { Box } from '@mui/material';

const SectionDivider = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '1px',
                position: 'relative',
                margin: 0,
                background: (theme) => theme.palette.mode === 'dark' 
                    ? 'linear-gradient(to right, transparent, #00f5ff, #ff00c8, transparent)'
                    : `linear-gradient(to right, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 16px #00f5ff' : 'none',
            }}
        />
    );
};

export default SectionDivider;
