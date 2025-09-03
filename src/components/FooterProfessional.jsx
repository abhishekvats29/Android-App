import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiJavascript,
  SiFlask,
  SiDocker,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Footer() {
  const techIcons = [
    SiReact,
    SiPython,
    SiTailwindcss,
    SiJavascript,
    SiFlask,
    SiDocker,
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0d1a2d] to-[#102e4a] py-16 px-4 border-t border-white/20 overflow-hidden"
    style={{ backgroundColor: '#0d1a2d' }}>
      {/* Floating Tech Icons Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {techIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* Top Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/30" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 sm:p-8 shadow-xl text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
          Crafted with passion, discipline, and curiosity — Abhishek Vats
        </h3>

        {/* Social Links */}
        <div className="flex justify-center flex-wrap gap-6 text-2xl mb-6">
          <motion.a
            href="https://github.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-white hover:text-gray-300 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-[#0A66C2] hover:text-white transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://leetcode.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-orange-400 hover:text-white transition"
          >
            <SiLeetcode />
          </motion.a>
          <motion.a
            href="https://www.hackerrank.com/abhishekvats29"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-green-400 hover:text-white transition"
          >
            <FaHackerrank />
          </motion.a>
        </div>

        {/* Email */}
        <motion.a
          href="mailto:abhishekvats4567@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex justify-center items-center gap-2 text-sm sm:text-base text-white/90 hover:text-white transition"
        >
          <FaEnvelope className="text-red-400" />
          <span>abhishekvats4567@gmail.com</span>
        </motion.a>

        {/* Footer Text */}
        <p className="mt-6 text-xs text-white/50">
          © {new Date().getFullYear()} — Designed & Developed by Abhishek Vats. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
