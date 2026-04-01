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
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
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
            spacing={4}
            alignItems="center"
            sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}
          >
            {navLinks.map((link) => (
              <Box
                key={link.name}
                component="a"
                href={link.href}
                sx={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'text.secondary',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  textTransform: 'capitalize',
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    width: 0,
                    height: '2px',
                    background: theme.palette.primary.main,
                    transition: 'all 0.3s',
                    transform: 'translateX(-50%)',
                  },
                  '&:hover': {
                    color: 'primary.main',
                    textShadow: isDark ? '0 0 12px rgba(0, 245, 255, 0.3)' : 'none',
                    '&::after': { width: '100%' },
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
                  '&:hover': {
                    background: isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(0, 184, 200, 0.1)',
                  }
                }}
              >
                {isDark ? <LightModeIcon sx={{ fontSize: '1.2rem' }} /> : <DarkModeIcon sx={{ fontSize: '1.2rem' }} />}
              </IconButton>
            </Tooltip>

            {/* Hire Me Button */}
            <Box
              component="a"
              href="#contact"
              sx={{
                fontFamily: 'var(--font-outfit), sans-serif',
                fontSize: '0.8rem',
                color: isDark ? 'primary.main' : 'text.primary',
                background: isDark ? 'transparent' : 'rgba(15, 23, 42, 0.04)',
                border: `1px solid ${theme.palette.primary.main}`,
                padding: '0.7rem 1.8rem',
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
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
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
            background: isDark ? 'rgba(2, 5, 8, 0.98)' : '#fff',
            backdropFilter: 'blur(10px)',
            borderLeft: `1px solid ${theme.palette.divider}`,
            padding: '2rem 1rem',
          }
        }}
      >
        <Stack direction="row" justifyContent="flex-end" sx={{ mb: 4 }}>
          <IconButton onClick={() => setIsOpen(false)} sx={{ color: 'primary.main' }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.name}
              component="a"
              href={link.href}
              onClick={() => setIsOpen(false)}
              sx={{
                padding: '1rem',
                borderBottom: `1px solid ${theme.palette.divider}`,
                '&:hover': { background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(0, 184, 200, 0.05)' }
              }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontFamily: 'var(--font-outfit), sans-serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'text.primary',
                  textTransform: 'capitalize',
                }}
              />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 'auto', p: 2 }}>
          <Button
            fullWidth
            href="#contact"
            onClick={() => setIsOpen(false)}
            variant="contained"
            color="primary"
            sx={{ py: 1.5, fontWeight: 700 }}
          >
            Hire Me
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
