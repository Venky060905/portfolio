"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Github,
  ExternalLink,
  Clock,
  Users,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { useEffect } from "react";
import { Project } from "@/data/projects";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const liveHref = project.live || project.liveDemo || `/projects/${project.slug}`;
  const liveIsExternal = liveHref.startsWith("http");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.3, ease: "easeIn" },
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-3xl my-6 max-h-[86vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={20} className="text-slate-900" />
              </motion.button>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-6 p-6 md:p-8 border-b border-slate-200"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center"
                >
                  <div className="relative w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="space-y-4 flex flex-col justify-center"
                >
                  <motion.h1
                    id="modal-title"
                    variants={itemVariants}
                    className="pr-10 text-3xl md:text-4xl font-bold text-slate-900"
                  >
                    {project.title}
                  </motion.h1>

                  <motion.p
                    variants={itemVariants}
                    className="text-base leading-relaxed text-slate-600"
                  >
                    {project.longDescription}
                  </motion.p>

                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-3 gap-3 py-3"
                  >
                    {project.duration && (
                      <div className="text-center p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                        <Clock size={18} className="text-blue-600 mx-auto mb-1.5" />
                        <p className="text-xl font-bold text-slate-900">
                          {project.duration.split(" ")[0]}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Duration</p>
                      </div>
                    )}
                    {project.teamSize && (
                      <div className="text-center p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                        <Users size={18} className="text-blue-600 mx-auto mb-1.5" />
                        <p className="text-sm font-bold text-slate-900">
                          {project.teamSize}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Team</p>
                      </div>
                    )}
                    {project.status && (
                      <div className="text-center p-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors duration-200">
                        <CheckCircle2
                          size={18}
                          className="text-green-600 mx-auto mb-1.5"
                        />
                        <p className="text-sm font-bold text-slate-900">
                          {project.status}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">Status</p>
                      </div>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex gap-3 pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition duration-300"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                    {liveIsExternal ? (
                      <a
                        href={liveHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition duration-300"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    ) : (
                      <a
                        href={liveHref}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition duration-300"
                      >
                        <ExternalLink size={20} />
                        Live Demo
                      </a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="p-6 md:p-8 space-y-10"
              >
                {project.features && project.features.length > 0 && (
                  <motion.section variants={itemVariants} className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Key Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ x: 8 }}
                          className="flex gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50/30 transition-colors duration-200"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                            <CheckCircle2 size={14} className="text-white" />
                          </div>
                          <p className="text-slate-700 leading-relaxed">{feature}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {project.challenges && project.challenges.length > 0 && (
                  <motion.section variants={itemVariants} className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Challenges & Solutions
                    </h2>
                    <div className="space-y-4">
                      {project.challenges.map((item, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 rounded-lg border border-slate-200 bg-gradient-to-br from-orange-50 to-slate-50 hover:border-orange-300 transition-colors duration-200"
                        >
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center">
                              <Zap size={18} className="text-white" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <h3 className="text-lg font-bold text-slate-900">
                                Challenge: {item.challenge}
                              </h3>
                              <p className="text-slate-600 leading-relaxed">
                                <span className="font-semibold text-blue-600">
                                  Solution:
                                </span>{" "}
                                {item.solution}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {project.tags && project.tags.length > 0 && (
                  <motion.section variants={itemVariants} className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.08 }}
                          className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm hover:bg-blue-200 transition-colors duration-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.section>
                )}
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
