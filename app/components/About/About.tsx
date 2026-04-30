'use client';

import React from 'react';
import { Box, Container, Typography, Paper, useTheme, useMediaQuery, Stack, LinearProgress, Button } from '@mui/material';
import { motion, Variants } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import {
    SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript,
    SiExpress, SiPostgresql, SiDocker, SiGit, SiFramer, SiJavascript, SiRedux, SiFirebase,
    SiHtml5, SiCss3, SiAmazonwebservices
} from 'react-icons/si';
import { FiDownload } from 'react-icons/fi';

const skills = [
    { name: 'React.js', icon: <SiReact />, color: '#61DAFB', pct: 95 },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#fff', pct: 95 },
    { name: 'Redux', icon: <SiRedux />, color: '#764ABC', pct: 90 },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', pct: 95 },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', pct: 82 },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', pct: 90 },
    { name: 'Express', icon: <SiExpress />, color: '#fff', pct: 88 },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', pct: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', pct: 75 },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', pct: 92 },
    { name: 'Git', icon: <SiGit />, color: '#F05032', pct: 88 },
    { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', pct: 80 },
    { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', pct: 95 },
    { name: 'CSS', icon: <SiCss3 />, color: '#1572B6', pct: 90 },
    { name: 'AWS', icon: <SiAmazonwebservices />, color: '#FF9900', pct: 75 },
];

const stats = [
    { label: 'Projects Delivered', val: '20+' },
    { label: 'Years Experience', val: '2+' },
    { label: 'Client Satisfaction', val: '100%' },
    { label: 'Tech Mastered', val: '15+' },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const mode = useSelector((state: RootState) => state.ui.mode);
    const isDark = mode === 'dark';

    const handleDownloadCV = async () => {
        try {
            const response = await fetch('/api/cv/download');
            if (!response.ok) throw new Error('Failed to download CV');
            
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'Rao_Muhammad_Shayan_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download error:', error);
            alert('Failed to download CV. Please try again.');
        }
    };

    return (
        <Box id="about" sx={{ py: { xs: '5rem', md: '10rem' }, background: 'background.default', overflow: 'hidden' }}>
            <Container maxWidth="lg">
                <SectionHeader num="01" title="About & Systems" />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {/* Top Section - Biography */}
                    <Box sx={{ width: '100%' }}>
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    fontSize: { xs: '1.8rem', md: '2.8rem' },
                                    fontWeight: 900,
                                    color: 'text.primary',
                                    mb: 3,
                                    lineHeight: 1.1,
                                    letterSpacing: '-0.02em',
                                    '& span': { 
                                        color: 'primary.main', 
                                        textShadow: isDark ? '0 0 40px rgba(0, 245, 255, 0.4)' : 'none' 
                                    },
                                }}
                            >
                                Designing <span>Digital Fortresses</span> for the Modern Web.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 4,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    fontFamily: 'var(--font-inter), sans-serif',
                                    '& strong': { color: 'primary.main', fontWeight: 700 },
                                }}
                            >
                                I'm <strong>Rao Muhammad Shayan</strong>, based in Karachi. I specialize in building highly scalable, performant MERN applications that don't just work — they dominate. I believe every line of code should be a strategic asset.
                            </Typography>

                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleDownloadCV}
                                startIcon={<FiDownload />}
                                sx={{
                                    padding: '0.8rem 2.2rem',
                                    fontSize: '0.85rem',
                                    fontWeight: 800,
                                    fontFamily: 'var(--font-outfit), sans-serif',
                                    color: '#fff',
                                    clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                    '&:hover': {
                                        transform: 'translateY(-3px)',
                                        boxShadow: isDark ? '0 0 20px rgba(255, 0, 200, 0.4)' : '0 10px 20px rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                            >
                                Download CV
                            </Button>

                            {/* Stats Grid */}
                            <Box sx={{ mt: 6, display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
                                {stats.map((stat, i) => (
                                    <Box key={i} sx={{ width: '100%' }}>
                                        <Box
                                            sx={{
                                                padding: '1.6rem',
                                                border: `1px solid ${theme.palette.divider}`,
                                                background: 'background.paper',
                                                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                                                boxShadow: isDark ? 'none' : '0 15px 30px -10px rgba(0, 0, 0, 0.08)',
                                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                                '&:hover': {
                                                    borderColor: 'primary.main',
                                                    transform: 'translateY(-6px)',
                                                    boxShadow: isDark ? `0 0 20px ${theme.palette.primary.main}22` : '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontFamily: 'var(--font-outfit), sans-serif',
                                                    fontSize: '2rem',
                                                    fontWeight: 900,
                                                    color: 'primary.main',
                                                    mb: 0.5,
                                                    lineHeight: 1,
                                                }}
                                            >
                                                {stat.val}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'var(--font-inter), sans-serif',
                                                    fontSize: '0.75rem',
                                                    color: 'text.secondary',
                                                    letterSpacing: '0.05em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </motion.div>
                    </Box>

                    {/* Bottom Section - Expansive Skill Grid */}
                    <Box sx={{ width: '100%' }}>
                        <Box>
                            <Box
                                component={motion.div}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' },
                                    gap: { xs: 3, md: 5, lg: 3.5 },
                                    width: '100%',
                                }}
                            >
                                {skills.map((skill, i) => (
                                    <Box
                                        key={skill.name}
                                        component={motion.div}
                                        variants={itemVariants}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 2,
                                            padding: '1.5rem',
                                            paddingBottom: '1.2rem',
                                            background: 'background.paper',
                                            border: `1px solid ${theme.palette.divider}`,
                                            transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            boxShadow: isDark ? 'none' : '0 4px 15px rgba(0, 0, 0, 0.03)',
                                            '&:hover': {
                                                borderColor: 'primary.main',
                                                background: isDark ? 'rgba(0, 245, 255, 0.04)' : 'rgba(0, 245, 255, 0.01)',
                                                '& .skill-icon': {
                                                    color: skill.color,
                                                    filter: isDark ? `drop-shadow(0 0 10px ${skill.color})` : 'none',
                                                }
                                            }
                                        }}
                                    >
                                        <Stack direction="row" alignItems="center" spacing={2}>
                                            <Box
                                                className="skill-icon"
                                                sx={{
                                                    fontSize: '1.8rem',
                                                    color: isDark ? 'text.secondary' : '#4a5568',
                                                    transition: 'all 0.3s',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                {skill.icon}
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'var(--font-outfit), sans-serif',
                                                    fontSize: '0.85rem',
                                                    fontWeight: 700,
                                                    color: 'text.primary',
                                                    letterSpacing: '0.01em',
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                {skill.name}
                                            </Typography>
                                        </Stack>

                                        <Box>
                                            <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                                <Typography sx={{ fontSize: '0.65rem', fontFamily: 'var(--font-inter), sans-serif', color: 'text.secondary', fontWeight: 600, letterSpacing: '0.05em' }}>PROFICIENCY</Typography>
                                                <Typography sx={{ fontSize: '0.75rem', fontFamily: 'var(--font-outfit), sans-serif', color: 'primary.main', fontWeight: 800 }}>{skill.pct}%</Typography>
                                            </Stack>
                                            <Box sx={{ height: '3px', background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', borderRadius: '2px', overflow: 'hidden' }}>
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.pct}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                    style={{ height: '100%', background: skill.color, boxShadow: `0 0 10px ${skill.color}` }}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
