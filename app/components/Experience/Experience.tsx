'use client';

import React from 'react';
import { Box, Typography, Container, Stack, useTheme } from '@mui/material';
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
    role: 'Self-Learning Backened Developer',
    company: 'S.M.I.T · Karachi, Pakistan',
    desc: 'Gained proficiency in Node.js, Express, and MongoDB through self-directed learning and project development. Built RESTful APIs and full-stack applications to solidify backend skills.',
    tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'], 
  },
  {
    period: '2025 — 2026',
      role: 'Full Stack Developer',
      company: 'S.M.I.T · Karachi, Pakistan',
      desc: 'Combined frontend and backend skills to build full-stack applications. Developed projects that integrated React with Node.js and MongoDB, demonstrating the ability to create end-to-end solutions.',
      tags: ['React', 'Node.js', 'MongoDB', 'Full Stack Development,AWS, GCP'],
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
    role: 'Web Developer ',
    company: 'Saylani Tech Liited · Karachi, Pakistan',
    desc: 'Completed intensive full-stack MERN program covering React, Node.js, Express, MongoDB, and modern deployment workflows. Built 5 real-world capstone projects with mentorship from senior developers.',
    tags: ['MERN Stack', 'Git', 'REST APIs', 'Deployment'],
  },
  
];

const Experience = () => {
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  return (
    <Box id="experience" sx={{ py: '7rem', background: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader num="04" title="My Journey" />

        <Box sx={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical Line */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '1px',
              background: isDark 
                ? 'linear-gradient(to bottom, #00f5ff, #ff00c8, transparent)'
                : `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
              boxShadow: isDark ? '0 0 10px #00f5ff' : 'none',
            }}
          />

          {experiences.map((exp, index) => (
            <Box
              key={index}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              sx={{
                position: 'relative',
                marginBottom: '3rem',
                paddingLeft: '2.5rem',
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '-2rem',
                  top: '12px',
                  width: '10px',
                  height: '10px',
                  background: 'primary.main',
                  border: `2px solid ${theme.palette.background.default}`,
                  boxShadow: isDark ? '0 0 16px #00f5ff' : `0 0 12px ${theme.palette.primary.main}40`,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              />

              <Typography
                sx={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.75rem',
                  color: isDark ? 'secondary.main' : 'primary.main',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  marginBottom: '0.4rem',
                }}
              >
                {exp.period}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: 'text.primary',
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {exp.role}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '0.85rem',
                  color: 'primary.main',
                  fontWeight: 600,
                  marginBottom: '0.8rem',
                }}
              >
                {exp.company}
              </Typography>
              <Typography
                variant="body2"
                sx={{ 
                  color: 'text.secondary', 
                  lineHeight: 1.7, 
                  fontSize: '0.95rem', 
                  maxWidth: '700px',
                  fontFamily: 'var(--font-inter), sans-serif',
                }}
              >
                {exp.desc}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.8rem' }}>
                {exp.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      fontFamily: 'var(--font-inter), sans-serif',
                      fontSize: '0.7rem',
                      color: 'text.secondary',
                      border: `1px solid ${theme.palette.divider}`,
                      background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '4px',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;
