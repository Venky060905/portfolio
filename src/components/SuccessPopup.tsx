"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-8 text-center shadow-2xl shadow-purple-500/10 before:absolute before:inset-0 before:bg-white/[0.02]"
          >
            {/* Glow effect */}
            <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-purple-500/20 blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-blue-500/20 blur-[80px]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-400/10 border border-green-400/20 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                <CheckCircle2 className="h-10 w-10 text-green-400" />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                Message Sent Successfully
              </h3>
              
              <p className="mb-8 text-gray-400">
                I&apos;ll get back to you soon
              </p>

              <button
                onClick={onClose}
                className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-purple-500/25 active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
