'use client';

import React from 'react';
import { Box, Typography, Container, Stack, IconButton, useTheme } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const Footer = () => {
    const theme = useTheme();
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    return (
        <Box
            component="footer"
            sx={{
                background: isDark ? 'var(--bg1)' : '#fff',
                borderTop: `1px solid ${theme.palette.divider}`,
                padding: '4rem 0',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {/* Brand */}
                    <Stack spacing={1} alignItems={{ xs: 'center', md: 'start' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontFamily: 'var(--font-orbitron)',
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                color: 'primary.main',
                                letterSpacing: '0.1em',
                                '& span': { color: 'secondary.main' },
                            }}
                        >
                            RMS<span>.</span>DEV
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontFamily: 'var(--font-share-tech-mono)',
                                fontSize: '0.7rem',
                                color: 'text.secondary',
                                letterSpacing: '0.1em',
                                textAlign: { xs: 'center', md: 'left' },
                            }}
                        >
                            Architecting the digital future.
                        </Typography>
                    </Stack>

                    {/* Copy */}
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-share-tech-mono)',
                            fontSize: '0.7rem',
                            color: 'text.secondary',
                            letterSpacing: '0.1em',
                            textAlign: 'center',
                            '& span': { color: 'primary.main' },
                        }}
                    >
                        © 2024 <span>Rao Muhammad Shayan</span> · Karachi, Pakistan
                    </Typography>

                    {/* Socials */}
                    <Stack direction="row" spacing={1.5}>
                        {[
                            { icon: <LinkedInIcon sx={{ fontSize: '1rem' }} />, label: 'LinkedIn', href: 'https://linkedin.com/in/rao-muhammad-shayan-470a51344' },
                            { icon: <GitHubIcon sx={{ fontSize: '1rem' }} />, label: 'GitHub', href: 'https://github.com/shayan' },
                            { icon: <TwitterIcon sx={{ fontSize: '1rem' }} />, label: 'Twitter', href: '#' },
                            { icon: <WhatsAppIcon sx={{ fontSize: '1rem' }} />, label: 'WhatsApp', href: '#' },
                        ].map((social, i) => (
                            <IconButton
                                key={i}
                                component="a"
                                href={social.href}
                                target="_blank"
                                sx={{
                                    width: '40px',
                                    height: '40px',
                                    border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    color: 'text.secondary',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                    background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                        color: 'primary.main',
                                        background: isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(0, 245, 255, 0.05)',
                                        boxShadow: isDark ? '0 0 16px #00f5ff' : 'none',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
