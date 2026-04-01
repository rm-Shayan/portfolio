'use client';

import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Box,
    Typography,
    Stack,
    IconButton,
    Rating,
    CircularProgress
} from '@mui/material';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

interface AddTestimonialModalProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

const AddTestimonialModal = ({ open, onClose, onSuccess }: AddTestimonialModalProps) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        text: '',
        stars: 5
    });
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleRatingChange = (_event: any, newValue: number | null) => {
        if (newValue) {
            setFormData(prev => ({ ...prev, stars: newValue }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to submit testimonial');
            }

            // Success
            setFormData({ name: '', role: '', text: '', stars: 5 });
            onSuccess();
            onClose();
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog 
            open={open} 
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            PaperProps={{
                sx: {
                    background: 'background.paper',
                    backgroundImage: 'none',
                    border: '1px solid rgba(0, 245, 255, 0.1)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    borderRadius: '0px',
                    padding: '1rem',
                    position: 'relative',
                    overflow: 'visible'
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '-1px',
                    left: '-1px',
                    right: '-1px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #00f5ff, transparent)'
                }}
            />

            <DialogTitle sx={{ 
                pb: 1, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                fontFamily: 'var(--font-outfit), sans-serif',
                fontWeight: 800,
                color: 'primary.main',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '1.2rem'
            }}>
                Leave a Testimonial
                <IconButton onClick={onClose} size="small" sx={{ color: 'text.secondary' }}>
                    <MdClose />
                </IconButton>
            </DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent sx={{ py: 2 }}>
                    <Stack spacing={3}>
                        <Typography sx={{ 
                            fontSize: '0.85rem', 
                            color: 'text.secondary', 
                            fontFamily: 'var(--font-inter), sans-serif',
                            lineHeight: 1.6
                        }}>
                            Your feedback helps me grow and showcase the value I provide to clients.
                        </Typography>

                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            sx={inputStyles}
                        />

                        <TextField
                            fullWidth
                            label="Your Role / Company"
                            name="role"
                            required
                            placeholder="e.g. CEO, Tech Platform"
                            value={formData.role}
                            onChange={handleChange}
                            variant="outlined"
                            size="small"
                            sx={inputStyles}
                        />

                        <Box>
                            <Typography component="legend" sx={{ 
                                mb: 1, 
                                fontSize: '0.8rem', 
                                color: 'primary.main',
                                fontWeight: 700,
                                fontFamily: 'var(--font-outfit), sans-serif',
                                textTransform: 'uppercase'
                            }}>
                                Satisfaction Rating
                            </Typography>
                            <Rating
                                name="stars"
                                value={formData.stars}
                                onChange={handleRatingChange}
                                sx={{ color: 'var(--yellow)' }}
                            />
                        </Box>

                        <TextField
                            fullWidth
                            label="Your Experience"
                            name="text"
                            required
                            multiline
                            rows={4}
                            value={formData.text}
                            onChange={handleChange}
                            variant="outlined"
                            sx={inputStyles}
                        />

                        {error && (
                            <Typography color="error" sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                                {error}
                            </Typography>
                        )}
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button 
                        onClick={onClose} 
                        sx={{ 
                            color: 'text.secondary',
                            fontFamily: 'var(--font-outfit), sans-serif',
                            fontWeight: 700
                        }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        type="submit" 
                        disabled={loading}
                        variant="contained"
                        sx={{
                            px: 4,
                            py: 1,
                            borderRadius: '0px',
                            background: 'linear-gradient(135deg, #00f5ff, #00d2ff)',
                            color: '#000',
                            fontWeight: 900,
                            fontFamily: 'var(--font-outfit), sans-serif',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            '&:hover': {
                                background: 'linear-gradient(135deg, #00d2ff, #00f5ff)',
                                boxShadow: '0 0 15px rgba(0, 245, 255, 0.4)'
                            },
                            '&:disabled': {
                                background: 'rgba(255, 255, 255, 0.1)',
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }}
                    >
                        {loading ? <CircularProgress size={20} color="inherit" /> : 'Submit'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

const inputStyles = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '0px',
        fontFamily: 'var(--font-inter), sans-serif',
        fontSize: '0.9rem',
        '& fieldset': {
            borderColor: 'rgba(0, 245, 255, 0.1)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(0, 245, 255, 0.3)',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
        },
    },
    '& .MuiInputLabel-root': {
        fontFamily: 'var(--font-outfit), sans-serif',
        fontSize: '0.85rem',
        color: 'text.secondary',
        '&.Mui-focused': {
            color: 'primary.main',
        },
    },
};

export default AddTestimonialModal;
