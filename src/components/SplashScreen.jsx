import React, { useEffect } from 'react';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const audio = new Audio('/splash.mp3');
    audio.play().catch(() => {}); // silent autoplay fail

    const timer = setTimeout(() => {
      onFinish();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#0d1a2d] to-[#102e4a] text-white text-center overflow-hidden">
      {/* Logo */}
      <img
        src="/icon.png"
        alt="Logo"
        className="w-32 h-32 mb-6 rounded-full shadow-lg animate-pulse"
      />

      {/* Welcome Text */}
      <h1
        className="text-2xl sm:text-3xl font-extrabold text-white animate-splashText px-4"
        style={{
          textShadow: '0 0 15px rgba(255,255,255,0.5)',
        }}
      >
        WELCOME TO ABHISHEK PORTFOLIO APP
      </h1>
    </div>
  );
};

export default SplashScreen;
