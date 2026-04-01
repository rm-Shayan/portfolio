'use client';

import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    num: string;
    title: string;
    subtitle?: string;
}

const SectionHeader = ({ num, title, subtitle }: SectionHeaderProps) => {
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            sx={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}
        >
            <Typography
                sx={{
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontSize: '0.8rem',
                    color: 'primary.main',
                    letterSpacing: '0.15em',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                }}
            >
                {num}
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontSize: { xs: '1.8rem', md: '2.8rem' },
                    color: 'text.primary',
                    letterSpacing: '-0.03em',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    '& span': { 
                      color: 'primary.main', 
                      textShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 40px rgba(0, 245, 255, 0.4)' : 'none' 
                    },
                }}
            >
                {title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                        {i === title.split(' ').length - 1 ? <span>{word}</span> : word + ' '}
                    </React.Fragment>
                ))}
            </Typography>
            <Box
                sx={{
                    flex: 1,
                    height: '1px',
                    background: (theme) => theme.palette.mode === 'dark' 
                      ? 'linear-gradient(to right, rgba(0, 245, 255, 0.18), transparent)'
                      : 'linear-gradient(to right, rgba(15, 23, 42, 0.1), transparent)',
                }}
            />
        </Box>
    );
};

export default SectionHeader;
