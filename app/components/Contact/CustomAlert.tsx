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
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    sx={{
                        position: 'fixed',
                        bottom: '2rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 9999,
                        width: '90%',
                        maxWidth: '450px',
                        background: '#020508',
                        border: `2px solid ${isSuccess ? '#00f5ff' : '#ff00c8'}`,
                        padding: '1.2rem',
                        boxShadow: `0 0 30px ${isSuccess ? 'rgba(0, 245, 255, 0.2)' : 'rgba(255, 0, 200, 0.2)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        borderRadius: '0px', // Matches your Cyberpunk theme
                        pointerEvents: 'auto',
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
                            background: isSuccess ? '#00f5ff' : '#ff00c8',
                        }}
                    />

                    <Box sx={{ color: isSuccess ? '#00f5ff' : '#ff00c8', display: 'flex', fontSize: '2rem' }}>
                        {isSuccess ? <MdCheckCircle /> : <MdError />}
                    </Box>

                    <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                        <Typography sx={{ 
                            fontFamily: 'var(--font-outfit), sans-serif', 
                            fontWeight: 900, 
                            textTransform: 'uppercase', 
                            fontSize: '0.9rem',
                            letterSpacing: '0.1em',
                            color: isSuccess ? '#00f5ff' : '#ff00c8'
                        }}>
                            {isSuccess ? 'Inquiry Delivered' : 'Delivery Failed'}
                        </Typography>
                        <Typography sx={{ 
                            fontFamily: 'var(--font-inter), sans-serif', 
                            fontSize: '0.85rem', 
                            color: '#cbd5e1', 
                            lineHeight: 1.5 
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
                            mt: -0.5
                        }}
                    >
                        <MdClose />
                    </IconButton>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default CustomAlert;
