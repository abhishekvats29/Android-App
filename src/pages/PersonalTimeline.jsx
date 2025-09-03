import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    icon: '📍',
    title: 'Born and Raised in India',
    description:
      'My journey began in a culturally rich environment that shaped my values, traditions, and creativity.',
  },
  {
    icon: '🎬',
    title: 'Passion for Acting & Film',
    description:
      'Bollywood has been a huge inspiration — I’ve always been captivated by expressive storytelling and cinematic magic.',
  },
  {
    icon: '🎨',
    title: 'Creating Art',
    description:
      "Whether it's sketching, painting, or designing — I love turning imagination into something visual and meaningful.",
  },
  {
    icon: '🎧',
    title: 'Listening to Music',
    description:
      'Music fuels my focus and emotions. From soulful melodies to energetic beats — it’s my everyday companion.',
  },
  {
    icon: '🌐',
    title: 'Tech Meets Creativity',
    description:
      'A coder by profession, but also a creative soul who blends technology with expression and storytelling.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const PersonalTimeline = () => {
  return (
    <section className="min-h-screen py-14 px-4 flex items-center justify-center bg-gradient-to-b from-black via-[#0c0c0c] to-black">
      <div className="w-full max-w-2xl sm:max-w-3xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 sm:p-7 shadow-xl">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-white tracking-wide uppercase">
          Life Highlights
        </h2>

        <div className="space-y-7 max-h-[60vh] overflow-y-auto px-1 pr-2 scrollbar-thin scrollbar-thumb-white/20">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-4 border-white/25 pl-4 sm:pl-5"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-start gap-3 mb-1">
                <span className="text-xl sm:text-2xl text-white">{item.icon}</span>
                <h3 className="font-semibold text-base sm:text-lg text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalTimeline;
