'use client';

import React from 'react';
import { Box, Typography, Container, Paper, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import { FiCode, FiShoppingCart, FiLayout, FiServer, FiPieChart, FiSettings, FiSmartphone } from 'react-icons/fi';

const services = [
    {
        icon: <FiCode />,
        title: 'Full-Stack Web Apps',
        desc: 'End-to-end MERN applications with real-time features, authentication, and scalable database architecture built for growth.',
        tags: ['React', 'Node.js', 'MongoDB'],
        color: '#00f5ff',
    },
    {
        icon: <FiShoppingCart />,
        title: 'E-Commerce Platforms',
        desc: 'Custom storefronts with payment integration, inventory management, and CMS — built to sell from day one.',
        tags: ['Next.js', 'Stripe', 'Sanity'],
        color: '#ff00c8',
    },
    {
        icon: <FiLayout />,
        title: 'Landing Pages',
        desc: 'High-converting landing pages engineered for maximum engagement, blazing speed, and measurable ROI.',
        tags: ['Next.js', 'Tailwind', 'Framer'],
        color: '#00f5ff',
    },
    {
        icon: <FiServer />,
        title: 'REST API Development',
        desc: 'Robust, documented, and secure RESTful APIs with JWT auth, rate limiting, and third-party integrations.',
        tags: ['Express', 'JWT', 'Swagger'],
        color: '#ff00c8',
    },
    {
        icon: <FiPieChart />,
        title: 'Dashboards & SaaS',
        desc: 'Data-rich admin panels and SaaS platforms with role-based access, analytics, and subscription billing.',
        tags: ['React', 'Recharts', 'Stripe'],
        color: '#00f5ff',
    },
    {
        icon: <FiSettings />,
        title: 'Performance Optimization',
        desc: 'Audit and supercharge existing apps — image optimization, code splitting, SSR, and Core Web Vitals tuning.',
        tags: ['Next.js', 'Lighthouse', 'CDN'],
        color: '#ff00c8',
    },
    {
        icon: <FiSmartphone />,
        title: 'Mobile App Development',
        desc: 'Cross-platform mobile applications built with React Native. Delivering native-like performance with a unified codebase for iOS and Android.',
        tags: ['React Native', 'Expo', 'Mobile UI'],
        color: '#00f5ff',
    },
];

const Services = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    return (
        <Box id="services" sx={{ py: '7rem', background: 'background.default' }}>
            <Container maxWidth="lg">
                <SectionHeader num="02" title="Professional Services" />

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }, gap: 4 }}>
                    {services.map((service, index) => (
                       <Box 
                           key={index} 
                           sx={{ 
                               width: '100%',
                               display: 'flex'
                           }}
                        >
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: isDark 
                                      ? 'linear-gradient(145deg, rgba(13, 25, 38, 0.7) 0%, rgba(6, 14, 23, 0.9) 100%)' 
                                      : 'background.paper',
                                    backdropFilter: 'blur(12px)',
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: '16px',
                                    padding: '2.4rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    cursor: 'default',
                                    boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '120px',
                                        height: '120px',
                                        background: `radial-gradient(circle at top right, ${service.color}33, transparent 70%)`,
                                        opacity: 0.4,
                                        transition: 'opacity 0.4s',
                                    },
                                    '&:hover': {
                                        borderColor: `${service.color}66`,
                                        transform: 'translateY(-6px)',
                                        boxShadow: isDark
                                            ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px ${service.color}22`
                                            : `0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 15px ${service.color}22`,
                                        '&::before': { opacity: 0.8 },
                                        '& .service-icon': {
                                            transform: 'scale(1.1) translateY(-4px)',
                                            color: service.color,
                                            filter: `drop-shadow(0 0 12px ${service.color}66)`,
                                        }
                                    },
                                }}
                            >
                                <Box
                                    className="service-icon"
                                    sx={{
                                        fontSize: '2.2rem',
                                        marginBottom: '1.5rem',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '16px',
                                        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15, 23, 42, 0.03)',
                                        border: `1px solid ${theme.palette.divider}`,
                                        color: 'text.secondary',
                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                    }}
                                >
                                    {service.icon}
                                </Box>
                                 <Typography
                                    variant="h3"
                                    sx={{
                                        fontFamily: 'var(--font-outfit), sans-serif',
                                        fontSize: '1.4rem',
                                        fontWeight: 800,
                                        color: 'text.primary',
                                        letterSpacing: '-0.01em',
                                        marginBottom: '0.8rem',
                                    }}
                                >
                                    {service.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        lineHeight: 1.6,
                                        fontFamily: 'var(--font-inter), sans-serif',
                                        fontSize: '0.95rem',
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
                                                    fontFamily: 'var(--font-inter), sans-serif',
                                                    fontSize: '0.75rem',
                                                    color: 'text.secondary',
                                                    border: `1px solid ${theme.palette.divider}`,
                                                    borderRadius: '6px',
                                                    padding: '0.4rem 0.9rem',
                                                    letterSpacing: '0.01em',
                                                    fontWeight: 600,
                                                    textTransform: 'uppercase',
                                                    background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
                                                transition: 'all 0.3s',
                                                '&:hover': {
                                                    borderColor: service.color,
                                                    color: service.color,
                                                    background: `${service.color}08`,
                                                }
                                            }}
                                        >
                                            {tag}
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
