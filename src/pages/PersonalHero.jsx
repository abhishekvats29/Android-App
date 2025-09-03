import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ChevronDown } from 'lucide-react';

const PersonalHero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 1.5 },
            color: { value: '#ffffff' },
            move: { enable: true, speed: 0.15 },
            opacity: { value: 0.5 },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Background Image Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/vats1.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.15 }}
        transition={{
          duration: 30,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Dark Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/70 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      />

      {/* Signature Text */}
      <motion.div
        className="absolute bottom-5 left-6 z-20 text-white text-sm sm:text-base md:text-xl font-[cursive] italic tracking-widest opacity-80"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        — Abhishek Vats
      </motion.div>

      {/* Hero Heading & Typewriter */}
      <motion.div className="relative z-20 text-center px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Abhishek Vats
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-4 font-medium max-w-2xl mx-auto drop-shadow-md">
            <Typewriter
              words={[
                'Living with Passion, Creating with Purpose',
                'Dreamer. Coder. Cinematic Soul.',
                'Inspired by Bollywood, Powered by Logic',
                'Turning Dreams into Digital Reality',
                'Personal Stories Told through Design',
                'Cinema in Soul, Software in Mind',
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2200}
            />
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PersonalHero;
