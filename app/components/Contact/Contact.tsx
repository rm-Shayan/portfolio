'use client';

import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, Stack, useTheme, IconButton, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const contactLinks = [
    { icon: <EmailIcon />, label: 'shayan@email.com', href: 'mailto:shayan@email.com', color: '#00f5ff' },
    { icon: <LinkedInIcon />, label: 'linkedin.com/in/rao-muhammad-shayan', href: 'https://linkedin.com/in/rao-muhammad-shayan-470a51344', color: '#0077b5' },
    { icon: <GitHubIcon />, label: 'github.com/shayan', href: 'https://github.com', color: '#fff' },
    { icon: <LocationOnIcon />, label: 'Karachi, Sindh, Pakistan', href: '#', color: '#ff00c8' },
];

const Contact = () => {
    const [status, setStatus] = useState('Send Message');
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Message Sent! ✔');
        setTimeout(() => setStatus('Send Message'), 3000);
    };

    return (
        <Box id="contact" sx={{ py: '8rem', background: isDark ? 'transparent' : '#f8fafc' }}>
            <Container maxWidth="lg">
                <SectionHeader num="07" title="Get In Touch" />

                <Grid container spacing={10}>
                    {/* Left Column - Info */}
                    <Grid item xs={12} md={5}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontFamily: 'var(--font-orbitron)',
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    fontWeight: 800,
                                    color: isDark ? '#fff' : '#1a202c',
                                    lineHeight: 1.2,
                                    '& span': { color: 'primary.main', textShadow: isDark ? '0 0 30px #00f5ff' : 'none' },
                                }}
                            >
                                Let's build something <span>legendary</span> together.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.8,
                                    fontSize: '1.1rem',
                                    maxWidth: '400px'
                                }}
                            >
                                Whether you have a startup idea, need a developer for your team, or want to supercharge an existing product — I'm ready to ship.
                            </Typography>

                            <Stack spacing={3}>
                                {contactLinks.map((link, i) => (
                                    <Stack
                                        key={i}
                                        direction="row"
                                        alignItems="center"
                                        spacing={2}
                                        component="a"
                                        href={link.href}
                                        sx={{
                                            color: 'text.secondary',
                                            textDecoration: 'none',
                                            fontFamily: 'var(--font-share-tech-mono)',
                                            fontSize: '0.9rem',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                color: 'primary.main',
                                                '& .icon-box': {
                                                    borderColor: 'primary.main',
                                                    background: isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(0, 245, 255, 0.05)',
                                                    color: 'primary.main',
                                                    boxShadow: isDark ? '0 0 16px #00f5ff' : 'none',
                                                },
                                            },
                                        }}
                                    >
                                        <Box
                                            className="icon-box"
                                            sx={{
                                                width: '44px',
                                                height: '44px',
                                                border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                transition: 'all 0.3s',
                                                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                                background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#fff',
                                            }}
                                        >
                                            {link.icon}
                                        </Box>
                                        <Typography sx={{ fontWeight: 600 }}>{link.label}</Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Column - Form */}
                    <Grid item xs={12} md={7}>
                        <Box
                            component={motion.form}
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Paper
                                sx={{
                                    p: { xs: 3, md: 5 },
                                    background: isDark ? 'var(--bg2)' : '#fff',
                                    border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.12)' : 'rgba(0, 0, 0, 0.05)'}`,
                                    borderRadius: 0,
                                    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
                                    boxShadow: isDark ? 'none' : '0 20px 40px rgba(0,0,0,0.05)',
                                }}
                            >
                                <Grid container spacing={3}>
                                    {[
                                        { label: 'Your Name', placeholder: 'John Doe', xs: 6 },
                                        { label: 'Email Address', placeholder: 'john@company.com', type: 'email', xs: 6 },
                                        { label: 'Project Type', placeholder: 'e.g. E-Commerce / SaaS', xs: 12 },
                                    ].map((field) => (
                                        <Grid item xs={field.xs} key={field.label}>
                                            <Stack spacing={1}>
                                                <Typography
                                                    sx={{
                                                        fontFamily: 'var(--font-share-tech-mono)',
                                                        fontSize: '0.7rem',
                                                        color: 'primary.main',
                                                        letterSpacing: '0.15em',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {field.label}
                                                </Typography>
                                                <TextField
                                                    fullWidth
                                                    variant="standard"
                                                    placeholder={field.placeholder}
                                                    type={field.type || 'text'}
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        sx: {
                                                            fontFamily: 'var(--font-rajdhani)',
                                                            fontSize: '1rem',
                                                            color: isDark ? '#fff' : '#1a202c',
                                                            background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc',
                                                            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                                            padding: '0.8rem 1.2rem',
                                                            clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                                                            transition: 'all 0.3s',
                                                            '&:focus-within': {
                                                                borderColor: 'primary.main',
                                                                background: isDark ? 'rgba(0, 245, 255, 0.03)' : '#fff',
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Stack>
                                        </Grid>
                                    ))}

                                    <Grid item xs={12}>
                                        <Stack spacing={1}>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'var(--font-share-tech-mono)',
                                                    fontSize: '0.7rem',
                                                    color: 'primary.main',
                                                    letterSpacing: '0.15em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                }}
                                            >
                                                Project Details
                                            </Typography>
                                            <TextField
                                                fullWidth
                                                multiline
                                                rows={4}
                                                variant="standard"
                                                placeholder="Describe your goals, timeline, and budget..."
                                                InputProps={{
                                                    disableUnderline: true,
                                                    sx: {
                                                        fontFamily: 'var(--font-rajdhani)',
                                                        fontSize: '1rem',
                                                        color: isDark ? '#fff' : '#1a202c',
                                                        background: isDark ? 'rgba(255, 255, 255, 0.03)' : '#f8fafc',
                                                        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                                                        padding: '0.8rem 1.2rem',
                                                        clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                                                        transition: 'all 0.3s',
                                                        '&:focus-within': {
                                                            borderColor: 'primary.main',
                                                            background: isDark ? 'rgba(0, 245, 255, 0.03)' : '#fff',
                                                        },
                                                    },
                                                }}
                                            />
                                        </Stack>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            endIcon={<SendIcon />}
                                            sx={{
                                                padding: '1.2rem',
                                                fontSize: '1rem',
                                                fontWeight: 900,
                                                background: status.includes('Sent') ? '#00c896' : 'primary.main',
                                                '&:hover': {
                                                    background: status.includes('Sent') ? '#00c896' : 'primary.main',
                                                    transform: 'translateY(-3px)',
                                                }
                                            }}
                                        >
                                            {status}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
