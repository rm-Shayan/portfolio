"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Button,
} from "@mui/material";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionHeader from "../SectionHeader/SectionHeader";
import { useSelector } from "react-redux";
import { RootState } from "../../../lib/store";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiJavascript,
  SiRedux,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiAmazonwebservices,
} from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { DiGoogleCloudPlatform } from "react-icons/di";

const stats = [
  { label: "Projects Delivered", val: "20+", status: "active" },
  { label: "Years Experience", val: "2+", status: "running" },
  { label: "Client Satisfaction", val: "100%", status: "nominal" },
  { label: "Tech Mastered", val: "15+", status: "compiled" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const mode = useSelector((state: RootState) => state.ui.mode);
  const isDark = mode === "dark";

  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  const skillsData = {
    frontend: [
      { name: "React.js", icon: <SiReact />, color: "#61DAFB", pct: 68 },
      { name: "Next.js", icon: <SiNextdotjs />, color: isDark ? "#FFFFFF" : "#111111", pct: 65 },
      { name: "Redux", icon: <SiRedux />, color: "#764ABC", pct: 85 },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", pct: 72 },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", pct: 88 },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", pct: 69 },
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", pct: 90 },
      { name: "CSS", icon: <SiCss3 />, color: "#1572B6", pct: 82 },
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", pct: 75 },
      { name: "Express", icon: <SiExpress />, color: isDark ? "#FFD166" : "#2D3748", pct: 76 },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", pct: 70 },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1", pct: 60 },
      { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", pct: 60 },
    ],
    tools: [
      { name: "Git", icon: <SiGit />, color: "#F05032", pct: 82 },
      { name: "AWS", icon: <SiAmazonwebservices />, color: "#FF9900", pct: 68 },
      { name: "GCP", icon: <DiGoogleCloudPlatform />, color: "#4285F4" , pct: 50 },
      
    ],
  };

  const activeSkills = activeTab === "all"
    ? [...skillsData.frontend, ...skillsData.backend, ...skillsData.tools]
    : skillsData[activeTab];

  const handleDownloadCV = async () => {
    try {
      const response = await fetch("/api/cv/download");
      if (!response.ok) throw new Error("Failed to download CV");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Rao_Muhammad_Shayan_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download CV. Please try again.");
    }
  };

  return (
    <Box
      id="about"
      sx={{
        py: { xs: "5rem", md: "8rem", lg: "10rem" },
        background: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader num="01" title="About & Systems" />

        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 8, md: 10 } }}>
          
          {/* Two Column Biography & Metrics Dashboard */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
              gap: { xs: 5, md: 6, lg: 8 },
              alignItems: "center",
            }}
          >
            {/* Bio Column */}
            <Box>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem", lg: "3rem" },
                    fontWeight: 900,
                    color: "text.primary",
                    mb: 3,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    "& span": {
                      color: "primary.main",
                      textShadow: isDark ? "0 0 30px rgba(0, 245, 255, 0.3)" : "none",
                    },
                  }}
                >
                  Designing <span>Digital Fortresses</span> for the Modern Web.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: "text.secondary",
                    mb: 4,
                    fontSize: "1.08rem",
                    lineHeight: 1.8,
                    fontFamily: "var(--font-inter), sans-serif",
                    "& strong": { color: "primary.main", fontWeight: 700 },
                  }}
                >
                  I'm <strong>Rao Muhammad Shayan</strong>, based in Karachi. I
                  specialize in building highly scalable, performant MERN
                  applications that don't just work — they dominate. I believe
                  every line of code should be a strategic asset, engineered to balance robust logic with futuristic aesthetics.
                </Typography>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDownloadCV}
                  startIcon={<FiDownload />}
                  sx={{
                    padding: "0.9rem 2.5rem",
                    fontSize: "0.85rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-outfit), sans-serif",
                    color: "#fff",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: isDark
                        ? "0 0 20px rgba(255, 0, 200, 0.4)"
                        : "0 10px 20px rgba(255, 0, 200, 0.15)",
                    },
                  }}
                >
                  Download CV
                </Button>
              </motion.div>
            </Box>

            {/* Metrics Dashboard Column */}
            <Box>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    background: isDark ? "rgba(5, 12, 18, 0.6)" : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${isDark ? "rgba(0, 245, 255, 0.2)" : "rgba(15, 23, 42, 0.08)"}`,
                    borderRadius: "12px",
                    padding: "2rem 1.8rem",
                    boxShadow: isDark 
                      ? "0 15px 40px rgba(0,0,0,0.4), inset 0 0 20px rgba(0, 245, 255, 0.02)"
                      : "0 15px 45px rgba(15, 23, 42, 0.05)",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "var(--font-share-tech-mono), monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.15em",
                        color: "primary.main",
                      }}
                    >
                      [SYSTEM METRICS - ONLINE]
                    </Typography>
                    <Box sx={{ display: "flex", gap: "0.3rem" }}>
                      <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ff5f56" }} />
                      <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#ffbd2e" }} />
                      <Box sx={{ width: "6px", height: "6px", borderRadius: "50%", background: "#27c93f" }} />
                    </Box>
                  </Stack>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: 2.5,
                    }}
                  >
                    {stats.map((stat, i) => (
                      <Box
                        key={i}
                        sx={{
                          padding: "1.2rem",
                          border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(15, 23, 42, 0.04)"}`,
                          background: isDark ? "rgba(2, 5, 8, 0.4)" : "rgba(15, 23, 42, 0.02)",
                          borderRadius: "8px",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: "primary.main",
                            background: isDark ? "rgba(0, 245, 255, 0.02)" : "rgba(0, 245, 255, 0.01)",
                            transform: "translateY(-4px)",
                            boxShadow: isDark ? "0 4px 15px rgba(0, 245, 255, 0.1)" : "none",
                          }
                        }}
                      >
                        <Stack direction="row" alignItems="center" gap={1} sx={{ mb: 1 }}>
                          <Box 
                            sx={{ 
                              width: "6px", 
                              height: "6px", 
                              borderRadius: "50%", 
                              background: "#00f5ff",
                              boxShadow: isDark ? "0 0 8px #00f5ff" : "none",
                              animation: "pulseGlow 2s infinite"
                            }} 
                          />
                          <Typography
                            sx={{
                              fontFamily: "var(--font-share-tech-mono), monospace",
                              fontSize: "0.65rem",
                              color: "text.secondary",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase"
                            }}
                          >
                            {stat.status}
                          </Typography>
                        </Stack>

                        <Typography
                          sx={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: { xs: "1.8rem", sm: "2rem" },
                            fontWeight: 900,
                            color: "primary.main",
                            lineHeight: 1,
                            mb: 0.5,
                            textShadow: isDark ? "0 0 15px rgba(0, 245, 255, 0.1)" : "none"
                          }}
                        >
                          {stat.val}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            color: "text.secondary",
                            fontWeight: 500,
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>

          {/* Categorized Skills Section */}
          <Box sx={{ width: "100%", mt: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Tab Selector Bar */}
              <Box 
                sx={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  gap: { xs: 1, sm: 2 }, 
                  mb: 6, 
                  flexWrap: "wrap",
                  padding: "0.4rem",
                  background: isDark ? "rgba(5, 12, 18, 0.5)" : "rgba(15, 23, 42, 0.02)",
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.04)" : "rgba(15, 23, 42, 0.06)"}`,
                  borderRadius: "30px",
                  maxWidth: "max-content",
                  mx: "auto"
                }}
              >
                {(["all", "frontend", "backend", "tools"] as const).map((tab) => {
                  const label = 
                    tab === "all" ? "All Skills" :
                    tab === "frontend" ? "Frontend Systems" :
                    tab === "backend" ? "Backend & DBs" : "Tools & DevOps";
                  const isActive = activeTab === tab;

                  return (
                    <Box
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      sx={{
                        padding: { xs: "0.6rem 1rem", sm: "0.7rem 1.8rem" },
                        cursor: "pointer",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: isActive ? 800 : 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: isActive ? "primary.main" : "text.secondary",
                        borderRadius: "20px",
                        background: isActive 
                          ? (isDark ? "rgba(0, 245, 255, 0.08)" : "rgba(3, 105, 161, 0.08)")
                          : "transparent",
                        border: isActive ? `1px solid ${isDark ? "rgba(0, 245, 255, 0.2)" : "rgba(3, 105, 161, 0.2)"}` : "1px solid transparent",
                        boxShadow: isActive && isDark ? "0 0 15px rgba(0, 245, 255, 0.08)" : "none",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&:hover": {
                          color: "primary.main",
                        }
                      }}
                    >
                      {label}
                    </Box>
                  );
                })}
              </Box>

              {/* Skills Grid container with animations */}
              <Box sx={{ minHeight: "260px", position: "relative" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                      gap: "1.5rem",
                      width: "100%",
                    }}
                  >
                    {activeSkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.02 }}
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            padding: "1.8rem",
                            flex: 1,
                            background: isDark 
                              ? "linear-gradient(145deg, rgba(13, 25, 38, 0.75) 0%, rgba(6, 14, 23, 0.95) 100%)"
                              : "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${isDark ? "rgba(255,255,255,0.04)" : theme.palette.divider}`,
                            borderRadius: "16px",
                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            cursor: "default",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: isDark
                              ? "0 8px 32px rgba(0, 0, 0, 0.2)"
                              : "0 6px 20px rgba(15, 23, 42, 0.03)",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              right: 0,
                              width: "100px",
                              height: "100px",
                              background: `radial-gradient(circle at top right, ${skill.color}25, transparent 70%)`,
                              opacity: 0.5,
                              transition: "opacity 0.4s ease",
                              pointerEvents: "none",
                            },
                            "&:hover": {
                              borderColor: `${skill.color}66`,
                              boxShadow: isDark 
                                ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 20px ${skill.color}22`
                                : `0 20px 40px rgba(0, 0, 0, 0.08), 0 5px 15px ${skill.color}22`,
                              "&::before": {
                                opacity: 1,
                              },
                              "& .skill-icon": {
                                color: skill.color,
                                transform: "scale(1.1) translateY(-4px)",
                                filter: isDark ? `drop-shadow(0 0 12px ${skill.color}66)` : "none",
                              },
                            },
                          }}
                        >
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box
                              className="skill-icon"
                              sx={{
                                width: 44,
                                height: 44,
                                borderRadius: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: isDark
                                  ? "rgba(255,255,255,0.03)"
                                  : "rgba(15, 23, 42, 0.03)",
                                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                fontSize: "1.4rem",
                                color: skill.color,
                              }}
                            >
                                {skill.icon}
                            </Box>
                            <Typography
                              sx={{
                                fontFamily: "var(--font-outfit), sans-serif",
                                fontSize: "0.9rem",
                                fontWeight: 800,
                                color: "text.primary",
                                letterSpacing: "0.02em",
                                textTransform: "uppercase",
                              }}
                            >
                              {skill.name}
                            </Typography>
                          </Stack>

                          <Box sx={{ mt: 1 }}>
                            <Stack
                              direction="row"
                              justifyContent="space-between"
                              sx={{ mb: 1 }}
                            >
                              <Typography
                                sx={{
                                  fontSize: "0.65rem",
                                  fontFamily: "var(--font-inter), sans-serif",
                                  color: "text.secondary",
                                  fontWeight: 600,
                                  letterSpacing: "0.05em",
                                }}
                              >
                                PROFICIENCY
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "0.75rem",
                                  fontFamily: "var(--font-outfit), sans-serif",
                                  color: isDark ? "primary.light" : "primary.main",
                                  fontWeight: 800,
                                }}
                              >
                                {skill.pct}%
                              </Typography>
                            </Stack>

                            <Box
                              sx={{
                                height: "6px",
                                background: isDark
                                  ? "rgba(255,255,255,0.04)"
                                  : "rgba(15, 23, 42, 0.06)",
                                borderRadius: "999px",
                                overflow: "hidden",
                                position: "relative"
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.pct}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                style={{
                                  height: "100%",
                                  background: skill.color,
                                  borderRadius: "999px",
                                }}
                              />
                            </Box>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
