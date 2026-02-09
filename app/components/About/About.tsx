'use client';

import { Box, Typography, Container, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiNodedotjs,
  SiAmazonec2,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript size={22} /> },
  { name: 'TypeScript', icon: <SiTypescript size={22} /> },
  { name: 'React.js', icon: <SiReact size={22} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={22} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} /> },
  { name: 'MUI', icon: <SiMui size={22} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={22} /> },
  { name: 'MongoDB', icon: <SiMongodb size={22} /> },
  { name: 'Postgres', icon: <SiPostgresql size={22} /> },
  { name: 'Docker', icon: <SiDocker size={22} /> },
  { name: 'AWS', icon: <SiAmazonec2 size={22} /> },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ mb: 8, fontWeight: 700 }}
        >
          About Me
        </Typography>

        {/* Flex Row with 2 Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
            alignItems: 'stretch', // make both cards equal height
            justifyContent: 'center',
          }}
        >
          {/* Left Card: Profile + About */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  gap: 3,
                  mb: 3,
                }}
              >
                <Avatar
                  src="https://res.cloudinary.com/dfqk1mldk/image/upload/v1770046096/avatars/ilhtpi8oejns9scno0bs.jpg"
                  alt="Rao Muhammad Shayan"
                  sx={{
                    width: 140,
                    height: 140,
                    border: '4px solid #22c55e',
                    boxShadow: 4,
                  }}
                />
                <Box>
                  <Typography variant="h5" fontWeight={700}>
                    Rao Muhammad Shayan
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    Full Stack Web Developer
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                Impact-driven Full-Stack Developer with expertise in the MERN stack and TypeScript.
                Skilled in designing RESTful APIs, implementing secure OAuth2/JWT authentication flows,
                optimizing NoSQL schemas, and modernizing frontend workflows using Tailwind CSS and SSR.
                Experienced in Docker, GitHub Actions (CI/CD), and AWS deployments.
              </Typography>

              <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
                <strong>Education:</strong> Intermediate in Computer Science from Superior Science College (2024),
                and Web & Mobile App Development from Saylani Institute (2024). Completed matriculation from Ideal English Grammar School (2022).
              </Typography>

              <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
                <strong>Contact:</strong> Shah Faisal Green Town, Karachi | raomuhammadshayan897@gmail.com | +92 318 119624 |{' '}
                <a href="https://github.com/rm-Shayan" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Typography>
            </Paper>
          </motion.div>

          {/* Right Card: Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                Technical Skills
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mt: 2,
                  justifyContent: 'center',
                  flexGrow: 1, // make the skills box grow
                }}
              >
                {skills.map((skill, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 3,
                      py: 1.5,
                      bgcolor: 'primary.main',
                      color: 'primary.contrastText',
                      borderRadius: 2,
                      fontWeight: 'bold',
                      transition: '0.3s',
                      cursor: 'default',
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                      },
                    }}
                  >
                    {skill.icon}
                    <Typography variant="body2">{skill.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
