"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="group flex flex-wrap gap-1 hover:opacity-80 transition-opacity duration-300">
          <span className="text-base md:text-lg font-bold tracking-tight text-gradient whitespace-nowrap">
            Venkatesh
          </span>
          <span className="text-base md:text-lg font-bold tracking-tight text-gradient whitespace-nowrap">
            Kothamasu
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-muted hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass absolute top-full left-0 w-full flex flex-col py-4 px-6 gap-4 border-t border-subtle"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
