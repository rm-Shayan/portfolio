'use client';

import { Box, Typography, Container, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/mockData';

export default function Experience() {
  return (
    <Box id="experience" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Experience
        </Typography>

        <Box
          sx={{
            position: 'relative',
            borderLeft: '2px solid',
            borderColor: 'primary.main',
            ml: { xs: 2, md: '50%' },
            pl: 4,
          }}
        >
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box sx={{ mb: 6, position: 'relative' }}>
                {/* Dot */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: -39,
                    top: 0,
                    width: 16,
                    height: 16,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    border: '4px solid',
                    borderColor: 'background.default',
                  }}
                />

                <Card elevation={3} sx={{ borderRadius: 2 }}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      color="primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {item.role}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.company} | {item.date}
                    </Typography>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
