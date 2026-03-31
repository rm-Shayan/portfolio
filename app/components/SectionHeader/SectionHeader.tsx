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
                    fontFamily: 'var(--font-share-tech-mono)',
                    fontSize: '0.65rem',
                    color: 'secondary.main',
                    letterSpacing: '0.2em',
                }}
            >
                {num}
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    fontSize: { xs: '1.8rem', md: '2.6rem' },
                    color: '#fff',
                    letterSpacing: '0.04em',
                    '& span': { color: 'primary.main', textShadow: '0 0 30px #00f5ff' },
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
                    background: 'linear-gradient(to right, rgba(0, 245, 255, 0.18), transparent)',
                }}
            />
        </Box>
    );
};

export default SectionHeader;
