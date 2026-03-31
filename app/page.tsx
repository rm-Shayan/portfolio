'use client';

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/CustomCursor/CustomCursor';
import SectionDivider from './components/SectionDivider/SectionDivider';
import SplashScreen from './components/SplashScreen/SplashScreen';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <CustomCursor />
            <Navbar />

            <Box component="main">
              <Hero />
              <SectionDivider />

              <Box sx={{ position: 'relative', zIndex: 2 }}>
                <About />
                <SectionDivider />

                <Services />
                <SectionDivider />

                <Projects />
                <SectionDivider />

                <Experience />
                <SectionDivider />

                <Testimonials />
                <SectionDivider />

                <Blog />
                <SectionDivider />

                <Contact />
              </Box>
            </Box>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
