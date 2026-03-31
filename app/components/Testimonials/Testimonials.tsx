'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';

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

    return (
        <Box id="testimonials" sx={{ py: '7rem' }}>
            <Container maxWidth="lg">
                <SectionHeader num="05" title="Client Voices" />

                <Grid container spacing={3}>
                    {testimonials.map((t, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                sx={{
                                    background: 'var(--bg2)',
                                    border: '1px solid var(--border)',
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
                                        borderColor: '#00f5ff',
                                        background: 'rgba(0, 245, 255, 0.03)',
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
                                        fontSize: '0.95rem',
                                    }}
                                >
                                    "{t.text}"
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Box
                                        sx={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'linear-gradient(135deg, #00f5ff, #ff00c8)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'var(--font-orbitron)',
                                            fontSize: '0.8rem',
                                            color: '#000',
                                            fontWeight: 900,
                                            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                        }}
                                    >
                                        {t.initials}
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily: 'var(--font-share-tech-mono)',
                                                fontSize: '0.78rem',
                                                color: 'primary.main',
                                                letterSpacing: '0.1em',
                                            }}
                                        >
                                            {t.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'var(--font-share-tech-mono)',
                                                fontSize: '0.62rem',
                                                color: 'text.secondary',
                                            }}
                                        >
                                            {t.role}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Testimonials;
