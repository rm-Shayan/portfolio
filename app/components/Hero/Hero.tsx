

'use client';

import React from 'react';
import { Box, Typography, Container, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion, Variants } from 'framer-motion';
// TerminalWidget import assumed to be correct in your project structure
import TerminalWidget from './TerminalWidget'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store'; // Adjust import path as needed

// Define variants with explicit typing to resolve the "variant property" error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // Assumes Redux state setup exists
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '6rem 0 3rem', md: '8rem 0 4rem' },
        overflow: 'hidden',
        zIndex: 1,
        backgroundColor: 'background.default',
      }}
    >
      {/* Ambient Orbs - Dynamic for both modes */}
      <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Box
          sx={{
            position: 'absolute', width: isDark ? 520 : 600, height: isDark ? 520 : 600, left: -160, top: -100,
            background: isDark 
              ? 'radial-gradient(circle, rgba(0, 245, 255, 0.12), transparent 70%)'
              : 'radial-gradient(circle, rgba(3, 105, 161, 0.08), transparent 70%)',
            filter: 'blur(90px)',
            animation: 'orbPulse 8s ease-in-out infinite',
            '@keyframes orbPulse': { '0%, 100%': { transform: 'scale(1)' }, '50%': { transform: 'scale(1.1)' } },
          }}
        />
        <Box
          sx={{
            position: 'absolute', width: isDark ? 400 : 500, height: isDark ? 400 : 500, right: -100, bottom: 60,
            background: isDark
              ? 'radial-gradient(circle, rgba(255, 0, 200, 0.10), transparent 70%)'
              : 'radial-gradient(circle, rgba(147, 51, 234, 0.06), transparent 70%)',
            filter: 'blur(90px)',
            animation: 'orbPulse 8s ease-in-out infinite 4s',
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ width: '100%' }}
        >
          {/* Main Grid Layout */}
          <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
                alignItems: 'center',
                gap: isMobile ? '3rem' : '5rem',
            }}
          >
            {/* Left Column (Content) */}
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.6rem', 
                textAlign: { xs: 'center', md: 'left' } 
            }}>
                <motion.div variants={itemVariants}>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontFamily: 'var(--font-outfit), sans-serif',
                      fontSize: '0.85rem',
                      color: 'primary.main',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 800,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                      '&::before': {
                        content: '""',
                        width: '32px',
                        height: '2px',
                        background: theme.palette.primary.main,
                        boxShadow: isDark ? '0 0 8px #00f5ff' : 'none',
                      },
                    }}
                  >
                    Full-Stack MERN Developer
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="h1"
                    sx={{
                      lineHeight: 1.05,
                      letterSpacing: '-0.03em',
                      mb: 1,
                      fontFamily: 'var(--font-outfit), sans-serif',
                      '& .line1': {
                        fontSize: { xs: '2.8rem', sm: '3.5rem', md: '5rem' },
                        color: 'text.primary',
                        display: 'block',
                        fontWeight: 900,
                        textShadow: isDark ? '0 0 40px rgba(255, 255, 255, 0.12)' : 'none',
                      },
                      '& .line2': {
                        fontSize: { xs: '2.8rem', sm: '3.5rem', md: '5rem' },
                        color: 'primary.main',
                        display: 'block',
                        fontWeight: 900,
                        textShadow: isDark ? '0 0 60px #00f5ff, 0 0 120px rgba(0, 245, 255, 0.3)' : 'none',
                      },
                      '& .line3': {
                        fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
                        color: 'secondary.main',
                        display: 'block',
                        marginTop: '0.8rem',
                        textShadow: isDark ? '0 0 30px #ff00c8' : 'none',
                        fontFamily: 'var(--font-outfit), sans-serif',
                        letterSpacing: '0.12em',
                        fontWeight: 700,
                      },
                    }}
                  >
                    <span className="line1">RAO MUHAMMAD</span>
                    <span className="line2 glitch-text" data-text="SHAYAN">SHAYAN</span>
                    <span className="line3">{"< DIGITAL ARCHITECT />"}</span>
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      maxWidth: 540,
                      mx: { xs: 'auto', md: 0 },
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.8,
                    }}
                  >
                    I engineer <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>high-performance web products</Box> that blend cutting-edge aesthetics with robust backend logic. Passionate about <Box component="span" sx={{ color: 'secondary.main', fontWeight: 500 }}>scalability, speed, and user experience</Box>.
                  </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    gap={1.2}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                  >
                    {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'typescript'].map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontSize: '0.75rem',
                          color: isDark ? 'primary.light' : 'primary.main',
                          border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.22)' : theme.palette.divider}`,
                          padding: '0.5rem 1.2rem',
                          letterSpacing: '0.02em',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                          background: isDark ? 'rgba(0, 245, 255, 0.04)' : 'rgba(0, 184, 200, 0.03)',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            background: isDark ? 'rgba(0, 245, 255, 0.12)' : 'rgba(0, 184, 200, 0.08)',
                            color: 'primary.main',
                            boxShadow: isDark ? '0 0 16px rgba(0, 245, 255, 0.2)' : '0 4px 12px rgba(0, 245, 255, 0.1)',
                            transform: 'translateY(-2px)',
                          },
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Box sx={{ width: '100%', maxWidth: 500, mx: { xs: 'auto', md: 0 } }}>
                    <TerminalWidget />
                  </Box>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={3}
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    alignItems={{ xs: 'center', sm: 'center' }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      href="#projects"
                      sx={{
                        padding: '1.1rem 3rem',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        minWidth: 200,
                        fontFamily: 'var(--font-outfit), sans-serif',
                        color: '#fff',
                      }}
                    >
                      View Projects
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      href="#contact"
                      sx={{
                        padding: '1.1rem 3rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        minWidth: 200,
                        borderWidth: '2px !important',
                        fontFamily: 'var(--font-outfit), sans-serif',
                      }}
                    >
                      Hire Me
                    </Button>
                  </Stack>
                </motion.div>
            </Box>

            {/* Right Column (Avatar and Rings) */}
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                      <Box
                    sx={{
                      position: 'relative',
                      width: { xs: 280, sm: 340, md: 400 },
                      height: { xs: 280, sm: 340, md: 400 },
                      mt: { xs: -4, md: -28, lg: -40 },
                      '&:hover': {
                        '& .hero-tag': {
                            opacity: 1,
                            transform: 'translateX(0)',
                        }
                      }
                    }}
                  >
                    {/* Glowing Aura */}
                    {isDark && (
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: '-20%',
                          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15), transparent 70%)',
                          zIndex: -1,
                          animation: 'pulse 4s ease-in-out infinite',
                          '@keyframes pulse': { '0%, 100%': { transform: 'scale(1)', opacity: 0.8 }, '50%': { transform: 'scale(1.1)', opacity: 1 } },
                        }}
                      />
                    )}

                    {/* Rotating Rings */}
                    <Box
                      sx={{
                        position: 'absolute', inset: -30,
                        borderRadius: '50%',
                        border: `2px dashed ${isDark ? 'rgba(255, 0, 200, 0.4)' : 'rgba(192, 38, 211, 0.15)'}`,
                        animation: 'ringRotate 15s linear infinite reverse',
                        '@keyframes ringRotate': { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute', inset: -15,
                        borderRadius: '50%',
                        border: `2px dashed ${isDark ? theme.palette.primary.main : 'rgba(2, 132, 199, 0.2)'}`,
                        animation: 'ringRotate 10s linear infinite',
                        boxShadow: isDark ? 'inset 0 0 20px rgba(0, 245, 255, 0.2), 0 0 20px rgba(0, 245, 255, 0.2)' : 'none',
                      }}
                    />

                    {/* Circle Avatar Container */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'background.paper',
                        border: isDark ? 'none' : `1px solid ${theme.palette.divider}`,
                        boxShadow: isDark ? 'none' : '0 20px 50px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                          '& img': {
                            transform: 'scale(1.22)',
                          }
                        },
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 10%',
                          transform: 'scale(1.15)',
                          filter: isDark ? 'saturate(0.9) contrast(1.1)' : 'none',
                          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                        },
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: 0,
                          background: isDark
                            ? 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, transparent 50%, rgba(255, 0, 200, 0.08) 100%)'
                            : 'linear-gradient(135deg, rgba(3, 105, 161, 0.05) 0%, transparent 50%, rgba(147, 51, 234, 0.05) 100%)',
                          opacity: 0,
                          transition: 'opacity 0.4s ease',
                        },
                      }}
                    >
                      <img
                        src="/assets/shayan_portrait.jpg"
                        alt="Rao Muhammad Shayan"
                      />
                    </Box>

                    {/* Floating Tags - Now outside the clipping circle but sensitive to parent hover */}
                    <Box
                      className="hero-tag"
                      sx={{
                        position: 'absolute', top: '15%', right: -30,
                        fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.75rem',
                        color: 'primary.main', fontWeight: 800,
                        background: isDark ? 'rgba(0, 10, 15, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        border: `1px solid ${theme.palette.divider}`,
                        padding: '0.5rem 1rem', clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                        boxShadow: isDark ? '0 0 15px rgba(0, 245, 255, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                        opacity: 0,
                        transform: 'translateX(20px)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 10,
                        pointerEvents: 'none',
                      }}
                    >
                      ⚡ MERN Specialist
                    </Box>
                    <Box
                      className="hero-tag"
                      sx={{
                        position: 'absolute', bottom: '25%', left: -30,
                        fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.75rem',
                        color: 'primary.main', fontWeight: 800,
                        background: isDark ? 'rgba(0, 10, 15, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                        border: `1px solid ${theme.palette.divider}`,
                        padding: '0.5rem 1rem', clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                        boxShadow: isDark ? '0 0 15px rgba(0, 245, 255, 0.15)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
                        opacity: 0,
                        transform: 'translateX(-20px)',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 10,
                        pointerEvents: 'none',
                      }}
                    >
                      🚀 Startup Ready
                    </Box>

                    

                  </Box>
                </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>

     
      {/* Particles - Optimized for both modes */}
      <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none', opacity: isDark ? 0.3 : 0.15 }}>
        {[...Array(15)].map((_, i) => (
           <motion.div
             key={i}
             animate={{
               y: [Math.random() * 800, Math.random() * 800],
               x: [Math.random() * 1200, Math.random() * 1200],
               opacity: [0.1, 0.4, 0.1],
             }}
             transition={{
               duration: 15 + Math.random() * 10,
               repeat: Infinity,
               ease: "linear"
             }}
             style={{
               position: 'absolute',
               width: '2px',
               height: '2px',
               backgroundColor: isDark ? '#00f5ff' : '#0369a1',
               boxShadow: isDark ? '0 0 8px #00f5ff' : 'none',
             }}
           />
        ))}
      </Box>

      {/* Scroll Hint */}
      <Box
        sx={{
          position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.75rem',
          color: isDark ? 'text.secondary' : 'primary.main',
          letterSpacing: '0.15em', fontWeight: 700, animation: 'bounce2 2s ease-in-out infinite',
          '@keyframes bounce2': { '0%, 100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(10px)' } },
          '&::after': {
            content: '""', width: '2px', height: '50px',
            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
            boxShadow: isDark ? '0 0 10px #00f5ff' : 'none',
          },
        }}
      >
        DISCOVER
      </Box>
    </Box>
  );
};


export default Hero;