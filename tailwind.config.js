/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyStart: "#0d1a2d",
        navyEnd: "#102e4a",
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        cinematic: {
          '0%': { opacity: 0, transform: 'scale(0.8) rotateX(90deg)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05) rotateX(0deg)' },
          '100%': { opacity: 1, transform: 'scale(1) rotateX(0deg)' },
        },
        flashSweep: {
          '0%': { opacity: 0, transform: 'translateX(-100%) scale(0.8)' },
          '50%': { opacity: 1, transform: 'translateX(0) scale(1.05)' },
          '100%': { opacity: 1, transform: 'translateX(100%) scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out forwards',
        cinematic: 'cinematic 2.5s ease-out forwards',
        flashSweep: 'flashSweep 3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
