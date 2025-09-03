import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[url('/images/bg7.avif')] bg-cover bg-center flex items-center justify-center px-4 pt-28 sm:pt-36">
      {/* Main Hero Card */}
      <motion.div
        className="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-6 sm:p-10 w-full max-w-3xl shadow-xl text-center mt-10 sm:mt-6 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Profile Image */}
        <motion.div
          className="absolute -top-20 sm:-top-24 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl object-cover"
          />
        </motion.div>

        {/* Name and Bio */}
        <div className="mt-24 sm:mt-28 space-y-4 px-2">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Abhishek Vats
          </motion.h1>

          <motion.p
            className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Full Stack Developer | Passionate about building efficient, scalable, and elegant digital
            solutions that make a real impact.
          </motion.p>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1vMG3rRvA8b94oKGy7fTP9SpVO6ysCQJz/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
          >
            📄 View CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
