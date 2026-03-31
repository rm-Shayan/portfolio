'use client';

import React from 'react';
import { Box, Typography, Container, Grid, Button, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';

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
    return (
        <Box id="blog" sx={{ py: '7rem', background: 'var(--bg1)' }}>
            <Container maxWidth="lg">
                <SectionHeader num="06" title="Digital Insights" />

                <Grid container spacing={3}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                sx={{
                                    background: 'var(--bg2)',
                                    border: '1px solid var(--border)',
                                    overflow: 'hidden',
                                    transition: 'all 0.35s',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                                    '&:hover': {
                                        borderColor: '#00f5ff',
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '140px',
                                        background: 'linear-gradient(135deg, var(--bg3), var(--bg0))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '2.5rem',
                                        position: 'relative',
                                        overflow: 'hidden',
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
                                <Box sx={{ padding: '1.4rem', flexGrow: 1 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'var(--font-share-tech-mono)',
                                            fontSize: '0.6rem',
                                            color: 'secondary.main',
                                            letterSpacing: '0.15em',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        {post.cat}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontFamily: 'var(--font-orbitron)',
                                            fontSize: '0.85rem',
                                            fontWeight: 700,
                                            color: '#fff',
                                            marginBottom: '0.5rem',
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {post.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.8rem' }}
                                    >
                                        {post.excerpt}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        padding: '1rem 1.4rem',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontFamily: 'var(--font-share-tech-mono)',
                                        fontSize: '0.6rem',
                                        color: 'text.secondary',
                                        borderTop: '1px solid rgba(0, 245, 255, 0.05)',
                                    }}
                                >
                                    <span>{post.date}</span>
                                    <Box
                                        component="a"
                                        href="#"
                                        sx={{
                                            color: 'primary.main',
                                            textDecoration: 'none',
                                            transition: 'text-shadow 0.2s',
                                            '&:hover': { textShadow: '0 0 12px #00f5ff' },
                                        }}
                                    >
                                        Read →
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;
