// This component is no longer used. Featured Projects are now displayed in FeaturedProject.tsx
// Keeping file for backwards compatibility. Can be removed if no longer needed elsewhere.

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import TechBadge from "./TechBadge";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.08,
      },
    },
  };

  const liveHref = project.live || project.liveDemo || `/projects/${project.slug}`;
  const liveIsExternal = liveHref.startsWith("http");

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B1220]/85 shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent-secondary/15 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div className="relative overflow-hidden h-56">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6 flex h-full flex-col gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <p
            className="text-sm leading-6 text-muted"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} variant="primary" />
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/95 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-900"
          >
            <Github size={16} />
            GitHub
          </a>

          {liveIsExternal ? (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-secondary px-5 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition hover:brightness-110"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          ) : (
            <Link
              href={liveHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-secondary px-5 py-3 text-sm font-semibold text-background shadow-lg shadow-accent/20 transition hover:brightness-110"
            >
              <ExternalLink size={16} />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
