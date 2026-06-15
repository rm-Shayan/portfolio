'use client';

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Container, IconButton, Stack, useTheme, Tooltip, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import { toggleTheme } from '../../../lib/features/uiSlice';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';

  return (
    <AppBar
      position="fixed"
      sx={{
        background: isDark ? 'rgba(2, 5, 8, 0.85)' : 'rgba(248, 250, 252, 0.85)',
        backdropFilter: 'blur(24px) saturate(1.8)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        boxShadow: isDark ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.03)',
        height: '68px',
        justifyContent: 'center',
        zIndex: 1100,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            sx={{
              fontFamily: 'var(--font-orbitron)',
              fontSize: '1.2rem',
              fontWeight: 900,
              color: 'primary.main',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              textShadow: isDark ? '0 0 18px #00f5ff' : 'none',
              '& span': { color: 'secondary.main' },
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              transition: 'all 0.3s',
              '&:hover': {
                 transform: 'scale(1.05)',
                 textShadow: isDark ? '0 0 25px rgba(0, 245, 255, 0.5)' : 'none',
              }
            }}
          >
            RMS<span>.</span>DEV
          </Typography>

          {/* Desktop Links */}
          <Stack
            direction="row"
            spacing={{ lg: 3, xl: 4 }}
            alignItems="center"
            sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto' }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.name}
                component={motion.a}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '0.4rem 0.8rem',
                  transition: 'color 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main || theme.palette.primary.main})`,
                    transform: 'scaleX(0)',
                    transformOrigin: 'right',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    textShadow: isDark ? '0 0 12px rgba(0, 245, 255, 0.6)' : 'none',
                    '&::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'left',
                    },
                  },
                }}
              >
                {link.name}
              </Box>
            ))}

            {/* Theme Toggle */}
            <Tooltip title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}>
              <IconButton
                onClick={() => dispatch(toggleTheme())}
                sx={{
                  color: 'primary.main',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: '0',
                  clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                  background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(0, 184, 200, 0.05)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  '&:hover': {
                    background: isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(0, 184, 200, 0.1)',
                    borderColor: 'primary.main',
                    boxShadow: isDark ? '0 0 15px rgba(0, 245, 255, 0.3)' : 'none',
                    transform: 'translateY(-1px)',
                  }
                }}
              >
                {isDark ? <LightModeIcon sx={{ fontSize: '1.1rem' }} /> : <DarkModeIcon sx={{ fontSize: '1.1rem' }} />}
              </IconButton>
            </Tooltip>

            {/* Hire Me Button */}
            <Box
              component="a"
              href="#contact"
              sx={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.75rem',
                color: isDark ? 'primary.main' : 'text.primary',
                background: isDark ? 'transparent' : 'rgba(15, 23, 42, 0.04)',
                border: `1px solid ${theme.palette.primary.main}`,
                padding: '0.6rem 1.4rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontWeight: 800,
                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isDark ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                '&:hover': {
                  background: isDark ? 'primary.main' : 'rgba(3, 105, 161, 0.06)',
                  color: isDark ? '#000' : 'primary.main',
                  boxShadow: isDark 
                    ? '0 0 24px rgba(0, 245, 255, 0.5)' 
                    : '0 8px 30px -10px rgba(3, 105, 161, 0.15)',
                  transform: 'translateY(-2px) scale(1.02)',
                  letterSpacing: '0.04em',
                },
              }}
            >
              Hire Me
            </Box>
          </Stack>

          {/* Mobile Actions */}
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton onClick={() => dispatch(toggleTheme())} sx={{ color: 'primary.main' }}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
            <IconButton onClick={() => setIsOpen(true)} sx={{ color: 'primary.main' }}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: {
            width: '280px',
            background: isDark ? 'rgba(5, 12, 18, 0.98)' : '#fff',
            backdropFilter: 'blur(16px)',
            borderLeft: `1px solid ${theme.palette.divider}`,
            padding: '2rem 1.5rem',
          }
        }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 4 }}>
          <IconButton
            onClick={() => setIsOpen(false)}
            sx={{
              color: 'primary.main',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 0,
              '&:hover': {
                borderColor: 'primary.main',
                background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(0, 184, 200, 0.05)',
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Stack>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {navLinks.map((link, index) => (
            <ListItem
              key={link.name}
              component={motion.a}
              href={link.href}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              sx={{
                padding: '0.8rem 1.2rem',
                borderRadius: 0,
                borderLeft: `3px solid transparent`,
                background: isDark ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                '&:hover': {
                  background: isDark ? 'rgba(0, 245, 255, 0.06)' : 'rgba(3, 105, 161, 0.04)',
                  borderLeftColor: 'primary.main',
                  '& .MuiTypography-root': {
                    color: 'primary.main',
                    textShadow: isDark ? '0 0 10px rgba(0, 245, 255, 0.3)' : 'none'
                  }
                }
              }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'text.secondary',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  sx: {
                    transition: 'color 0.3s ease',
                  }
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', pt: 4 }}>
          <Button
            fullWidth
            href="#contact"
            onClick={() => setIsOpen(false)}
            variant="contained"
            color="primary"
            sx={{
              py: 1.5,
              fontWeight: 800,
              borderRadius: 0,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
            }}
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
