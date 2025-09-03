import React, { useEffect, useState } from 'react';
import NavbarPersonal from './NavbarPersonal';
import PersonalHero from './PersonalHero';
import PersonalAbout from './PersonalAbout';
import CreativitySection from './CreativitySection';
import PersonalGallery from './PersonalGallery';
import PersonalTimeline from './PersonalTimeline';
import ConnectSection from './ConnectSection';
import PersonalAssistant from './PersonalBot/PersonalAssistant';

import { FaWhatsapp, FaHome, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Personal = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    window.location.href = '/';
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowFooter(currentY < lastScrollY || currentY < 50);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-black text-white scroll-smooth relative">
      <NavbarPersonal />

      <main className="pt-16">
        <section id="hero">
          <PersonalHero />
        </section>
        <section id="About">
          <PersonalAbout />
        </section>
        <section id="creativity">
          <CreativitySection />
        </section>
        <section id="gallery">
          <PersonalGallery />
        </section>
        <section id="timeline">
          <PersonalTimeline />
        </section>
        <section id="connect">
          <ConnectSection />
        </section>
      </main>

      {/* Floating Footer (Professional Style) */}
      <AnimatePresence>
        {showFooter && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
          >
            <div className="flex justify-around items-center bg-black/50 backdrop-blur-md border-t border-white/10 p-3 text-white text-lg rounded-t-xl max-w-[460px] mx-auto">
              {/* Home Button */}
              <button
                onClick={goHome}
                className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/20 transition"
              >
                <FaHome />
                <span className="text-xs mt-1">Home</span>
              </button>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/20 transition"
              >
                <FaArrowUp />
                <span className="text-xs mt-1">Top</span>
              </button>

              {/* WhatsApp Button (green icon, same style) */}
              <a
                href="https://wa.me/919508721988?text=Hello%20Abhishek%2C%20I%20visited%20your%20AI%20Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 shadow-md hover:bg-white/20 transition"
              >
                <FaWhatsapp className="text-[#25D366]" />
                <span className="text-xs mt-1 text-white">Chat</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chatbot */}
      <PersonalAssistant />
    </div>
  );
};

export default Personal;
