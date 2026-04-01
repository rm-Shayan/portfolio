'use client';

import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Stack, useTheme, Button, CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import AddTestimonialModal from './AddTestimonialModal';
import { MdAdd } from 'react-icons/md';

const fallbackTestimonials = [
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

    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchTestimonials = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/testimonials');
            const data = await res.json();
            if (data && data.length > 0) {
                setTestimonials(data);
            } else {
                setTestimonials(fallbackTestimonials);
            }
        } catch (error) {
            console.error('Error fetching testimonials:', error);
            setTestimonials(fallbackTestimonials);
        } finally {
            setLoading(false);
        }
    };

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        fetchTestimonials();
    }, []);

    if (!mounted) return null;

    return (
        <Box id="testimonials" sx={{ py: '7rem', background: 'background.default' }}>
            <Container maxWidth="lg">
                <Stack 
                    direction={{ xs: 'column', sm: 'row' }} 
                    justifyContent="space-between" 
                    alignItems={{ xs: 'flex-start', sm: 'center' }}
                    sx={{ mb: 6 }}
                >
                    <SectionHeader num="05" title="Client Voices" />
                    <Button
                        onClick={() => setIsModalOpen(true)}
                        startIcon={<MdAdd />}
                        variant="outlined"
                        sx={{
                            mt: { xs: 2, sm: 0 },
                            borderColor: 'primary.main',
                            color: 'primary.main',
                            fontFamily: 'var(--font-outfit), sans-serif',
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            fontSize: '0.75rem',
                            px: 3,
                            py: 1,
                            borderRadius: '0px',
                            borderWidth: '2px',
                            '&:hover': {
                                borderWidth: '2px',
                                background: 'rgba(0, 245, 255, 0.05)',
                                borderColor: 'primary.main',
                                boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)'
                            }
                        }}
                    >
                        Success Stories
                    </Button>
                </Stack>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
                        <CircularProgress color="primary" />
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                        <AnimatePresence>
                            {testimonials.map((t, index) => (
                                <Box 
                                    key={t.id || index} 
                                    sx={{ width: { xs: '100%', md: 'calc(50% - 12px)' }, display: 'flex' }}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            background: 'background.paper',
                                            border: `1px solid ${theme.palette.divider}`,
                                            padding: '2rem',
                                            position: 'relative',
                                            overflow: 'hidden',
                                            transition: 'all 0.3s',
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
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
                                                flexGrow: 1,
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
                        </AnimatePresence>
                    </Box>
                )}
            </Container>

            <AddTestimonialModal 
                open={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                onSuccess={fetchTestimonials}
            />
        </Box>
    );
};

export default Testimonials;
