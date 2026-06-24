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
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
  color: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'MERN Stack Development',
    issuer: 'SMIT — Saylani Mass IT Training',
    date: '2024',
    credentialType: 'pdf',
    file: '/assets/324139.pdf',
    preview: '/assets/324139.pdf',
    badge: '🎓',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    description:
      'Verified MERN Stack Development Certification issued upon successful completion of intensive full-stack training with grade sheet.',
    color: '#00f5ff',
  },
  {
    id: 2,
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: 'June 15, 2026',
    credentialType: 'image',
    file: '/assets/Gemini_Generated_Image_nngxw2nngxw2nngx.png',
    preview: '/assets/Gemini_Generated_Image_nngxw2nngxw2nngx.png',
    badge: '🔥',
    skills: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6'],
    description:
      'Developer Certification representing ~300 hours of coursework covering fundamental programming concepts and data structure paradigms.',
    color: '#ff00c8',
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
      'Developer Certification representing ~300 hours of work covering responsive design, flexbox, CSS grid, and modern layouts.',
    color: '#a855f7',
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
        py: { xs: '5rem', md: '8rem', lg: '10rem' },
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
          opacity: isDark ? 0.025 : 0.04,
          pointerEvents: 'none',
          backgroundImage: `radial-gradient(${isDark ? 'rgba(0,245,255,0.8)' : 'rgba(3,105,161,0.5)'} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Ambient glow blobs */}
      <Box
        component={motion.div}
        animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(0,245,255,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(3,105,161,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        component={motion.div}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: '5%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(255,0,200,0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <SectionHeader num="05" title="Credentials & Certs" />

        {/* Subtitle badge */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: -3, mb: 8 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              background: isDark ? 'rgba(0, 245, 255, 0.06)' : 'rgba(3, 105, 161, 0.04)',
              border: `1px solid ${isDark ? 'rgba(0, 245, 255, 0.2)' : 'rgba(3, 105, 161, 0.15)'}`,
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
            }}
          >
            <EmojiEventsIcon sx={{ fontSize: '0.9rem', color: isDark ? '#00f5ff' : 'primary.main' }} />
            <Typography
              sx={{
                fontFamily: 'var(--font-outfit), sans-serif',
                color: isDark ? 'primary.light' : 'primary.main',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Verified Achievements
            </Typography>
          </Box>
        </Box>

        {/* Certification Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              style={{ height: '100%', cursor: 'pointer' }}
              onClick={() => setSelected(cert)}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : theme.palette.divider}`,
                  background: isDark
                    ? 'linear-gradient(145deg, rgba(13, 25, 38, 0.7) 0%, rgba(6, 14, 23, 0.9) 100%)'
                    : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isDark
                    ? '0 10px 30px rgba(0, 0, 0, 0.25)'
                    : '0 10px 30px rgba(15, 23, 42, 0.04)',
                  clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '140px',
                    height: '140px',
                    background: `radial-gradient(circle at top right, ${cert.color}22, transparent 70%)`,
                    opacity: 0.5,
                    transition: 'opacity 0.4s',
                    pointerEvents: 'none',
                    zIndex: 0,
                  },
                  '&:hover': {
                    borderColor: `${cert.color}55`,
                    boxShadow: isDark
                      ? `0 25px 50px rgba(0, 0, 0, 0.45), 0 0 30px ${cert.color}22, inset 0 0 20px ${cert.color}06`
                      : `0 25px 50px rgba(15, 23, 42, 0.1), 0 5px 20px ${cert.color}22`,
                    '&::before': { opacity: 1 },
                    '& .cert-bar': { width: '100%', left: 0 },
                    '& .cert-preview-img': { transform: 'scale(1.08)' },
                    '& .cert-badge': { transform: 'scale(1.15) rotate(5deg)' },
                    '& .cert-shimmer': { left: '125%' },
                  },
                  '& .cert-bar': {
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: 0,
                    height: '3px',
                    background: `linear-gradient(to right, ${cert.color}, ${isDark ? '#ff00c8' : '#a855f7'})`,
                    transition: 'all 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 3,
                  },
                }}
              >
                {/* Shimmer sweep effect */}
                <Box
                  className="cert-shimmer"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: '-75%',
                    width: '50%',
                    height: '100%',
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.08), transparent)',
                    transform: 'skewX(-20deg)',
                    transition: 'left 0.8s ease-in-out',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                />

                {/* Bottom glow bar */}
                <Box className="cert-bar" />

                {/* Preview image area */}
                {cert.preview && (
                  <Box
                    sx={{
                      position: 'relative',
                      height: '200px',
                      overflow: 'hidden',
                      background: isDark ? '#020508' : '#f1f5f9',
                      borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.04)' : 'rgba(15,23,42,0.05)'}`,
                      flexShrink: 0,
                    }}
                  >
                    {cert.preview.toLowerCase().endsWith('.pdf') ? (
                      <Box
                        component="iframe"
                        src={cert.preview}
                        title={`${cert.title} preview`}
                        sx={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          display: 'block',
                        }}
                      />
                    ) : (
                      <Box
                        component="img"
                        src={cert.preview}
                        alt={cert.title}
                        className="cert-preview-img"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          filter: isDark ? 'saturate(0.7) contrast(1.1) brightness(0.9)' : 'none',
                        }}
                      />
                    )}

                    {/* Gradient overlay */}
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: isDark
                          ? `linear-gradient(to bottom, ${cert.color}11 0%, transparent 30%, rgba(6,14,23,0.85) 100%)`
                          : 'linear-gradient(to bottom, transparent 30%, rgba(255,255,255,0.98) 100%)',
                      }}
                    />

                    {/* Verified badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: isDark ? 'rgba(5, 12, 18, 0.85)' : 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(8px)',
                        border: `1px solid ${cert.color}55`,
                        borderRadius: '6px',
                        padding: '4px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        boxShadow: `0 4px 12px ${cert.color}22`,
                        zIndex: 1,
                      }}
                    >
                      <VerifiedIcon sx={{ fontSize: '0.8rem', color: cert.color }} />
                      <Typography
                        sx={{
                          fontSize: '0.6rem',
                          fontWeight: 800,
                          letterSpacing: '0.1em',
                          color: cert.color,
                          fontFamily: 'var(--font-outfit), sans-serif',
                          textTransform: 'uppercase',
                        }}
                      >
                        Verified
                      </Typography>
                    </Box>

                    {/* Emoji badge */}
                    <Box
                      className="cert-badge"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 14,
                        fontSize: '1.5rem',
                        lineHeight: 1,
                        filter: `drop-shadow(0 4px 12px ${cert.color}55)`,
                        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 1,
                      }}
                    >
                      {cert.badge}
                    </Box>
                  </Box>
                )}

                {/* Card content */}
                <Box
                  sx={{
                    p: '1.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Issuer & date */}
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-share-tech-mono), monospace',
                      fontSize: '0.68rem',
                      color: cert.color,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                      mb: 1,
                      textShadow: isDark ? `0 0 12px ${cert.color}44` : 'none',
                    }}
                  >
                    {cert.issuer} · {cert.date}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit), sans-serif',
                      fontSize: '1.2rem',
                      fontWeight: 850,
                      color: 'text.primary',
                      lineHeight: 1.25,
                      mb: 1.5,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {cert.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      mb: 2.5,
                      fontFamily: 'var(--font-inter), sans-serif',
                    }}
                  >
                    {cert.description}
                  </Typography>

                  {/* Skill tags */}
                  <Stack direction="row" flexWrap="wrap" gap={0.8} sx={{ mb: 'auto', pb: 2.5 }}>
                    {cert.skills.map((skill) => (
                      <Box
                        key={skill}
                        sx={{
                          padding: '0.3rem 0.75rem',
                          border: `1px solid ${isDark ? `${cert.color}22` : theme.palette.divider}`,
                          background: isDark ? `${cert.color}08` : 'rgba(15, 23, 42, 0.02)',
                          color: isDark ? cert.color : 'text.secondary',
                          fontSize: '0.62rem',
                          fontFamily: 'var(--font-inter), sans-serif',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          borderRadius: '4px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: `${cert.color}14`,
                            borderColor: cert.color,
                            color: cert.color,
                          }
                        }}
                      >
                        {skill}
                      </Box>
                    ))}
                  </Stack>

                  {/* CTA buttons */}
                  <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={cert.credentialType === 'pdf' ? <PictureAsPdfIcon /> : <ImageIcon />}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelected(cert);
                      }}
                      sx={{
                        flex: 1,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        borderRadius: '6px',
                        borderColor: isDark ? `${cert.color}33` : 'rgba(15,23,42,0.15)',
                        color: 'text.secondary',
                        transition: 'all 0.3s ease',
                        fontFamily: 'var(--font-outfit), sans-serif',
                        '&:hover': {
                          borderColor: cert.color,
                          color: cert.color,
                          background: `${cert.color}08`,
                          boxShadow: `0 0 12px ${cert.color}22`,
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
                        fontWeight: 800,
                        borderRadius: '6px',
                        fontFamily: 'var(--font-outfit), sans-serif',
                        background: `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}bb 100%)`,
                        color: isDark ? '#000' : '#fff',
                        boxShadow: `0 4px 14px ${cert.color}33`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 6px 20px ${cert.color}55`,
                          transform: 'translateY(-1px)',
                        }
                      }}
                    >
                      Open
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>

      {/* Lightbox Dialog */}
      <AnimatePresence>
        {selected && (
          <Dialog
            open={!!selected}
            onClose={() => setSelected(null)}
            maxWidth="lg"
            fullWidth
            PaperProps={{
              component: motion.div,
              initial: { opacity: 0, scale: 0.9, y: 40 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.9, y: 40 },
              transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
              sx: {
                background: isDark ? 'rgba(5, 12, 18, 0.97)' : '#fff',
                border: `1px solid ${selected ? `${selected.color}33` : isDark ? 'rgba(0,245,255,0.15)' : 'rgba(15,23,42,0.1)'}`,
                borderRadius: '16px',
                backdropFilter: 'blur(20px)',
                maxHeight: '90vh',
                overflow: 'hidden',
                boxShadow: selected && isDark ? `0 0 60px ${selected.color}22` : 'none',
              },
            }}
            BackdropProps={{
              sx: { background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' },
            }}
          >
            <DialogContent sx={{ p: 0, overflow: 'hidden', position: 'relative' }}>
              {/* Accent top bar */}
              <Box
                sx={{
                  height: '3px',
                  background: selected
                    ? `linear-gradient(to right, ${selected.color}, ${isDark ? '#ff00c8' : '#a855f7'})`
                    : 'primary.main',
                }}
              />

              {/* Dialog header */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  p: '1rem 1.4rem',
                  borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(15,23,42,0.08)'}`,
                }}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <VerifiedIcon sx={{ color: selected?.color ?? 'primary.main', fontSize: '1.1rem' }} />
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-outfit), sans-serif',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: 'text.primary',
                    }}
                  >
                    {selected?.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.75rem',
                      color: selected?.color ?? 'primary.main',
                      fontFamily: 'var(--font-inter), sans-serif',
                    }}
                  >
                    — {selected?.issuer}
                  </Typography>
                </Stack>
                <IconButton
                  onClick={() => setSelected(null)}
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.1)'}`,
                    borderRadius: '8px',
                    '&:hover': {
                      color: selected?.color ?? 'primary.main',
                      borderColor: selected?.color ?? 'primary.main',
                      background: `${selected?.color ?? '#00f5ff'}0a`,
                    },
                  }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Stack>

              {/* Credential preview */}
              <Box sx={{ maxHeight: 'calc(90vh - 80px)', overflow: 'auto' }}>
                {selected?.credentialType === 'pdf' ? (
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
                    src={selected?.file}
                    alt={selected?.title}
                    sx={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                )}
              </Box>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Certifications;
