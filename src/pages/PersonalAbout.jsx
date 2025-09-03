import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#0c0c0c] to-[#1a1a1a] py-12 px-4 flex items-center overflow-hidden">
      {/* Floating Emojis (Android Optimized - fewer + larger) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-2xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5 + Math.random() * 3,
              ease: "easeInOut",
              delay: Math.random(),
            }}
          >
            {i % 2 === 0 ? "❤️" : "🌹"}
          </motion.div>
        ))}
      </div>

      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 tracking-wide">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <div className="space-y-4 text-white/90 text-sm sm:text-base leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white">Abhishek Vats</span>, a creatively driven individual who finds meaning in experiences, storytelling, and personal growth.
            </p>
            <p>
              My life is deeply inspired by art, expression, Bollywood, and human connections. Whether it’s capturing a moment or sketching an emotion — I see the world as a canvas.
            </p>
            <p>
              In my free time, I explore creativity through music, travel, and visual expression that speaks beyond words.
            </p>

            {/* Instagram Button (Improved padding for Android) */}
            <a
              href="https://instagram.com/abhishekvats29"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full transition mt-4 text-sm sm:text-base"
            >
              <FaInstagram size={18} />
              Connect Me
            </a>
          </div>

          {/* Right Image (Mobile optimized size) */}
          <div className="flex justify-center">
            <img
              src="/images/vats4.jpeg"
              alt="Abhishek Vats"
              className="w-36 sm:w-44 md:w-52 rounded-xl border-4 border-white/20 shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
