'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Container, Stack } from '@mui/material';

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [loadingText, setLoadingText] = useState('Initializing Systems...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 600); // Small delay before transition
          return 100;
        }
        const diff = Math.random() * 8;
        const nextProgress = Math.min(prevProgress + diff, 100);

        // Update technical text based on progress
        if (nextProgress > 20 && nextProgress < 45) setLoadingText('Loading Neural Matrix...');
        else if (nextProgress > 45 && nextProgress < 75) setLoadingText('Syncing Cyberspace Protocols...');
        else if (nextProgress > 75 && nextProgress < 95) setLoadingText('Establishing Security Connection...');
        else if (nextProgress > 95) setLoadingText('Access Granted.');

        return nextProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        backgroundColor: '#020508',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00f5ff',
        fontFamily: 'var(--font-outfit), sans-serif',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Icon */}
          <Box sx={{ position: 'relative', width: 120, height: 120, margin: '0 auto 3rem' }}>
            {/* Outer Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                border: '2px dashed #00f5ff',
                borderRadius: '50%',
                opacity: 0.5,
              }}
            />
            {/* Logo Text */}
            <Box
              sx={{
                position: 'absolute',
                inset: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-orbitron)',
                fontSize: '1.8rem',
                fontWeight: 900,
                textShadow: '0 0 20px rgba(0, 245, 255, 0.4)',
              }}
            >
              RMS
            </Box>
          </Box>

          {/* Loading Information */}
          <Stack spacing={2} alignItems="center">
            <Typography
              sx={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 600,
                opacity: 0.9,
              }}
            >
              {loadingText}
            </Typography>

            {/* Futuristic Progress Bar */}
            <Box
              sx={{
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(0, 245, 255, 0.08)',
                position: 'relative',
                borderRadius: '2px',
                overflow: 'hidden',
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #00f5ff, #ff00c8)',
                  boxShadow: '0 0 15px rgba(0, 245, 255, 0.8)',
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.85rem',
                color: 'text.secondary',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              {progress.toFixed(0)}% LOADED
            </Typography>
          </Stack>
        </motion.div>
      </Container>

      {/* Decorative Corners */}
      {[
        { top: 20, left: 20, borderTop: '2px solid #00f5ff', borderLeft: '2px solid #00f5ff' },
        { top: 20, right: 20, borderTop: '2px solid #00f5ff', borderRight: '2px solid #00f5ff' },
        { bottom: 20, left: 20, borderBottom: '2px solid #00f5ff', borderLeft: '2px solid #00f5ff' },
        { bottom: 20, right: 20, borderBottom: '2px solid #00f5ff', borderRight: '2px solid #00f5ff' },
      ].map((style, i) => (
        <Box key={i} sx={{ position: 'fixed', width: 40, height: 40, opacity: 0.3, ...style }} />
      ))}
    </Box>
  );
};

export default SplashScreen;
