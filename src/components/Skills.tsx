"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Data Analysis",
    skills: ["SQL (Joins, Window Functions, CTEs)", "Python", "Pandas", "NumPy", "Data Cleaning", "Exploratory Data Analysis (EDA)"]
  },
  {
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Excel (Pivot Tables, VLOOKUP, Power Query)", "Matplotlib", "Seaborn"]
  },
  {
    title: "Statistics",
    skills: ["Descriptive Statistics", "Probability Basics", "Hypothesis Testing", "A/B Testing"]
  },
  {
    title: "Database & Modeling",
    skills: ["MySQL", "PostgreSQL", "Data Modeling"]
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "Jupyter Notebook", "VS Code", "AWS (EC2, S3, RDS)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-white/[0.02] border-y border-white/5 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit designed to extract, analyze, and visualize data effectively.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
