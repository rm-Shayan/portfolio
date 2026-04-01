import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Stack, useTheme, IconButton, Paper, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import { sendEmail } from '../../actions/contactForm';
import CustomAlert from './CustomAlert';

const contactLinks = [
    { icon: <EmailIcon />, label: 'shayan@email.com', href: 'mailto:shayan@email.com', color: '#00f5ff' },
    { icon: <LinkedInIcon />, label: 'linkedin.com/in/rao-muhammad-shayan', href: 'https://linkedin.com/in/rao-muhammad-shayan-470a51344', color: '#0077b5' },
    { icon: <GitHubIcon />, label: 'github.com/shayan', href: 'https://github.com', color: '#fff' },
    { icon: <LocationOnIcon />, label: 'Karachi, Sindh, Pakistan', href: '#', color: '#ff00c8' },
];

const Contact = () => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: '',
        details: ''
    });
    
    const [alert, setAlert] = useState<{ open: boolean; type: 'success' | 'error'; message: string }>({
        open: false,
        type: 'success',
        message: ''
    });

    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loading) return;
        
        setLoading(true);
        try {
            const result = await sendEmail(formData);
            if (result.success) {
                setAlert({
                    open: true,
                    type: 'success',
                    message: 'Thanks for reaching out! I typically respond within 24 hours.'
                });
                setFormData({ name: '', email: '', projectType: '', details: '' });
            } else {
                setAlert({
                    open: true,
                    type: 'error',
                    message: result.message || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setAlert({
                open: true,
                type: 'error',
                message: 'Internal connection error. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box id="contact" sx={{ py: '8rem', background: 'background.default' }}>
            <Container maxWidth="lg">
                <SectionHeader num="07" title="Get In Touch" />

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 6, md: 10 } }}>
                    {/* Left Column - Info */}
                    <Box sx={{ width: { xs: '100%', md: 'calc(41.666% - 40px)' }, flexShrink: 0 }}>
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
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    fontWeight: 900,
                                    color: 'text.primary',
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    '& span': { 
                                        color: 'primary.main', 
                                        textShadow: isDark ? '0 0 40px rgba(0, 245, 255, 0.4)' : 'none' 
                                    },
                                }}
                            >
                                Let's build something <span>legendary</span> together.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    lineHeight: 1.7,
                                    fontSize: '1.05rem',
                                    maxWidth: '450px',
                                    fontFamily: 'var(--font-inter), sans-serif',
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
                                            fontFamily: 'var(--font-inter), sans-serif',
                                            fontSize: '1rem',
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
                    </Box>

                    {/* Right Column - Form */}
                    <Box sx={{ width: { xs: '100%', md: 'calc(58.333% - 40px)' }, flexShrink: 0 }}>
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
                                    background: 'background.paper',
                                    border: `1px solid ${theme.palette.divider}`,
                                    borderRadius: 0,
                                    clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))',
                                    boxShadow: isDark ? 'none' : '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                                }}
                            >
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                                        <Stack spacing={1}>
                                            <Typography sx={fieldLabelStyles}>Your Name</Typography>
                                            <TextField
                                                fullWidth
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                variant="standard"
                                                placeholder="John Doe"
                                                disabled={loading}
                                                InputProps={customInputProps(isDark, theme)}
                                            />
                                        </Stack>
                                    </Box>
                                    <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 12px)' } }}>
                                        <Stack spacing={1}>
                                            <Typography sx={fieldLabelStyles}>Email Address</Typography>
                                            <TextField
                                                fullWidth
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                variant="standard"
                                                placeholder="john@company.com"
                                                disabled={loading}
                                                InputProps={customInputProps(isDark, theme)}
                                            />
                                        </Stack>
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <Stack spacing={1}>
                                            <Typography sx={fieldLabelStyles}>Project Type</Typography>
                                            <TextField
                                                fullWidth
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                variant="standard"
                                                placeholder="e.g. E-Commerce / SaaS"
                                                disabled={loading}
                                                InputProps={customInputProps(isDark, theme)}
                                            />
                                        </Stack>
                                    </Box>
                                    <Box sx={{ width: '100%' }}>
                                        <Stack spacing={1}>
                                            <Typography sx={fieldLabelStyles}>Project Details</Typography>
                                            <TextField
                                                fullWidth
                                                required
                                                multiline
                                                rows={4}
                                                name="details"
                                                value={formData.details}
                                                onChange={handleInputChange}
                                                variant="standard"
                                                placeholder="Describe your goals, timeline, and budget..."
                                                disabled={loading}
                                                InputProps={customInputProps(isDark, theme)}
                                            />
                                        </Stack>
                                    </Box>

                                    <Box sx={{ width: '100%' }}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            disabled={loading}
                                            endIcon={loading ? null : <SendIcon />}
                                            sx={{
                                                padding: '1.2rem',
                                                fontSize: '1rem',
                                                fontWeight: 800,
                                                fontFamily: 'var(--font-outfit), sans-serif',
                                                color: '#fff',
                                                background: alert.open && alert.type === 'success' ? '#00c896' : 'primary.main',
                                                '&:hover': {
                                                    background: alert.open && alert.type === 'success' ? '#00c896' : 'primary.main',
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: isDark ? '0 0 30px rgba(0, 184, 200, 0.3)' : '0 10px 20px rgba(3, 105, 161, 0.25)',
                                                },
                                                '&:disabled': {
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                    color: 'rgba(255, 255, 255, 0.3)'
                                                }
                                            }}
                                        >
                                            {loading ? <CircularProgress size={24} color="inherit" /> : (alert.open && alert.type === 'success' ? 'Message Sent!' : 'Send Message')}
                                        </Button>
                                    </Box>
                                </Box>
                                <Typography sx={{ mt: 2, fontSize: '0.7rem', color: 'text.secondary', textAlign: 'center' }}>
                                    I typically respond to project inquiries within 24 hours.
                                </Typography>
                            </Paper>
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Custom Alert */}
            <CustomAlert 
                open={alert.open} 
                type={alert.type} 
                message={alert.message} 
                onClose={() => setAlert(prev => ({ ...prev, open: false }))} 
            />
        </Box>
    );
};

const fieldLabelStyles = {
    fontFamily: 'var(--font-inter), sans-serif',
    fontSize: '0.75rem',
    color: 'primary.main',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    fontWeight: 700,
};

const customInputProps = (isDark: boolean, theme: any) => ({
    disableUnderline: true,
    sx: {
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: '0.95rem',
        color: 'text.primary',
        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
        border: `1px solid ${theme.palette.divider}`,
        padding: '0.9rem 1.4rem',
        clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
        transition: 'all 0.3s',
        '&:focus-within': {
            borderColor: 'primary.main',
            background: isDark ? 'rgba(0, 245, 255, 0.03)' : '#ffffff',
            boxShadow: isDark ? 'none' : '0 10px 20px -10px rgba(3, 105, 161, 0.1)',
        },
        '&.Mui-disabled': {
            opacity: 0.6,
            cursor: 'not-allowed'
        }
    },
});

export default Contact;
