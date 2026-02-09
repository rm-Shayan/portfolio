'use client';

import { Box, Typography, Container, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { portfolioData } from '../../../data/mockData';

export default function Contact() {
    return (
        <Box id="contact" sx={{ py: 12 }}>
            <Container maxWidth="sm">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h3" component="h2" gutterBottom>
                            Get In Touch
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <Button
                                variant="contained"
                                startIcon={<EmailIcon />}
                                href={`mailto:${portfolioData.contact.email}`}
                                size="large"
                            >
                                Email Me
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<LinkedInIcon />}
                                href={portfolioData.contact.linkedin}
                                target="_blank"
                                size="large"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                variant="outlined"
                                startIcon={<GitHubIcon />}
                                href={portfolioData.contact.github}
                                target="_blank"
                                size="large"
                            >
                                GitHub
                            </Button>
                        </Stack>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
