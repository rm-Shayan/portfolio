'use client';

import React from 'react';
import { useRef } from 'react';
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
  {
    title: 'Live-stock Management',
    category: 'Mobile App · Expo',
    desc: 'A comprehensive livestock management system for tracking batches, branches, and allocations with real-time updates and secure data handling.',
    tech: ['React Native', 'Expo', 'Redux', 'Node.js'],
    icon: '🐏',
    image: '/assets/livestock.png',
    url: 'https://expo.dev/artifacts/eas/4ipcc69U8RLpM7XVMY29g2.apk',
    repo: 'https://github.com/rm-Shayan/Live-stock---own',
  },
  {
    title: 'SMIT – BMS Tracker',
    category: 'Web App · Management',
    desc: 'An intern and mentor tracking application featuring assignment checking, a real-time chat system, check-in/out functionality, and job updates.',
    tech: ['React', 'Dashboard', 'Tracking'],
    icon: '🎓',
    image: 'https://s0.wp.com/mshots/v1/https://bms-frontend-eight.vercel.app/?w=1000',
    url: 'https://bms-frontend-eight.vercel.app/',
    repo: 'https://github.com/Mdusman398/BMS-Tracker-Team',
  }
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
    <Box id="projects" sx={{ py: '10rem', position: 'relative', overflow: 'hidden', background: 'background.default' }}>
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
              fontFamily: 'var(--font-outfit), sans-serif',
              color: 'primary.main',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '0.2em',
              mt: -3, mb: 2,
              textTransform: 'uppercase'
            }}>
              EXPLORE SYSTEMS
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} sx={{ display: { xs: 'none', md: 'flex' }, pb: 4 }}>
            <IconButton
              onClick={() => scroll('left')}
              sx={{
                color: 'primary.main',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 0,
                background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(3, 105, 161, 0.03)',
                '&:hover': { 
                    background: isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(3, 105, 161, 0.08)',
                    borderColor: 'primary.main' 
                }
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>
            <IconButton
              onClick={() => scroll('right')}
              sx={{
                color: 'primary.main',
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 0,
                background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(3, 105, 161, 0.03)',
                '&:hover': { 
                    background: isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(3, 105, 161, 0.08)',
                    borderColor: 'primary.main' 
                }
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
                      background: 'background.paper',
                      border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)'}`,
                      overflow: 'hidden',
                      position: 'relative',
                      borderRadius: 0,
                      clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)',
                      height: { xs: 'auto', md: 380 },
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: isDark ? '0 40px 80px rgba(0, 0, 0, 0.8)' : '0 30px 60px -12px rgba(15, 23, 42, 0.12), 0 18px 36px -18px rgba(15, 23, 42, 0.15)',
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
                        background: 'background.default',
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
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '0.75rem',
                          color: 'primary.main',
                          letterSpacing: '0.05em',
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
                          fontFamily: 'var(--font-outfit), sans-serif',
                          fontSize: '1.4rem',
                          fontWeight: 800,
                          color: 'text.primary',
                          mb: 1.5,
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.9rem',
                          lineHeight: 1.7,
                          mb: 4,
                          fontFamily: 'var(--font-inter), sans-serif',
                        }}
                      >
                        {project.desc}
                      </Typography>

                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 'auto', mb: 3 }}>
                        {project.tech.map((t) => (
                          <Box
                            key={t}
                            sx={{
                              padding: '0.35rem 0.9rem',
                              border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.15)' : theme.palette.divider}`,
                              background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(15, 23, 42, 0.03)',
                              color: isDark ? 'primary.light' : 'primary.main',
                              fontSize: '0.7rem',
                              fontFamily: 'var(--font-inter), sans-serif',
                              fontWeight: 600,
                              textTransform: 'uppercase',
                              borderRadius: '6px',
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
                          href={project.repo || '#'}
                          target={project.repo ? "_blank" : undefined}
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
                          {project.title === 'Live-stock Management' ? 'Download' : 'Initiate'}
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
