'use client';

import React, { useRef } from 'react';
import { Box, Typography, Container, Stack, useTheme, IconButton, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CodeIcon from '@mui/icons-material/Code';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const projects = [
  {
    title: 'Namaz Tracker',
    category: 'React · Firebase',
    desc: 'React + Firebase app for tracking daily prayers. Users can log their prayers and monitor progress. Designed for seamless user experience and easy tracking of Islamic prayers.',
    tech: ['React', 'Firebase', 'Material-UI'],
    icon: '🕌',
    image: 'https://s0.wp.com/mshots/v1/https://celebrated-gelato-f04291.netlify.app/?w=1000',
    url: 'https://celebrated-gelato-f04291.netlify.app/',
  },
  {
    title: 'Investocrafy — AI Advisor',
    category: 'AI · FinTech',
    desc: 'AI-powered platform providing investment suggestions. Users receive predictive analysis and market insights for better decision-making along with dynamic charts and portfolio tracking.',
    tech: ['React', 'AI', 'Charts.js', 'Node.js'],
    icon: '📈',
    image: 'https://s0.wp.com/mshots/v1/https://ai-saas-inky-eight.vercel.app/?w=1000',
    url: 'https://ai-saas-inky-eight.vercel.app/',
  },
  {
    title: 'FinTech Fraud Reporting',
    category: 'Full-Stack · RBAC',
    desc: 'Multi-tenant web app for reporting banking fraud to the State Bank of Pakistan. Includes Role-Based Access Control (RBAC) for users, banks, and admin ensuring secure handling.',
    tech: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    icon: '🛡️',
    image: 'https://s0.wp.com/mshots/v1/https://finetech-frontened.vercel.app/?w=1000',
    url: 'https://finetech-frontened.vercel.app/',
  },
  {
    title: 'HealthMate',
    category: 'HealthTech · Gemini AI',
    desc: 'Family ki medical reports manage karna ab mushkil nahi. HealthMate mein sab mehfooz hai aur Gemini AI inhein asaan Roman Urdu mein explain karta hai.',
    tech: ['React', 'Gemini AI', 'Tailwind'],
    icon: '⚕️',
    image: 'https://s0.wp.com/mshots/v1/https://healthmate-azure.vercel.app/?w=1000',
    url: 'https://healthmate-azure.vercel.app/',
  },
];

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Box id="projects" sx={{ py: '10rem', position: 'relative', overflow: 'hidden', background: isDark ? 'transparent' : '#f1f5f9' }}>
      {/* Background Decorative Grid */}
      <Box
        sx={{
          position: 'absolute', inset: 0, opacity: isDark ? 0.03 : 0.05, pointerEvents: 'none',
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <Container maxWidth="lg">
        <Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ mb: 6, position: 'relative', zIndex: 1 }}>
          <Box>
            <SectionHeader num="03" title="Production Artifacts" />
            <Typography sx={{
              fontFamily: 'var(--font-rajdhani)',
              color: 'primary.main',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              mt: -3, mb: 2
            }}>
              EXPLORE SYSTEMS
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, pb: 4 }}>
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                color: 'primary.main',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                borderRadius: 0,
                '&:hover': { background: 'rgba(0, 245, 255, 0.1)', borderColor: 'primary.main' }
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                color: 'primary.main',
                border: '1px solid rgba(0, 245, 255, 0.2)',
                borderRadius: 0,
                '&:hover': { background: 'rgba(0, 245, 255, 0.1)', borderColor: 'primary.main' }
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3.5,
            overflowX: 'auto',
            pb: 6,
            px: { xs: 2, md: 0 },
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': {
              height: '6px',
              background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
            },
            '&::-webkit-scrollbar-thumb': {
              background: isDark ? 'rgba(0, 245, 255, 0.3)' : 'rgba(0, 184, 200, 0.2)',
              borderRadius: '3px',
              '&:hover': { background: 'primary.main' }
            },
            scrollbarWidth: 'thin',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <Box
                key={project.title}
                sx={{
                  flex: { xs: '0 0 100%', sm: '0 0 550px', md: '0 0 650px' },
                  scrollSnapAlign: 'start',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      background: isDark ? 'var(--bg2)' : '#fff',
                      border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                      overflow: 'hidden',
                      position: 'relative',
                      borderRadius: 0,
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)',
                      height: { xs: 'auto', md: 380 },
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: isDark ? '0 40px 80px rgba(0, 0, 0, 0.8)' : '0 25px 50px rgba(0, 0, 0, 0.05)',
                        '& .project-media img': { scale: '1.08', filter: 'none' },
                        '&::after': { width: '100%', left: 0 }
                      },
                      '&::after': {
                        content: '""', position: 'absolute', bottom: 0, left: '50%', width: 0, height: '3px',
                        background: 'linear-gradient(to right, primary.main, secondary.main)', transition: 'all 0.5s',
                      }
                    }}
                  >
                    {/* Media Container */}
                    <Box
                      className="project-media"
                      sx={{
                        flex: { xs: '0 0 240px', md: '0 0 280px' },
                        position: 'relative',
                        overflow: 'hidden',
                        background: isDark ? 'var(--bg1)' : '#ffffff',
                      }}
                    >
                      <Box
                        component="img"
                        src={project.image}
                        alt={project.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          filter: isDark ? 'saturate(0.6) contrast(1.1)' : 'none',
                        }}
                      />
                      <Box sx={{ position: 'absolute', top: 15, left: 15, fontSize: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }}>
                        {project.icon}
                      </Box>
                    </Box>

                    {/* Content */}
                    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-share-tech-mono)',
                          fontSize: '0.6rem',
                          color: 'primary.main',
                          letterSpacing: '0.25em',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          mb: 1,
                        }}
                      >
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: 'var(--font-orbitron)',
                          fontSize: '1.25rem',
                          fontWeight: 900,
                          color: isDark ? '#fff' : '#1a202c',
                          mb: 2,
                          lineHeight: 1.3,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.88rem',
                          lineHeight: 1.8,
                          mb: 4,
                        }}
                      >
                        {project.desc}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 'auto', mb: 3 }}>
                        {project.tech.map((t) => (
                          <Box
                            key={t}
                            sx={{
                              padding: '0.25rem 0.7rem',
                              border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(0, 0, 0, 0.04)'}`,
                              background: isDark ? 'rgba(255, 255, 255, 0.02)' : '#f8fafc',
                              color: isDark ? 'primary.light' : 'primary.main',
                              fontSize: '0.58rem',
                              fontFamily: 'var(--font-share-tech-mono)',
                              fontWeight: 700,
                              textTransform: 'uppercase',
                              clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)',
                            }}
                          >
                            {t}
                          </Box>
                        ))}
                      </Stack>

                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<CodeIcon />}
                          sx={{
                            fontSize: '0.7rem', fontWeight: 700, borderRadius: 0,
                            borderColor: 'rgba(0,245,255,0.3)', color: 'text.primary'
                          }}
                        >
                          Artifact
                        </Button>
                        <Button
                          variant="contained"
                          size="small"
                          href={project.url}
                          target="_blank"
                          startIcon={<VisibilityIcon />}
                          sx={{ fontSize: '0.7rem', fontWeight: 900, borderRadius: 0 }}
                        >
                          Initiate
                        </Button>
                      </Stack>
                    </Box>
                  </Box>
                </motion.div>
              </Box>
            ))}
          </AnimatePresence>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
