'use client';

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const blogPosts = [
    {
        title: 'How I Boosted a Next.js App from 40 to 98 Lighthouse Score',
        cat: 'Next.js · Performance',
        excerpt: 'The exact techniques I used — image lazy loading, route splitting, ISR caching, and font optimization — to deliver blazing results.',
        date: 'Mar 2024 · 8 min read',
        icon: '⚡',
    },
    {
        title: 'Structuring a Scalable MERN Application in 2024',
        cat: 'Architecture · MERN',
        excerpt: 'A battle-tested folder structure, API conventions, and error handling patterns I use in every production MERN project.',
        date: 'Feb 2024 · 12 min read',
        icon: '🏗️',
    },
    {
        title: 'JWT Auth Done Right — Refresh Tokens, Rotation & Revocation',
        cat: 'Security · Node.js',
        excerpt: 'Stop implementing broken auth. Here\'s the complete production-grade JWT authentication flow with refresh token rotation.',
        date: 'Jan 2024 · 10 min read',
        icon: '🔐',
    },
];

const Blog = () => {
    const theme = useTheme();
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    return (
        <Box id="blog" sx={{ py: '7rem', background: 'background.default' }}>
            <Container maxWidth="lg">
                <SectionHeader num="06" title="Digital Insights" />

                {/* --- FLEX CONTAINER --- */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 3, // Maintains consistent spacing between cards
                        justifyContent: 'center' 
                    }}
                >
                    {blogPosts.map((post, index) => (
                        <Box
                            key={index}
                            component={motion.div}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            sx={{
                                // Responsive Flex Basis (Replaces xs, sm, md)
                                flex: {
                                    xs: '1 1 100%',            // Full width on mobile
                                    sm: '1 1 calc(50% - 24px)', // 2 columns (gap adjustment)
                                    md: '1 1 calc(33.333% - 24px)' // 3 columns
                                },
                                maxWidth: {
                                    xs: '100%',
                                    md: 'calc(33.333% - 24px)'
                                },
                                background: 'background.paper',
                                border: `1px solid ${theme.palette.divider}`,
                                overflow: 'hidden',
                                transition: 'all 0.35s',
                                display: 'flex',
                                flexDirection: 'column',
                                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    transform: 'translateY(-5px)',
                                    boxShadow: isDark ? 'none' : '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
                                },
                            }}
                        >
                            {/* Card Media Section */}
                            <Box
                                sx={{
                                    height: '140px',
                                    background: isDark ? 'linear-gradient(135deg, var(--bg3), var(--bg0))' : '#f8fafc',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    position: 'relative',
                                }}
                            >
                                {post.icon}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        height: '1px',
                                        background: 'linear-gradient(to right, transparent, #ff00c8, transparent)',
                                    }}
                                />
                            </Box>

                            {/* Card Content */}
                            <Box sx={{ padding: '1.4rem', flexGrow: 1 }}>
                                 <Typography
                                    sx={{
                                        fontFamily: 'var(--font-inter), sans-serif',
                                        fontSize: '0.75rem',
                                        color: 'primary.main',
                                        letterSpacing: '0.05em',
                                        marginBottom: '0.6rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {post.cat}
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: 'var(--font-outfit), sans-serif',
                                        fontSize: '1.15rem',
                                        fontWeight: 800,
                                        color: 'text.primary',
                                        marginBottom: '0.8rem',
                                        lineHeight: 1.3,
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    {post.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ 
                                        color: 'text.secondary', 
                                        lineHeight: 1.6, 
                                        fontSize: '0.9rem',
                                        fontFamily: 'var(--font-inter), sans-serif',
                                    }}
                                >
                                    {post.excerpt}
                                </Typography>
                            </Box>

                            {/* Card Footer */}
                            <Box
                                sx={{
                                    padding: '1rem 1.4rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontFamily: 'var(--font-inter), sans-serif',
                                    fontSize: '0.75rem',
                                    color: 'text.secondary',
                                    borderTop: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <span style={{ fontWeight: 500 }}>{post.date}</span>
                                <Box
                                    component="a"
                                    href="#"
                                    sx={{
                                        color: 'primary.main',
                                        textDecoration: 'none',
                                        fontWeight: 800,
                                        fontFamily: 'var(--font-outfit), sans-serif',
                                        fontSize: '0.85rem',
                                        transition: 'all 0.2s',
                                        '&:hover': { 
                                            textShadow: isDark ? '0 0 12px rgba(0, 245, 255, 0.4)' : 'none',
                                            transform: 'translateX(4px)'
                                        },
                                    }}
                                >
                                    Read →
                                </Box>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default Blog;