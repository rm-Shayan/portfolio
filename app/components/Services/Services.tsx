'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const services = [
    {
        icon: '⚡',
        title: 'Full-Stack Web Apps',
        desc: 'End-to-end MERN applications with real-time features, authentication, and scalable database architecture built for growth.',
        tags: ['React', 'Node.js', 'MongoDB'],
        color: '#00f5ff',
    },
    {
        icon: '🛒',
        title: 'E-Commerce Platforms',
        desc: 'Custom storefronts with payment integration, inventory management, and CMS — built to sell from day one.',
        tags: ['Next.js', 'Stripe', 'Sanity'],
        color: '#ff00c8',
    },
    {
        icon: '🎯',
        title: 'Landing Pages',
        desc: 'High-converting landing pages engineered for maximum engagement, blazing speed, and measurable ROI.',
        tags: ['Next.js', 'Tailwind', 'Framer'],
        color: '#00f5ff',
    },
    {
        icon: '🔌',
        title: 'REST API Development',
        desc: 'Robust, documented, and secure RESTful APIs with JWT auth, rate limiting, and third-party integrations.',
        tags: ['Express', 'JWT', 'Swagger'],
        color: '#ff00c8',
    },
    {
        icon: '📊',
        title: 'Dashboards & SaaS',
        desc: 'Data-rich admin panels and SaaS platforms with role-based access, analytics, and subscription billing.',
        tags: ['React', 'Recharts', 'Stripe'],
        color: '#00f5ff',
    },
    {
        icon: '🛠️',
        title: 'Performance Optimization',
        desc: 'Audit and supercharge existing apps — image optimization, code splitting, SSR, and Core Web Vitals tuning.',
        tags: ['Next.js', 'Lighthouse', 'CDN'],
        color: '#ff00c8',
    },
];

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    return (
        <Box id="services" sx={{ py: '7rem', background: isDark ? 'var(--bg1)' : 'rgba(2, 5, 8, 0.02)' }}>
            <Container maxWidth="lg">
                <SectionHeader num="02" title="Professional Services" />

                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                sx={{
                                    height: '100%',
                                    background: isDark ? 'rgba(9, 21, 32, 0.8)' : '#ffffff',
                                    border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    padding: '2.4rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    cursor: 'default',
                                    clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '40px',
                                        height: '40px',
                                        background: `linear-gradient(225deg, ${service.color}44, transparent)`,
                                        opacity: 0,
                                        transition: 'opacity 0.4s',
                                    },
                                    '&:hover': {
                                        borderColor: service.color,
                                        transform: 'translateY(-8px)',
                                        background: isDark ? `${service.color}05` : `${service.color}03`,
                                        boxShadow: isDark
                                            ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 10px ${service.color}22`
                                            : `0 15px 35px ${service.color}11`,
                                        '&::before': { opacity: 1 },
                                        '& .service-icon': {
                                            transform: 'scale(1.2) rotate(10deg)',
                                            filter: `drop-shadow(0 0 15px ${service.color}88)`,
                                        }
                                    },
                                }}
                            >
                                <Box
                                    className="service-icon"
                                    sx={{
                                        fontSize: '2.4rem',
                                        marginBottom: '1.5rem',
                                        display: 'inline-block',
                                        transition: 'all 0.4s',
                                        filter: isDark ? `drop-shadow(0 0 10px ${service.color}44)` : 'none',
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: 'var(--font-orbitron)',
                                        fontSize: '1rem',
                                        fontWeight: 800,
                                        color: isDark ? '#fff' : '#1a202c',
                                        letterSpacing: '0.05em',
                                        marginBottom: '1rem',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.8,
                                        fontFamily: 'var(--font-rajdhani)',
                                        fontSize: '0.92rem',
                                        mb: 3,
                                    }}
                                >
                                    {service.desc}
                                </Typography>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
                                    {service.tags.map((tag) => (
                                        <Box
                                            key={tag}
                                            sx={{
                                                fontFamily: 'var(--font-share-tech-mono)',
                                                fontSize: '0.62rem',
                                                color: isDark ? service.color : '#000',
                                                border: `1px solid ${service.color}44`,
                                                background: `${service.color}11`,
                                                padding: '0.3rem 0.7rem',
                                                letterSpacing: '0.05em',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
