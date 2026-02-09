'use client';
import { Box, Typography, Container, Link } from '@mui/material';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[900],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1" align="center">
                    © {new Date().getFullYear()} Rao Muhammad Shayan
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    Built with Next.js, MUI & Redux
                </Typography>
            </Container>
        </Box>
    );
}
