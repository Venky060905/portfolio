"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { number: 15, label: "Projects", suffix: "+" },
  { number: 500, label: "SQL Queries", suffix: "+" },
  { number: 10, label: "Dashboards", suffix: "+" },
];

const TECH_STACK = ["SQL", "Python", "Power BI", "AWS", "Django"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={containerRef} className="min-h-[100vh] flex items-center relative px-6 overflow-hidden py-20">
      {/* Animated Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-tertiary/10 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Availability Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-muted">Open to Data Analyst Roles</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Turning Raw Data into
                <br />
                <span className="text-gradient">Business Insights</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
              Aspiring Data Analyst & Backend Developer passionate about transforming complex datasets into actionable insights and building scalable web applications.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 py-6">
              {STATS.map((stat, index) => (
                <div key={index} className="glass rounded-2xl p-4 text-center group hover:bg-white/10 transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {isVisible ? (
                      <>
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2}
                          delay={0}
                        />
                        <span>{stat.suffix}</span>
                      </>
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent text-background font-semibold rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 overflow-hidden"
              >
                <span>View Projects</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <a
                href="/Venkatesh_Kothamasu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 glass text-foreground font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                <span>Download Resume</span>
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <span className="text-sm text-muted">Connect:</span>
              <a
                href="https://github.com/Venky060905"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 glass rounded-full hover:bg-accent/20 hover:text-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Profile Image & Floating Badges */}
          <motion.div variants={itemVariants} className="relative flex items-center justify-center">
            {/* Profile Image Container */}
            <motion.div
              animate={floatingVariants.float}
              className="relative w-full max-w-sm aspect-square"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary/50 rounded-3xl blur-3xl opacity-20" />

              {/* Image Frame */}
              <div className="relative w-full h-full rounded-3xl glass overflow-hidden border-2 border-accent/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                  {/* Placeholder - Replace with actual profile image */}
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-sm text-muted">Profile Image</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Tech Stack Badges */}
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech}
                animate={floatingVariants.float}
                style={{ animationDelay: `${index * 0.2}s` }}
                className={`absolute rounded-full glass px-4 py-2 text-xs font-semibold text-accent border border-accent/30 backdrop-blur-md
                  ${
                    index === 0
                      ? "top-10 left-10 md:left-20"
                      : index === 1
                      ? "top-1/4 -right-10 md:-right-5"
                      : index === 2
                      ? "bottom-20 -left-8 md:-left-12"
                      : index === 3
                      ? "bottom-10 right-5 md:right-10"
                      : "top-1/2 -right-20 md:-right-32"
                  }
                `}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent/30 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
