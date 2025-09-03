import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarPersonal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", href: "hero" },
    { name: "Gallery", href: "gallery" },
    { name: "Creativity", href: "creativity" },
    { name: "Timeline", href: "timeline" },
    { name: "Connect", href: "connect" },
  ];

  // Auto-close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-6 sm:py-4 bg-black/40 backdrop-blur-md border-b border-white/20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo and Text */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-white/10 backdrop-blur-md shadow-[inset_0_2px_6px_rgba(255,255,255,0.3),0_2px_8px_rgba(0,0,0,0.3)] overflow-hidden">
            <img
              src="/images/vats29.jpeg"
              alt="Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-wide text-white">
            Portfolio
          </span>
        </ScrollLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 sm:space-x-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              className="hover:text-pink-300 transition cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 rounded-lg border-t border-white/10 bg-black/70 backdrop-blur-md shadow-lg text-white text-center py-4 space-y-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.href}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              className="block text-base px-4 py-2 hover:text-pink-300 transition cursor-pointer"
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
}
