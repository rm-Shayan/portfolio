'use client';

import React, { useEffect } from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MdCheckCircle, MdError, MdClose } from 'react-icons/md';

interface CustomAlertProps {
    open: boolean;
    type: 'success' | 'error';
    message: string;
    onClose: () => void;
}

const CustomAlert = ({ open, type, message, onClose }: CustomAlertProps) => {
    
    // Auto close after 5 seconds
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    const isSuccess = type === 'success';
    
    // Brand Colors from RMS.DEV
    const themeColor = isSuccess ? '#00f5ff' : '#ff00c8'; // Neon Cyan vs Neon Magenta
    const secondaryColor = '#ff00c8'; // Magenta accent

    // Framer Motion Variants
    const containerVariants: Variants = {
        hidden: { 
            opacity: 0, 
            scale: 0.85, 
            y: 50,
            rotateX: 10,
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            rotateX: 0,
            transition: { 
                type: 'spring',
                stiffness: 280,
                damping: 22,
                mass: 0.9,
                staggerChildren: 0.08,
                delayChildren: 0.05
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.9, 
            y: 30,
            transition: { 
                duration: 0.25, 
                ease: 'easeInOut' 
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { type: 'spring', stiffness: 300, damping: 25 } 
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: { xs: '1.5rem', sm: '2.5rem' },
                        left: { xs: '1rem', sm: 'auto' },
                        right: { xs: '1rem', sm: '2.5rem' },
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        alignItems: 'center',
                        zIndex: 9999,
                        pointerEvents: 'none',
                        perspective: 1000, // For 3D rotation effect
                    }}
                >
                    <Box
                        component={motion.div}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        sx={{
                            width: { xs: '100%', sm: '420px' },
                            maxWidth: '100%',
                            boxSizing: 'border-box',
                            background: 'rgba(2, 5, 8, 0.85)',
                            backdropFilter: 'blur(12px) saturate(160%)',
                            border: `1.5px solid ${themeColor}`,
                            padding: { xs: '1.2rem 1.2rem 1.4rem 1.2rem', sm: '1.4rem' },
                            boxShadow: `0 0 25px rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.25), inset 0 0 10px rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.1)`,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1.5,
                            borderRadius: '0px',
                            pointerEvents: 'auto',
                            position: 'relative',
                            maxHeight: { xs: '70vh', sm: 'auto' },
                            overflowY: 'auto',
                        }}
                    >
                        {/* Cyberpunk corner bracket styling */}
                        <Box sx={{
                            position: 'absolute',
                            top: -1.5,
                            left: -1.5,
                            width: '14px',
                            height: '14px',
                            borderTop: `3px solid ${themeColor}`,
                            borderLeft: `3px solid ${themeColor}`,
                            pointerEvents: 'none',
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: -1.5,
                            right: -1.5,
                            width: '14px',
                            height: '14px',
                            borderBottom: `3px solid ${themeColor}`,
                            borderRight: `3px solid ${themeColor}`,
                            pointerEvents: 'none',
                        }} />

                        {/* Top Technical Header Row */}
                        <Box 
                            component={motion.div}
                            variants={itemVariants}
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                                pb: 1,
                                mb: 0.5
                            }}
                        >
                            <Typography sx={{
                                fontFamily: 'var(--font-share-tech-mono), monospace',
                                fontSize: '0.65rem',
                                fontWeight: 600,
                                letterSpacing: '0.15em',
                                color: themeColor,
                                textTransform: 'uppercase',
                            }}>
                                {isSuccess ? 'SYSTEM // SECURE_INQUIRY' : 'SYSTEM // ERROR_EXCEPTION'}
                            </Typography>

                            {/* Pulsing Magenta Dot matching RMS.DEV logo */}
                            <Box 
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: secondaryColor,
                                    animation: 'pulse 1.8s infinite ease-in-out',
                                    boxShadow: `0 0 8px ${secondaryColor}`,
                                    '@keyframes pulse': {
                                        '0%, 100%': { 
                                            transform: 'scale(0.85)', 
                                            opacity: 0.6, 
                                            boxShadow: `0 0 0 0 rgba(255, 0, 200, 0.7)` 
                                        },
                                        '50%': { 
                                            transform: 'scale(1.25)', 
                                            opacity: 1, 
                                            boxShadow: `0 0 10px 4px rgba(255, 0, 200, 0.5)` 
                                        },
                                    }
                                }}
                            />
                        </Box>

                        {/* Body content with Icon, Titles, and Close Button */}
                        <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ flexGrow: 1, minWidth: 0 }}>
                            {/* Icon Container with glowing ring */}
                            <Box 
                                component={motion.div}
                                variants={itemVariants}
                                sx={{ 
                                    display: 'flex', 
                                    p: 0.75,
                                    borderRadius: '50%',
                                    background: `rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.08)`,
                                    border: `1px solid rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.25)`,
                                    color: themeColor, 
                                    fontSize: { xs: '1.4rem', sm: '1.8rem' }, 
                                    flexShrink: 0,
                                    boxShadow: `0 0 12px rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.15)`,
                                }}
                            >
                                {isSuccess ? <MdCheckCircle /> : <MdError />}
                            </Box>

                            {/* Text Fields */}
                            <Stack spacing={0.5} sx={{ flexGrow: 1, minWidth: 0 }}>
                                <Typography 
                                    component={motion.h6}
                                    variants={itemVariants}
                                    sx={{ 
                                        fontFamily: 'var(--font-orbitron), sans-serif', 
                                        fontWeight: 800, 
                                        textTransform: 'uppercase', 
                                        fontSize: { xs: '0.8rem', sm: '0.95rem' },
                                        letterSpacing: '0.05em',
                                        color: '#ffffff',
                                        textShadow: `0 0 15px rgba(${isSuccess ? '0, 245, 255' : '255, 0, 200'}, 0.2)`
                                    }}
                                >
                                    {isSuccess ? 'DELIVERY SUCCESS' : 'DELIVERY FAILED'}
                                </Typography>
                                
                                <Typography 
                                    component={motion.p}
                                    variants={itemVariants}
                                    sx={{ 
                                        fontFamily: 'var(--font-inter), sans-serif', 
                                        fontSize: { xs: '0.75rem', sm: '0.85rem' }, 
                                        color: '#cbd5e1', 
                                        lineHeight: 1.45,
                                        overflowWrap: 'anywhere',
                                        wordBreak: 'break-word',
                                        whiteSpace: 'normal'
                                    }}
                                >
                                    {message}
                                </Typography>
                            </Stack>

                            {/* Close Button with spring hover rotatate and pulse */}
                            <IconButton 
                                component={motion.button}
                                whileHover={{ rotate: 90, scale: 1.15, color: secondaryColor }}
                                transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                                size="small" 
                                onClick={onClose} 
                                sx={{ 
                                    color: 'rgba(255, 255, 255, 0.35)', 
                                    alignSelf: 'flex-start',
                                    mt: -0.25,
                                    p: 0.5,
                                    flexShrink: 0
                                }}
                            >
                                <MdClose />
                            </IconButton>
                        </Stack>

                        {/* Progress Bar (Auto-close indicator) with glowing laser tip */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: '2.5px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                component={motion.div}
                                initial={{ width: '100%' }}
                                animate={{ width: '0%' }}
                                transition={{ duration: 5, ease: 'linear' }}
                                sx={{
                                    height: '100%',
                                    background: `linear-gradient(90deg, ${themeColor} 0%, ${themeColor} 90%, #ffffff 100%)`,
                                    boxShadow: `0 0 8px ${themeColor}`,
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }}
                            >
                                {/* Glowing laser tip */}
                                <Box sx={{
                                    width: '4px',
                                    height: '5px',
                                    background: '#ffffff',
                                    boxShadow: `0 0 10px 2px ${themeColor}, 0 0 4px 1px #ffffff`,
                                    borderRadius: '1px',
                                    flexShrink: 0,
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default CustomAlert;
