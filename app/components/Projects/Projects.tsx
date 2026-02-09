'use client';

import { Box, Typography, Card, CardContent, CardActions, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { portfolioData } from '../../../data/mockData';

export default function Projects() {
  // Array of images matching projects order
  const projectImages = ['/image3.png', '/image1.png', '/image2.png'];

  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Projects
        </Typography>

        {/* Flex container */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              style={{ flex: '1 1 300px', maxWidth: 350 }}
            >
              <Card
                elevation={4}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  transition: '0.3s',
                  '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Project image from public folder */}
                  <Box
                    component="img"
                    src={projectImages[index]} // pick image by index
                    alt={project.title}
                    sx={{
                      width: '100%',
                      height: 150,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 2,
                    }}
                  />

                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
                    {project.tech.map((tech) => (
                      <Chip key={tech} label={tech} size="small" variant="outlined" color="primary" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
