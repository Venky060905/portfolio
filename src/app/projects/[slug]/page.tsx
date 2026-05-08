"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import TechBadge from "@/components/TechBadge";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-background"
    >
      {/* Breadcrumb */}
      <motion.div variants={itemVariants} className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.section variants={itemVariants} className="px-6 py-12 border-b border-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex-grow">
              <motion.div variants={itemVariants} className="mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4">
                {project.title}
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-muted mb-6">
                {project.subtitle}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} label={tag} variant="primary" />
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all font-medium"
                >
                  <Github size={20} />
                  View Code
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all font-medium"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              variants={itemVariants}
              className="w-full md:w-80 h-80 glass rounded-2xl border border-accent/20 flex items-center justify-center text-6xl"
            >
              📊
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Sections */}
      <motion.section variants={containerVariants} className="px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Project Overview</h2>
              <p className="text-lg text-muted">{project.longDescription}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 border border-subtle">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                  Challenge
                </h3>
                <p className="text-foreground leading-relaxed">{project.problem}</p>
              </div>

              <div className="glass rounded-2xl p-6 border border-subtle">
                <h3 className="text-sm font-semibold text-accent-secondary uppercase tracking-wider mb-3">
                  Approach
                </h3>
                <p className="text-foreground leading-relaxed">{project.solution}</p>
              </div>

              <div className="glass rounded-2xl p-6 border border-subtle">
                <h3 className="text-sm font-semibold text-accent-tertiary uppercase tracking-wider mb-3">
                  Outcome
                </h3>
                <p className="text-foreground leading-relaxed">{project.result}</p>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-2xl p-6 border border-accent/20 text-center hover:border-accent/50 transition-colors"
                  >
                    <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                      {metric.value}
                    </p>
                    <p className="text-sm text-muted">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Dataset Information */}
          {project.dataset && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold">Dataset Information</h2>
              <div className="glass rounded-2xl p-8 border border-subtle space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Source
                    </h3>
                    <p className="text-foreground">{project.dataset.source}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Data Volume
                    </h3>
                    <p className="text-foreground">{project.dataset.rows}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Features
                    </h3>
                    <p className="text-foreground">{project.dataset.columns}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Categories
                    </h3>
                    <p className="text-foreground">{project.dataset.features.join(", ")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Key Insights */}
          {project.keyInsights && project.keyInsights.length > 0 && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold">Key Insights</h2>
              <div className="space-y-4">
                {project.keyInsights.map((insight, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ translateX: 8 }}
                    className="glass rounded-xl p-6 border border-accent/20 hover:border-accent/50 transition-colors flex gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-accent">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technology Details */}
          {(project.sqlAnalysis || project.pythonAnalysis || project.powerBi) && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold">Technical Implementation</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.sqlAnalysis && (
                  <div className="glass rounded-2xl p-6 border border-subtle space-y-3">
                    <h3 className="text-lg font-semibold text-accent">SQL Analysis</h3>
                    <p className="text-sm text-muted">{project.sqlAnalysis.description}</p>
                    <p className="text-2xl font-bold text-accent">
                      {project.sqlAnalysis.queries}+
                    </p>
                    <p className="text-xs text-muted">Complex Queries Written</p>
                  </div>
                )}

                {project.pythonAnalysis && (
                  <div className="glass rounded-2xl p-6 border border-subtle space-y-3">
                    <h3 className="text-lg font-semibold text-accent-secondary">
                      Python Analysis
                    </h3>
                    <p className="text-sm text-muted">{project.pythonAnalysis.description}</p>
                    <div className="space-y-2">
                      {project.pythonAnalysis.methods.map((method) => (
                        <span
                          key={method}
                          className="inline-block text-xs bg-accent-secondary/10 text-accent-secondary px-2 py-1 rounded"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.powerBi && (
                  <div className="glass rounded-2xl p-6 border border-subtle space-y-3">
                    <h3 className="text-lg font-semibold text-accent-tertiary">
                      Power BI Dashboards
                    </h3>
                    <p className="text-sm text-muted">
                      Interactive dashboards for data visualization
                    </p>
                    <p className="text-2xl font-bold text-accent-tertiary">
                      {project.powerBi.dashboards}
                    </p>
                    <p className="text-xs text-muted">Production Dashboards</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section variants={itemVariants} className="px-6 py-16 border-t border-subtle">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
          <p className="text-lg text-muted mb-8">
            Check out the code on GitHub or explore more projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background rounded-full hover:shadow-lg hover:shadow-accent/50 transition-all font-medium"
            >
              <Github size={20} />
              View on GitHub
            </a>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 glass rounded-full hover:bg-white/10 transition-all font-medium"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
