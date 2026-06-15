'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Stack,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../lib/store';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import VerifiedIcon from '@mui/icons-material/Verified';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ImageIcon from '@mui/icons-material/Image';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialType: 'image' | 'pdf';
  file: string;
  preview?: string;
  badge: string;
  skills: string[];
  description: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'MERN Stack Development (PDF Verification)',
    issuer: 'SMIT — Saylani Mass IT Training',
    date: '2024',
    credentialType: 'pdf',
    file: '/assets/324139.pdf',
    preview: '/assets/Screenshot 2026-06-15 103416.jpeg',
    badge: '🎓',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    description:
      'Verified MERN Stack Development Certification Syllabus and Grade Sheet issued upon successful completion of intensive full-stack training.',
  },
  {
    id: 2,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'June 15, 2026',
    credentialType: 'image',
    file: '/assets/Gemini_Generated_Image_nngxw2nngxw2nngx.png',
    preview: '/assets/Gemini_Generated_Image_nngxw2nngxw2nngx.png',
    badge: '🔥',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6'],
    description:
      'Developer Certification representing approximately 300 hours of coursework covering fundamental programming concepts and data structure paradigms.',
  },
  {
    id: 3,
    title: 'Legacy Responsive Web Design V8',
    issuer: 'freeCodeCamp',
    date: 'February 16, 2026',
    credentialType: 'image',
    file: '/assets/Screenshot 2026-06-15 103416.jpeg',
    preview: '/assets/Screenshot 2026-06-15 103416.jpeg',
    badge: '💻',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'Accessibility'],
    description:
      'Developer Certification representing approximately 300 hours of work covering responsive design, flexbox, CSS grid, and modern layouts.',
  },
];

const Certifications = () => {
  const theme = useTheme();
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === 'dark';
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <Box
      id="certifications"
      sx={{
        py: '10rem',
        position: 'relative',
        overflow: 'hidden',
        background: 'background.default',
      }}
    >
      {/* Dot-grid decoration */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: isDark ? 0.03 : 0.05,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Glow blobs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(3,105,161,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <SectionHeader num="05" title="Credentials &amp; Certs" />

        <Typography
          sx={{
            fontFamily: 'var(--font-outfit), sans-serif',
            color: 'primary.main',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            mt: -3,
            mb: 8,
            textTransform: 'uppercase',
          }}
        >
          VERIFIED ACHIEVEMENTS
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <AnimatePresence>
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                style={{ height: '100%' }}
              >
                <Box
                  onClick={() => setSelected(cert)}
                  sx={{
                    position: 'relative',
                    cursor: 'pointer',
                    border: `1px solid ${
                      isDark ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.08)'
                    }`,
                    background: isDark
                      ? 'linear-gradient(135deg, var(--bg1) 0%, var(--bg2) 100%)'
                      : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(241, 245, 249, 0.9) 100%)',
                    backdropFilter: 'blur(16px)',
                    clipPath:
                      'polygon(0 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    '&:hover': {
                      borderColor: 'primary.main',
                      boxShadow: isDark
                        ? '0 0 25px rgba(0, 245, 255, 0.2), inset 0 0 15px rgba(0, 245, 255, 0.1)'
                        : '0 12px 24px -10px rgba(15, 23, 42, 0.1), 0 0 15px rgba(3, 105, 161, 0.05)',
                      '& .cert-preview': { transform: 'scale(1.08)', filter: 'none' },
                      '& .cert-glow-bar': { width: '100%', left: 0 },
                      '& .cert-icon-container': { transform: 'scale(1.1) rotate(5deg)', color: 'primary.main' },
                      '& .shimmer-swipe': { left: '125%' }
                    },
                    '& .cert-glow-bar': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '3px',
                      background: isDark
                        ? 'linear-gradient(to right, #00f5ff, #ff00c8)'
                        : 'linear-gradient(to right, #0369a1, #7c3aed)',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 3
                    },
                  }}
                >
                  {/* Shimmer gloss sweep */}
                  <Box
                    className="shimmer-swipe"
                    sx={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-75%',
                      width: '50%',
                      height: '100%',
                      background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15), transparent)',
                      transform: 'skewX(-25deg)',
                      transition: 'left 0.75s ease-in-out',
                      zIndex: 2,
                      pointerEvents: 'none'
                    }}
                  />
                  
                  {/* Glow bar (bottom border on hover) */}
                  <Box className="cert-glow-bar" />

                  {/* Preview Image */}
                  {cert.preview && (
                    <Box
                      sx={{
                        position: 'relative',
                        height: '220px',
                        overflow: 'hidden',
                        background: isDark ? '#020508' : '#f1f5f9',
                        borderBottom: `1px solid ${isDark ? 'rgba(0,245,255,0.1)' : 'rgba(15,23,42,0.05)'}`
                      }}
                    >
                      <Box
                        component="img"
                        src={cert.preview}
                        alt={cert.title}
                        className="cert-preview"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          filter: isDark ? 'saturate(0.8) contrast(1.05)' : 'none',
                        }}
                      />
                      {/* Overlay gradient */}
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          background: isDark
                            ? 'linear-gradient(to bottom, transparent 30%, var(--bg1) 100%)'
                            : 'linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.95) 100%)',
                        }}
                      />
                      {/* Badge chip */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 14,
                          right: 14,
                          background: isDark ? 'var(--bg0)' : 'rgba(255, 255, 255, 0.9)',
                          backdropFilter: 'blur(8px)',
                          border: `1px solid ${isDark ? 'rgba(0,245,255,0.35)' : 'rgba(3,105,161,0.25)'}`,
                          borderRadius: '4px',
                          padding: '5px 12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                      >
                        <VerifiedIcon
                          sx={{
                            fontSize: '0.85rem',
                            color: isDark ? '#00f5ff' : '#0369a1',
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: '0.65rem',
                            fontWeight: 850,
                            letterSpacing: '0.12em',
                            color: isDark ? '#00f5ff' : '#0369a1',
                            fontFamily: 'var(--font-outfit), sans-serif',
                            textTransform: 'uppercase',
                          }}
                        >
                          Verified
                        </Typography>
                      </Box>
                      {/* File type icon container */}
                      <Box
                        className="cert-icon-container"
                        sx={{
                          position: 'absolute',
                          top: 14,
                          left: 14,
                          fontSize: '1.6rem',
                          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        {cert.badge}
                      </Box>
                    </Box>
                  )}

                  {/* Content */}
                  <Box sx={{ p: 3.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        fontSize: '0.7rem',
                        color: 'primary.main',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 800,
                        mb: 1,
                      }}
                    >
                      {cert.issuer} · {cert.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-outfit), sans-serif',
                        fontSize: '1.3rem',
                        fontWeight: 850,
                        color: 'text.primary',
                        lineHeight: 1.25,
                        mb: 1.5,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {cert.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 3,
                        fontFamily: 'var(--font-inter), sans-serif',
                      }}
                    >
                      {cert.description}
                    </Typography>

                    {/* Skill tags */}
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 'auto', pb: 3 }}>
                      {cert.skills.map((skill) => (
                        <Box
                          key={skill}
                          sx={{
                            padding: '0.35rem 0.85rem',
                            border: `1px solid ${
                              isDark ? 'rgba(0, 245, 255, 0.18)' : theme.palette.divider
                            }`,
                            background: isDark
                              ? 'rgba(0, 245, 255, 0.03)'
                              : 'rgba(15, 23, 42, 0.02)',
                            color: isDark ? 'primary.light' : 'primary.main',
                            fontSize: '0.65rem',
                            fontFamily: 'var(--font-inter), sans-serif',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            borderRadius: '4px',
                            transition: 'all 0.3s',
                            '&:hover': {
                              background: isDark ? 'rgba(0, 245, 255, 0.08)' : 'rgba(3, 105, 161, 0.05)',
                              borderColor: 'primary.main'
                            }
                          }}
                        >
                          {skill}
                        </Box>
                      ))}
                    </Stack>

                    {/* Actions */}
                    <Stack direction="row" spacing={2} sx={{ mt: 'auto' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={
                          cert.credentialType === 'pdf' ? (
                            <PictureAsPdfIcon />
                          ) : (
                            <ImageIcon />
                          )
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelected(cert);
                        }}
                        sx={{
                          flex: 1,
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          borderRadius: 0,
                          borderColor: isDark
                            ? 'rgba(0,245,255,0.25)'
                            : 'rgba(3,105,161,0.25)',
                          color: 'text.primary',
                          clipPath:
                            'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                          '&:hover': {
                            borderColor: 'primary.main',
                            background: isDark ? 'rgba(0, 245, 255, 0.05)' : 'rgba(3, 105, 161, 0.03)'
                          }
                        }}
                      >
                        Preview
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<OpenInNewIcon />}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          flex: 1,
                          fontSize: '0.7rem',
                          fontWeight: 900,
                          borderRadius: 0,
                          clipPath:
                            'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                        }}
                      >
                        Open
                      </Button>
                    </Stack>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Container>

      {/* ─── Lightbox Dialog ─── */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            background: isDark ? 'rgba(5, 12, 18, 0.97)' : '#fff',
            border: `1px solid ${
              isDark ? 'rgba(0,245,255,0.15)' : 'rgba(15,23,42,0.1)'
            }`,
            borderRadius: 0,
            clipPath:
              'polygon(0 0, 100% 0, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0 100%)',
            backdropFilter: 'blur(20px)',
            maxHeight: '90vh',
            overflow: 'hidden',
          },
        }}
        BackdropProps={{
          sx: { background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(6px)' },
        }}
      >
        {selected && (
          <DialogContent sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
            {/* Header bar */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                p: 2,
                borderBottom: `1px solid ${
                  isDark ? 'rgba(0,245,255,0.1)' : 'rgba(15,23,42,0.08)'
                }`,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={1.5}>
                <VerifiedIcon sx={{ color: 'primary.main', fontSize: '1.1rem' }} />
                <Typography
                  sx={{
                    fontFamily: 'var(--font-outfit), sans-serif',
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: 'text.primary',
                  }}
                >
                  {selected.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: 'primary.main',
                    fontFamily: 'var(--font-inter), sans-serif',
                  }}
                >
                  — {selected.issuer}
                </Typography>
              </Stack>
              <IconButton
                onClick={() => setSelected(null)}
                size="small"
                sx={{
                  color: 'text.secondary',
                  border: `1px solid ${isDark ? 'rgba(0,245,255,0.15)' : 'rgba(15,23,42,0.1)'}`,
                  borderRadius: 0,
                  '&:hover': { color: 'primary.main', borderColor: 'primary.main' },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>

            {/* Preview area */}
            <Box sx={{ maxHeight: 'calc(90vh - 80px)', overflow: 'auto' }}>
              {selected.credentialType === 'pdf' ? (
                <Box
                  component="iframe"
                  src={selected.file}
                  title={selected.title}
                  sx={{
                    width: '100%',
                    height: '75vh',
                    border: 'none',
                    display: 'block',
                  }}
                />
              ) : (
                <Box
                  component="img"
                  src={selected.file}
                  alt={selected.title}
                  sx={{ width: '100%', height: 'auto', display: 'block' }}
                />
              )}
            </Box>
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default Certifications;
