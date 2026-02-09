'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/mockData';

export default function Hero() {
    return (
        <Box
            id="hero"
            sx={{
                height: 'calc(100vh - 64px)', // Adjust for navbar height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                background: 'linear-gradient(45deg, rgba(37,99,235,0.1) 0%, rgba(147,51,234,0.1) 100%)',
            }}
        >
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Hi, I'm <Box component="span" sx={{ color: 'primary.main' }}>{portfolioData.hero.name}</Box>
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Typography variant="h4" component="h2" color="text.secondary" gutterBottom>
                        {portfolioData.hero.role}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
                        {portfolioData.hero.description}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        href="#projects"
                        sx={{ mr: 2 }}
                    >
                        View Work
                    </Button>
                    <Button
                        variant="outlined"
                        size="large"
                        color="secondary"
                        href="#contact"
                    >
                        Contact Me
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
