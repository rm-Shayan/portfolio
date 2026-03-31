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
                background: 'linear-gradient(to right, transparent, #00f5ff, #ff00c8, transparent)',
                boxShadow: '0 0 16px #00f5ff',
            }}
        />
    );
};

export default SectionDivider;
