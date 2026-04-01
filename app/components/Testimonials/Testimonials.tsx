'use client';

import React from 'react';
import { Box, Typography, Container, Paper, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const testimonials = [
    {
        text: "Shayan delivered our e-commerce platform 3 days ahead of deadline. The code quality was exceptional — clean, documented, and fully scalable. Will absolutely hire again.",
        name: "Ahmed Khan",
        role: "Founder, TechMart PK",
        initials: "AK",
        stars: 5,
    },
    {
        text: "Best developer I've worked with on Fiverr. He understood our product vision immediately and built a SaaS dashboard that our investors loved. Highly recommend.",
        name: "Sara Rahman",
        role: "CEO, DataFlow SaaS",
        initials: "SR",
        stars: 5,
    },
    {
        text: "Shayan fixed what 3 other developers couldn't. Our performance issues are gone — 40 to 98 on Lighthouse. The guy is a wizard with Next.js optimization.",
        name: "Michael Johnson",
        role: "CTO, StartupHub",
        initials: "MJ",
        stars: 5,
    },
    {
        text: "Professional, responsive, and incredibly talented. He transformed our outdated website into a modern web app that our customers love. 10/10 experience.",
        name: "Fatima Ali",
        role: "Director, Creative Agency",
        initials: "FA",
        stars: 5,
    },
];

const Testimonials = () => {
    const theme = useTheme();
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    return (
        <Box id="testimonials" sx={{ py: '7rem', background: 'background.default' }}>
            <Container maxWidth="lg">
                <SectionHeader num="05" title="Client Voices" />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                    {testimonials.map((t, index) => (
                        <Box key={index} sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' }, display: 'flex' }}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                sx={{
                                    background: 'background.paper',
                                    border: `1px solid ${theme.palette.divider}`,
                                    padding: '2rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s',
                                    height: '100%',
                                    '&::after': {
                                        content: '"\\""',
                                        position: 'absolute',
                                        top: '-0.3rem',
                                        right: '1rem',
                                        fontSize: '8rem',
                                        fontFamily: 'serif',
                                        color: 'rgba(0, 245, 255, 0.06)',
                                        lineHeight: 1,
                                    },
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        background: isDark ? 'rgba(0, 245, 255, 0.03)' : 'rgba(15, 23, 42, 0.01)',
                                        boxShadow: isDark ? 'none' : '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
                                    },
                                }}
                            >
                                <Typography sx={{ color: 'var(--yellow)', fontSize: '0.7rem', marginBottom: '1rem' }}>
                                    {'★'.repeat(t.stars)}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.primary',
                                        lineHeight: 1.75,
                                        fontStyle: 'italic',
                                        marginBottom: '1.5rem',
                                        position: 'relative',
                                        zIndex: 1,
                                        fontSize: '1rem',
                                        fontFamily: 'var(--font-inter), sans-serif',
                                    }}
                                >
                                    "{t.text}"
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            background: (theme) => theme.palette.mode === 'dark' 
                                                ? 'linear-gradient(135deg, #00f5ff, #ff00c8)' 
                                                : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'var(--font-outfit), sans-serif',
                                            fontSize: '0.9rem',
                                            color: '#fff',
                                            fontWeight: 900,
                                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                        }}
                                    >
                                        {t.initials}
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily: 'var(--font-outfit), sans-serif',
                                                fontSize: '0.85rem',
                                                color: 'primary.main',
                                                letterSpacing: '0.02em',
                                                fontWeight: 800,
                                            }}
                                        >
                                            {t.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'var(--font-inter), sans-serif',
                                                fontSize: '0.75rem',
                                                color: 'text.secondary',
                                                fontWeight: 500,
                                                letterSpacing: '0.01em',
                                            }}
                                        >
                                            {t.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;
