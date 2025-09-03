import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import ChatbotLauncher from "../components/professionalchatbot/ChatbotLauncher";
import { FaHome, FaArrowUp, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Professional() {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowFooter(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gradient-to-b from-[#0d1a2d] to-[#102e4a] text-white min-h-screen relative">
      {/* Sections */}
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="Timeline"><Timeline /></section>
      <section id="Contact"><Contact /></section>

      {/* Chatbot */}
      <ChatbotLauncher />

      {/* Footer Navigation Bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showFooter ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex justify-around items-center bg-black/50 backdrop-blur-md border-t border-white/10 p-3 text-white text-lg rounded-t-xl">
          {/* Home Button */}
          <button
            onClick={() => navigate('/')}
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

          {/* WhatsApp Button */}
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
      </div>
    </div>
  );
}
