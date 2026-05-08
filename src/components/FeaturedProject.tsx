"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import ProjectDetailsModal from "./ProjectDetailsModal";

interface FeaturedProjectProps {
  projects: Project[];
}

export default function FeaturedProject({ projects }: FeaturedProjectProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const renderButton = (
    href: string,
    isExternal: boolean,
    label: string,
    variant: "github" | "live"
  ) => {
    if (variant === "github") {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700"
        >
          <Github size={16} />
          {label}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition duration-300 hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
        >
          <ExternalLink size={16} />
          {label}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/30 transition duration-300 hover:shadow-lg hover:shadow-blue-500/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
      >
        <ExternalLink size={16} />
        {label}
      </Link>
    );
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project) => {
          const liveHref = project.live || project.liveDemo || `/projects/${project.slug}`;
          const liveIsExternal = liveHref.startsWith("http");

          return (
          <motion.article
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={() => handleCardClick(project)}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
              <motion.img
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
              {/* Title */}
              <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900 sm:text-2xl transition-colors duration-300 group-hover:text-blue-600">
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-6 text-slate-600"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 transition-colors duration-200 group-hover:bg-blue-200"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 5 && (
                  <span className="inline-block text-xs font-medium text-slate-500">
                    +{project.tags.length - 5}
                  </span>
                )}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Buttons Section */}
              <div className="flex gap-3 pt-4" onClick={(e) => e.stopPropagation()}>
                {renderButton(
                  project.github,
                  false,
                  "Code",
                  "github"
                )}
                {renderButton(
                  liveHref,
                  liveIsExternal,
                  "Live Demo",
                  "live"
                )}
              </div>
            </div>
          </motion.article>
        );
      })}
      </motion.div>

      {/* Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
