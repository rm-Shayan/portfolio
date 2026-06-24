'use client';

import React from 'react';
import { Box, Typography, Container, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const experiences = [
  {
    period: '2024 — 2025',
    role: 'Self-Learning Frontend Developer',
    company: 'S.M.I.T · Karachi, Pakistan',
    desc: 'Mastered HTML, CSS, JavaScript, and React through structured self-learning, online courses, and building personal projects. Developed strong foundations in responsive design and modern JS.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
  },
  {
    period: '2025-2026',
    role: 'Self-Learning Backend Developer',
    company: 'S.M.I.T · Karachi, Pakistan',
    desc: 'Gained proficiency in Node.js, Express, and MongoDB through self-directed learning and project development. Built RESTful APIs and full-stack applications to solidify backend skills.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'], 
  },
  {
    period: '2025 — 2026',
    role: 'Full Stack Developer',
    company: 'S.M.I.T · Karachi, Pakistan',
    desc: 'Combined frontend and backend skills to build full-stack applications. Developed projects that integrated React with Node.js and MongoDB, demonstrating the ability to create end-to-end solutions.',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'GCP'],
  },
  {
    period: '2025 — 2026',
    role: 'Mobile App Developer',
    company: 'S.M.I.T · Karachi, Pakistan',
    desc: 'Explored mobile development with React Native, building cross-platform applications that provide seamless user experiences on both iOS and Android devices.',
    tags: ['React Native', 'JavaScript', 'Mobile Development'],
  },
  {
    period: '2025 — Present',
    role: 'Freelance MERN Stack Developer',
    company: 'Self-Employed · Remote',
    desc: 'Delivered 15+ full-stack projects for international clients including e-commerce platforms, SaaS dashboards, and REST APIs. Specialized in fast delivery and pixel-perfect UI implementation.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    period: '2026 — Present',
    role: 'Web Developer',
    company: 'Saylani Tech Limited · Karachi, Pakistan',
    desc: 'Completed intensive full-stack MERN program covering React, Node.js, Express, MongoDB, and modern deployment workflows. Built 5 real-world capstone projects with mentorship from senior developers.',
    tags: ['MERN Stack', 'Git', 'REST APIs', 'Deployment'],
  },
];

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  return (
    <Box 
      id="experience" 
      sx={{ 
        py: { xs: '5rem', md: '8rem', lg: '10rem' }, 
        background: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader num="04" title="My Journey" />

        <Box sx={{ position: 'relative', mt: { xs: 4, md: 8 } }}>
          
          {/* Vertical Path Line (Central on Desktop, Left on Mobile) */}
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '16px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: '10px',
              bottom: '10px',
              width: '2px',
              background: isDark 
                ? 'linear-gradient(to bottom, #00f5ff 0%, #ff00c8 50%, transparent 100%)'
                : `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 50%, transparent 100%)`,
              opacity: 0.8,
            }}
          />

          {/* Experience Timeline Grid */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const accentColor = isEven ? '#00f5ff' : '#ff00c8';

              return (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: {
                      xs: 'flex-start',
                      md: isEven ? 'flex-start' : 'flex-end',
                    },
                    width: '100%',
                    position: 'relative',
                    paddingLeft: { xs: '3rem', md: 0 },
                    marginBottom: '4rem',
                  }}
                >
                  {/* Timeline Node Point (Diamond badged indicator) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '16px', md: '50%' },
                      transform: 'translate(-50%, -50%)',
                      top: '32px', // vertically aligns to card header
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: accentColor,
                      border: `3px solid ${isDark ? '#020508' : '#ffffff'}`,
                      boxShadow: isDark 
                        ? `0 0 16px ${accentColor}, 0 0 8px ${accentColor}` 
                        : `0 0 10px ${accentColor}88`,
                      zIndex: 2,
                    }}
                  />

                  {/* Glassmorphic Journey Card */}
                  <Box
                    component={motion.div}
                    initial={{ 
                      opacity: 0, 
                      x: isMobile ? 40 : (isEven ? -60 : 60) 
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    sx={{
                      width: { xs: '100%', md: 'calc(50% - 2.5rem)' },
                      background: isDark 
                        ? 'linear-gradient(145deg, rgba(13, 25, 38, 0.6) 0%, rgba(6, 14, 23, 0.85) 100%)' 
                        : 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(12px)',
                      border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.04)' : theme.palette.divider}`,
                      borderRadius: '16px',
                      padding: '2.2rem',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      boxShadow: isDark 
                        ? '0 10px 30px rgba(0, 0, 0, 0.25)' 
                        : '0 10px 30px rgba(15, 23, 42, 0.04)',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100px',
                        height: '100px',
                        background: `radial-gradient(circle at top right, ${accentColor}22, transparent 70%)`,
                        opacity: 0.4,
                        transition: 'opacity 0.4s',
                        pointerEvents: 'none',
                      },
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        borderColor: `${accentColor}66`,
                        boxShadow: isDark
                          ? `0 20px 40px rgba(0, 0, 0, 0.45), 0 0 20px ${accentColor}18`
                          : `0 20px 40px rgba(15, 23, 42, 0.08), 0 5px 15px ${accentColor}18`,
                        '&::before': { opacity: 0.8 },
                        '& .journey-tag': {
                          borderColor: accentColor,
                          color: accentColor,
                          background: `${accentColor}08`,
                        }
                      },
                    }}
                  >
                    {/* Period Banner Tag */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-share-tech-mono), monospace',
                        fontSize: '0.75rem',
                        color: accentColor,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        marginBottom: '0.6rem',
                        textTransform: 'uppercase',
                        textShadow: isDark ? `0 0 10px ${accentColor}44` : 'none'
                      }}
                    >
                      {exp.period}
                    </Typography>

                    {/* Role Title */}
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'text.primary',
                        marginBottom: '0.25rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.role}
                    </Typography>

                    {/* Company Designation */}
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-inter), sans-serif',
                        fontSize: '0.85rem',
                        color: isDark ? 'primary.light' : 'primary.main',
                        fontWeight: 600,
                        marginBottom: '1rem',
                        opacity: 0.9,
                      }}
                    >
                      {exp.company}
                    </Typography>

                    {/* Description Text */}
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: 'text.secondary', 
                        lineHeight: 1.7, 
                        fontSize: '0.95rem', 
                        fontFamily: 'var(--font-inter), sans-serif',
                        marginBottom: '1.4rem',
                      }}
                    >
                      {exp.desc}
                    </Typography>

                    {/* Skill Tags */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {exp.tags.map((tag) => (
                        <Box
                          key={tag}
                          className="journey-tag"
                          sx={{
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontSize: '0.7rem',
                            color: 'text.secondary',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : theme.palette.divider}`,
                            background: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(15, 23, 42, 0.02)',
                            padding: '0.35rem 0.8rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.01em',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          }}
                        >
                          {tag}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
