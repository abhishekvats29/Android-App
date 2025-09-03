import React from "react";
import { motion } from "framer-motion";

export default function FooterPersonal() {
  return (
    <footer className="relative bg-[#0a0a0a] py-14 px-4 border-t border-white/20 overflow-hidden">
      {/* Floating hearts & roses */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-lg opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 5,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            {i % 2 === 0 ? "❤️" : "🌹"}
          </motion.div>
        ))}
      </div>

      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />

      {/* Footer Card */}
      <div className="relative z-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 sm:p-8 shadow-xl text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl italic font-semibold text-red-400 drop-shadow-md mb-4">
          Made with all my ❤️ — Abhishek Vats
        </h3>

        <div className="flex justify-center items-center space-x-5 text-xl sm:text-2xl mt-6 mb-4">
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            🌹
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            ❤️
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} transition={{ duration: 0.3 }}>
            🌹
          </motion.div>
        </div>

        <p className="text-xs sm:text-sm text-gray-400">
          © {new Date().getFullYear()} My Cinematic Life. All love reserved.
        </p>
      </div>
    </footer>
  );
}
