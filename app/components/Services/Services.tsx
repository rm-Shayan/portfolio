'use client';

import React from 'react';
import { Box, Typography, Container, Stack, useTheme, useMediaQuery } from '@mui/material';
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
        <Box id="services" sx={{ py: { xs: '5rem', md: '8rem' }, background: 'background.default' }}>
            <Container maxWidth="lg">
                <SectionHeader num="02" title="Professional Services" />

                <Box 
                    sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, 
                        gap: 4 
                    }}
                >
                    {services.map((service, index) => {
                        const isWide = index === 6; // 7th card is index 6
                        return (
                            <Box 
                                key={index} 
                                sx={{ 
                                    width: '100%',
                                    display: 'flex',
                                    gridColumn: isWide ? { md: 'span 3', sm: 'span 2', xs: 'span 1' } : 'auto'
                                }}
                            >
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: isWide ? { xs: 'column', md: 'row' } : 'column',
                                        alignItems: isWide ? { xs: 'flex-start', md: 'center' } : 'stretch',
                                        justifyContent: 'space-between',
                                        gap: isWide ? { xs: 3, md: 6 } : 3,
                                        background: isDark 
                                          ? 'linear-gradient(145deg, rgba(13, 25, 38, 0.7) 0%, rgba(6, 14, 23, 0.9) 100%)' 
                                          : 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(12px)',
                                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.04)' : theme.palette.divider}`,
                                        borderRadius: '16px',
                                        padding: isWide ? { xs: '2.4rem', md: '3rem 3.5rem' } : '2.4rem',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                        cursor: 'default',
                                        boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.25)' : '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            right: 0,
                                            width: isWide ? '220px' : '120px',
                                            height: isWide ? '220px' : '120px',
                                            background: `radial-gradient(circle at top right, ${service.color}33, transparent 70%)`,
                                            opacity: 0.4,
                                            transition: 'opacity 0.4s',
                                            pointerEvents: 'none',
                                        },
                                        '&:hover': {
                                            borderColor: `${service.color}66`,
                                            transform: 'translateY(-6px)',
                                            boxShadow: isDark
                                                ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px ${service.color}22`
                                                : `0 20px 40px rgba(0, 0, 0, 0.1), 0 5px 20px ${service.color}22`,
                                            '&::before': { opacity: 0.8 },
                                            '& .tech-ring': {
                                                animation: 'spinRing 6s linear infinite',
                                            },
                                            '& .service-icon': {
                                                transform: 'scale(1.1) translateY(-2px)',
                                                color: service.color,
                                                filter: `drop-shadow(0 0 12px ${service.color}66)`,
                                            },
                                            '& .service-tag': {
                                                borderColor: service.color,
                                                color: service.color,
                                                background: `${service.color}08`,
                                            }
                                        },
                                        '@keyframes spinRing': {
                                            from: { transform: 'rotate(0deg)' },
                                            to: { transform: 'rotate(360deg)' }
                                        }
                                    }}
                                >
                                    {/* Icon & Title Group */}
                                    <Stack 
                                        direction="column" 
                                        spacing={2} 
                                        sx={{ 
                                            minWidth: isWide ? { md: '280px' } : 'auto',
                                            alignItems: isWide ? { xs: 'flex-start', md: 'flex-start' } : 'stretch'
                                        }}
                                    >
                                        <Box
                                            className="service-icon-wrapper"
                                            sx={{
                                                position: 'relative',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '64px',
                                                height: '64px',
                                            }}
                                        >
                                            {/* Spinning sci-fi ring */}
                                            <Box
                                                className="tech-ring"
                                                sx={{
                                                    position: 'absolute',
                                                    inset: -6,
                                                    borderRadius: '50%',
                                                    border: `1.5px dashed ${service.color}33`,
                                                    transition: 'transform 0.4s ease',
                                                    pointerEvents: 'none',
                                                }}
                                            />
                                            
                                            <Box
                                                className="service-icon"
                                                sx={{
                                                    fontSize: '2.2rem',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '16px',
                                                    background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(15, 23, 42, 0.03)',
                                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.05)' : theme.palette.divider}`,
                                                    color: 'text.secondary',
                                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                                    zIndex: 1,
                                                }}
                                            >
                                                {service.icon}
                                            </Box>
                                        </Box>

                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontFamily: 'var(--font-outfit), sans-serif',
                                                fontSize: '1.4rem',
                                                fontWeight: 800,
                                                color: 'text.primary',
                                                letterSpacing: '-0.01em',
                                                marginTop: '0.8rem',
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                    </Stack>

                                    {/* Description & Tags Group */}
                                    <Stack 
                                        direction="column" 
                                        spacing={2} 
                                        sx={{ 
                                            flex: 1,
                                            height: '100%',
                                            justifyContent: 'space-between',
                                            mt: isWide ? { xs: 0, md: 0 } : 0
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.6,
                                                fontFamily: 'var(--font-inter), sans-serif',
                                                fontSize: '0.95rem',
                                                mb: isWide ? 0 : 2,
                                            }}
                                        >
                                            {service.desc}
                                        </Typography>

                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', mt: 'auto' }}>
                                            {service.tags.map((tag) => (
                                                <Box
                                                    key={tag}
                                                    className="service-tag"
                                                    sx={{
                                                        fontFamily: 'var(--font-inter), sans-serif',
                                                        fontSize: '0.75rem',
                                                        color: 'text.secondary',
                                                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : theme.palette.divider}`,
                                                        borderRadius: '6px',
                                                        padding: '0.4rem 0.9rem',
                                                        letterSpacing: '0.01em',
                                                        fontWeight: 600,
                                                        textTransform: 'uppercase',
                                                        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
                                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                                    }}
                                                >
                                                    {tag}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Stack>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
};

export default Services;
