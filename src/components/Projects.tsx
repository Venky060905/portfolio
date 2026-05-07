"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Customer Churn Analysis Dashboard",
    description:
      "Built an end-to-end customer churn analytics solution using Python, SQL, and Power BI to identify retention patterns, churn drivers, and customer behavior trends through interactive business intelligence dashboards.",
    problem:
      "Telecom companies faced high customer attrition without clear visibility into churn-driving factors.",
    solution:
      "Performed data cleaning, exploratory data analysis, SQL querying, and developed interactive Power BI dashboards with KPI tracking and churn segmentation.",
    result:
      "Identified key churn factors including month-to-month contracts, fiber optic services, and high monthly charges, enabling data-driven retention insights.",
    tags: ["Python", "SQL", "Power BI", "Pandas", "EDA", "Dashboard"],
    github: "https://github.com/Venky060905/customer-churn-analysis",
  },
  {
    title: "Sales Performance Dashboard",
    description:
      "Engineered an end-to-end KPI dashboard to monitor sales, profit margins, and regional performance trends in real-time.",
    problem: "Lack of centralized visibility into sales metrics across regions.",
    solution: "Integrated SQL data processing with Power BI visualizations.",
    result: "Reduced reporting time by 40% and improved decision accuracy.",
    tags: ["SQL", "Python", "Power BI", "Data Modeling"],
    github: "https://github.com/Venky060905",
  },
  {
    title: "E-commerce Dashboard System",
    description:
      "Developed a robust backend and analytics system for an e-commerce platform, handling product management, pricing, and ratings.",
    problem: "Static pricing model and disorganized product analytics.",
    solution: "Built dynamic pricing logic and comprehensive rating analysis algorithms.",
    result: "Increased profit margins through optimized pricing strategies.",
    tags: ["Django", "SQL", "Python", "Backend"],
    github: "https://github.com/Venky060905",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Real-world problems solved through data and engineering.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-lg">{project.description}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors shrink-0 text-sm font-medium"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8 bg-black/20 p-6 rounded-xl border border-white/5">
                  <div>
                    <h4 className="text-cyan-400 text-sm font-semibold mb-2 uppercase tracking-wider">The Problem</h4>
                    <p className="text-gray-300 text-sm">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-purple-400 text-sm font-semibold mb-2 uppercase tracking-wider">The Solution</h4>
                    <p className="text-gray-300 text-sm">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-indigo-400 text-sm font-semibold mb-2 uppercase tracking-wider">The Result</h4>
                    <p className="text-gray-300 text-sm">{project.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm text-cyan-300 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
