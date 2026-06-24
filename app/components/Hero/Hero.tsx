

'use client';

import React from 'react';
import { Box, Typography, Container, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion, Variants } from 'framer-motion';
// TerminalWidget import assumed to be correct in your project structure
import TerminalWidget from './TerminalWidget'; 
import { FiDownload } from 'react-icons/fi';
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
  
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
      setMounted(true);
  }, []);

  // Assumes Redux state setup exists
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  if (!mounted) {
      return (
          <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'background.default' }} />
      );
  }

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '6rem 0 6rem', md: '8rem 0 8rem' },
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
                gridTemplateColumns: { xs: '1fr', md: '1.1fr 1fr', lg: '1.2fr 1fr' },
                alignItems: 'center',
                gap: { xs: 6, md: 5, lg: 8 },
            }}
          >
            {/* Left Column (Content) - order 1 on both mobile and desktop */}
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.6rem', 
                textAlign: { xs: 'center', md: 'left' },
                order: 1
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
                      letterSpacing: '0.15em',
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
                        fontSize: { xs: '2.4rem', sm: '3.5rem', md: '4rem', lg: '4.8rem' },
                        color: 'text.primary',
                        display: 'block',
                        fontWeight: 900,
                        textShadow: isDark ? '0 0 40px rgba(255, 255, 255, 0.12)' : 'none',
                      },
                      '& .line2': {
                        fontSize: { xs: '2.4rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
                        color: 'primary.main',
                        display: 'block',
                        fontWeight: 900,
                        textShadow: isDark ? '0 0 60px #00f5ff, 0 0 120px rgba(0, 245, 255, 0.3)' : 'none',
                      },
                      '& .line3': {
                        fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.3rem', lg: '1.4rem' },
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
                    <span className="line1">
                      {"RAO MUHAMMAD".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 15 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.03 } }
                          }}
                          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    <span className="line2 glitch-text" data-text="SHAYAN">
                      {"SHAYAN".split("").map((char, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.4 + index * 0.05 } }
                          }}
                          style={{ display: 'inline-block' }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
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
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
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
                    {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind', 'typescript'].map((tech, i) => (
                      <Box
                        key={tech}
                        component={motion.div}
                        whileHover={{ scale: 1.05, y: -2 }}
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
                          cursor: 'default',
                          '&:hover': {
                            background: isDark ? 'rgba(0, 245, 255, 0.12)' : 'rgba(0, 184, 200, 0.08)',
                            color: 'primary.main',
                            boxShadow: isDark ? '0 0 16px rgba(0, 245, 255, 0.2)' : '0 4px 12px rgba(0, 245, 255, 0.1)',
                          },
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Stack>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    flexWrap="wrap"
                    justifyContent={{ xs: 'center', md: 'flex-start' }}
                    alignItems={{ xs: 'stretch', sm: 'center' }}
                    gap={1.5}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      href="#projects"
                      sx={{
                        padding: '1.1rem 3rem',
                        fontSize: '0.85rem',
                        fontWeight: 800,
                        flex: { xs: '1 1 auto', sm: 'none' },
                        minWidth: { xs: '100%', sm: 160, md: 180 },
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
                        flex: { xs: '1 1 auto', sm: 'none' },
                        minWidth: { xs: '100%', sm: 160, md: 180 },
                        borderWidth: '2px !important',
                        fontFamily: 'var(--font-outfit), sans-serif',
                      }}
                    >
                      Hire Me
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      href="/MERN.cv.pdf"
                      download="Rao_Muhammad_Shayan_CV.pdf"
                      startIcon={<FiDownload />}
                      sx={{
                        padding: '1.1rem 2.5rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        flex: { xs: '1 1 auto', sm: 'none' },
                        minWidth: { xs: '100%', sm: 160, md: 180 },
                        borderWidth: '2px !important',
                        fontFamily: 'var(--font-outfit), sans-serif',
                        borderColor: 'secondary.main',
                        '&:hover': {
                          borderWidth: '2px !important',
                          borderColor: 'secondary.light',
                          boxShadow: isDark ? '0 0 20px rgba(255, 0, 200, 0.3)' : '0 4px 12px rgba(255, 0, 200, 0.1)',
                        }
                      }}
                    >
                      Download CV
                    </Button>
                  </Stack>
                </motion.div>
            </Box>

            {/* Right Column (Avatar, Rings, Terminal) - order 2 on both mobile and desktop */}
            <Box sx={{ 
                width: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 5, md: 6 },
                order: 2
            }}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ position: 'relative' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      width: { xs: 260, sm: 300, md: 320, lg: 360 },
                      height: { xs: 260, sm: 300, md: 320, lg: 360 },
                      mt: { xs: 2, md: 0 },
                      mb: { xs: 2, md: 0 },
                      '&:hover': {
                        '& .hero-tag-container-right': {
                          opacity: 1,
                          transform: 'translateX(0) scale(1)',
                          pointerEvents: 'auto',
                        },
                        '& .hero-tag-container-left': {
                          opacity: 1,
                          transform: 'translateX(0) scale(1)',
                          pointerEvents: 'auto',
                        }
                      }
                    }}
                  >
                    {/* Glowing Aura (Adaptive light/dark) */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: '-15%',
                        background: isDark 
                          ? 'radial-gradient(circle, rgba(0, 245, 255, 0.15), transparent 70%)'
                          : 'radial-gradient(circle, rgba(3, 105, 161, 0.08), transparent 70%)',
                        zIndex: -1,
                        animation: 'pulse 4s ease-in-out infinite',
                        '@keyframes pulse': { '0%, 100%': { transform: 'scale(1)', opacity: 0.8 }, '50%': { transform: 'scale(1.08)', opacity: 1 } },
                      }}
                    />

                    {/* Rotating Rings */}
                    <Box
                      component={motion.div}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      sx={{
                        position: 'absolute', inset: -25,
                        borderRadius: '50%',
                        border: `2px dashed ${isDark ? 'rgba(255, 0, 200, 0.35)' : 'rgba(147, 51, 234, 0.2)'}`,
                      }}
                    />
                    <Box
                      component={motion.div}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      sx={{
                        position: 'absolute', inset: -12,
                        borderRadius: '50%',
                        border: `2px dashed ${isDark ? '#00f5ff' : '#0369a1'}`,
                        opacity: 0.6,
                      }}
                    />

                    {/* Circle Avatar Container with Premium Gradient Border */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: isDark 
                          ? 'linear-gradient(135deg, #00f5ff 0%, #ff00c8 100%)'
                          : 'linear-gradient(135deg, #0369a1 0%, #9333ea 100%)',
                        padding: '4px',
                        boxShadow: isDark 
                          ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 245, 255, 0.15)' 
                          : '0 20px 40px rgba(3, 105, 161, 0.15)',
                        transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                        '&:hover': {
                          transform: 'scale(1.03)',
                        }
                      }}
                    >
                      <Box
                        sx={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          position: 'relative',
                          background: 'background.paper',
                          '& img': {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 10%',
                            transform: 'scale(1.12)',
                            transition: 'transform 0.6s ease',
                          },
                          '&:hover img': {
                            transform: 'scale(1.2)',
                          }
                        }}
                      >
                        <img
                          src="/assets/shayan_portrait.jpg"
                          alt="Rao Muhammad Shayan"
                        />
                      </Box>
                    </Box>

                    {/* Floating Tags - Now continuously floating and responsive, shown ONLY on parent hover */}
                    <Box
                      className="hero-tag-container-right"
                      sx={{
                        position: 'absolute',
                        top: '15%',
                        right: { xs: -10, sm: -30 },
                        opacity: 0,
                        transform: 'translateX(20px) scale(0.9)',
                        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: 'none',
                        zIndex: 10,
                      }}
                    >
                      <Box
                        component={motion.div}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                        sx={{
                          fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.75rem',
                          color: isDark ? 'primary.light' : 'primary.dark', fontWeight: 800,
                          background: isDark ? 'rgba(5, 12, 18, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.25)' : 'rgba(15, 23, 42, 0.1)'}`,
                          padding: '0.5rem 1rem', clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                          boxShadow: isDark ? '0 8px 20px rgba(0, 245, 255, 0.15)' : '0 8px 20px rgba(15, 23, 42, 0.05)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        ⚡ MERN Specialist
                      </Box>
                    </Box>
                    
                    <Box
                      className="hero-tag-container-left"
                      sx={{
                        position: 'absolute',
                        bottom: '25%',
                        left: { xs: -10, sm: -30 },
                        opacity: 0,
                        transform: 'translateX(-20px) scale(0.9)',
                        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        pointerEvents: 'none',
                        zIndex: 10,
                      }}
                    >
                      <Box
                        component={motion.div}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        sx={{
                          fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.75rem',
                          color: isDark ? 'primary.light' : 'primary.dark', fontWeight: 800,
                          background: isDark ? 'rgba(5, 12, 18, 0.85)' : 'rgba(255, 255, 255, 0.85)',
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.25)' : 'rgba(15, 23, 42, 0.1)'}`,
                          padding: '0.5rem 1rem', clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                          boxShadow: isDark ? '0 8px 20px rgba(0, 245, 255, 0.15)' : '0 8px 20px rgba(15, 23, 42, 0.05)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        🚀 Startup Ready
                      </Box>
                    </Box>
                  </Box>
                </motion.div>

                {/* TerminalWidget placed in the right column, below the image */}
                <motion.div 
                  variants={itemVariants}
                  style={{ width: '100%', maxWidth: '450px' }}
                >
                  <TerminalWidget isDark={isDark} />
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
          position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          fontFamily: 'var(--font-outfit), sans-serif', fontSize: '0.65rem',
          color: isDark ? 'text.secondary' : 'primary.main',
          letterSpacing: '0.15em', fontWeight: 800, animation: 'bounce2 2s ease-in-out infinite',
          '@keyframes bounce2': { '0%, 100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(8px)' } },
          zIndex: 0,
          pointerEvents: 'none',
          '&::after': {
            content: '""', width: '1px', height: '30px',
            background: `linear-gradient(to bottom, ${theme.palette.primary.main}, transparent)`,
            boxShadow: isDark ? '0 0 10px #00f5ff' : 'none',
            opacity: 0.6,
          },
        }}
      >
        DISCOVER
      </Box>
    </Box>
  );
};


export default Hero;