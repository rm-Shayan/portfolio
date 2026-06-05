'use client';

import React, { useEffect } from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
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

    return (
        <AnimatePresence>
            {open && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: { xs: '1rem', sm: '2.5rem' },
                        left: { xs: '1rem', sm: 'auto' },
                        right: { xs: '1rem', sm: '2.5rem' },
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-end' },
                        alignItems: 'center',
                        zIndex: 9999,
                        pointerEvents: 'none',
                    }}
                >
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        sx={{
                            width: { xs: '100%', sm: '400px' },
                            maxWidth: '100%',
                            boxSizing: 'border-box',
                            background: '#020508',
                            border: `2px solid ${isSuccess ? '#00c896' : '#ff00c8'}`,
                            padding: { xs: '0.8rem 1rem', sm: '1.2rem' },
                            boxShadow: `0 0 30px ${isSuccess ? 'rgba(0, 200, 150, 0.2)' : 'rgba(255, 0, 200, 0.2)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: { xs: 1.25, sm: 2 },
                            borderRadius: '0px', // Matches your Cyberpunk theme
                            pointerEvents: 'auto',
                            position: 'relative',
                            maxHeight: { xs: '70vh', sm: 'auto' },
                            overflowY: 'auto',
                        }}
                    >
                        {/* Progress Bar (Auto-close indicator) */}
                        <Box
                            component={motion.div}
                            initial={{ width: '100%' }}
                            animate={{ width: '0%' }}
                            transition={{ duration: 5, ease: 'linear' }}
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '3px',
                                background: isSuccess ? '#00c896' : '#ff00c8',
                            }}
                        />

                        <Box sx={{ color: isSuccess ? '#00c896' : '#ff00c8', display: 'flex', fontSize: { xs: '1.4rem', sm: '2rem' }, flexShrink: 0 }}>
                            {isSuccess ? <MdCheckCircle /> : <MdError />}
                        </Box>

                        <Stack spacing={0.5} sx={{ flexGrow: 1, minWidth: 0 }}>
                            <Typography sx={{ 
                                fontFamily: 'var(--font-outfit), sans-serif', 
                                fontWeight: 900, 
                                textTransform: 'uppercase', 
                                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                                letterSpacing: '0.08em',
                                color: isSuccess ? '#00c896' : '#ff00c8'
                            }}>
                                {isSuccess ? 'Inquiry Delivered' : 'Delivery Failed'}
                            </Typography>
                            <Typography sx={{ 
                                    fontFamily: 'var(--font-inter), sans-serif', 
                                    fontSize: { xs: '0.75rem', sm: '0.85rem' }, 
                                    color: '#cbd5e1', 
                                    lineHeight: 1.4,
                                    overflowWrap: 'anywhere',
                                    wordBreak: 'break-word',
                                    whiteSpace: 'normal'
                            }}>
                                {message}
                            </Typography>
                        </Stack>

                        <IconButton 
                            size="small" 
                            onClick={onClose} 
                            sx={{ 
                                color: '#475569', 
                                '&:hover': { color: '#f1f5f9' },
                                alignSelf: 'flex-start',
                                mt: { xs: -0.25, sm: 0 },
                                p: { xs: 0.5, sm: 1 },
                                flexShrink: 0
                            }}
                        >
                            <MdClose />
                        </IconButton>
                    </Box>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default CustomAlert;
