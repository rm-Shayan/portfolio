'use client';

import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';

const experiences = [
  {
    period: '2023 — Present',
    role: 'Freelance MERN Stack Developer',
    company: 'Self-Employed · Remote',
    desc: 'Delivered 15+ full-stack projects for international clients including e-commerce platforms, SaaS dashboards, and REST APIs. Specialized in fast delivery and pixel-perfect UI implementation.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    period: '2022 — 2023',
    role: 'Web Development Trainee',
    company: 'Saylani Mass I.T Training (S.M.I.T) · Karachi',
    desc: 'Completed intensive full-stack MERN program covering React, Node.js, Express, MongoDB, and modern deployment workflows. Built 5 real-world capstone projects with mentorship from senior developers.',
    tags: ['MERN Stack', 'Git', 'REST APIs', 'Deployment'],
  },
  {
    period: '2021 — 2022',
    role: 'Self-Taught Frontend Developer',
    company: 'Independent Learning',
    desc: 'Mastered HTML, CSS, JavaScript, and React through structured self-learning, online courses, and building personal projects. Developed strong foundations in responsive design and modern JS.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind'],
  },
];

const Experience = () => {
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  return (
    <Box id="experience" sx={{ py: '7rem', background: isDark ? 'var(--bg1)' : '#ffffff' }}>
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
              background: 'linear-gradient(to bottom, #00f5ff, #ff00c8, transparent)',
              boxShadow: '0 0 10px #00f5ff',
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
                  background: '#00f5ff',
                  border: `2px solid ${isDark ? 'var(--bg1)' : '#ffffff'}`,
                  boxShadow: isDark ? '0 0 16px #00f5ff' : '0 4px 10px rgba(0,0,0,0.1)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              />

              <Typography
                sx={{
                  fontFamily: 'var(--font-share-tech-mono)',
                  fontSize: '0.65rem',
                  color: isDark ? 'secondary.main' : 'primary.main',
                  letterSpacing: '0.15em',
                  marginBottom: '0.4rem',
                }}
              >
                {exp.period}
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: 'var(--font-orbitron)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: isDark ? '#fff' : '#0f172a',
                  marginBottom: '0.25rem',
                }}
              >
                {exp.role}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--font-share-tech-mono)',
                  fontSize: '0.75rem',
                  color: 'primary.main',
                  letterSpacing: '0.1em',
                  marginBottom: '0.8rem',
                }}
              >
                {exp.company}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.9rem', maxWidth: '600px' }}
              >
                {exp.desc}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.8rem' }}>
                {exp.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      fontFamily: 'var(--font-share-tech-mono)',
                      fontSize: '0.6rem',
                      color: 'text.secondary',
                      border: '1px solid rgba(0, 245, 255, 0.18)',
                      padding: '0.2rem 0.6rem',
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
