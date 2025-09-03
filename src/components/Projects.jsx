import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Lightweight Feedback System',
    description:
      '📝 A web app built with React (frontend) and Flask + SQLite (backend), allowing feedback exchange, sentiment analysis & export.',
    image: '/images/project1-lfs.png',
    liveLink: 'https://lightweight-feedback-system-1.netlify.app/',
  },
  {
    id: 2,
    title: 'Candy Crush Game',
    description:
      '🎮 Candy Crush–style game using React and Tailwind CSS with smooth drag-drop & responsive design.',
    image: '/images/project2-candy.png',
    liveLink: 'https://vats-game.netlify.app/',
  },
  {
    id: 3,
    title: 'Fitness Booking API',
    description:
      '🔄 FastAPI + SQLite backend for booking fitness classes with validation & time zone support.',
    image: '/images/project4-api.png',
    liveLink: 'https://fitness-booking-api.onrender.com/docs',
  },
  {
    id: 4,
    title: 'Online Quiz Platform',
    description:
      '🧠 Timed quizzes with instant scoring & dynamic leaderboard. Built for real-time interaction.',
    image: '/images/project3-quiz.png',
    liveLink: 'https://vats-quiz-app.netlify.app/',
  },
  {
    id: 5,
    title: 'Tic-Tac-Toe Game',
    description:
      '❌⭕ Classic two-player game with win detection & restart. Lightweight & mobile-friendly.',
    image: '/images/project5-ttt.png',
    liveLink: 'https://vats-game1.netlify.app/',
  },
  {
    id: 6,
    title: 'MCP File Manager',
    description:
      '📝 Full stack file manager with React + Flask. Upload, edit, view, and delete files via UI.',
    image: '/images/project6-file.png',
    liveLink: 'https://github.com/abhishekvats29/MCP-file-manager.git',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 min-h-screen bg-gradient-to-b from-[#0d1a2d] to-[#102e4a] text-white"
      style={{ backgroundColor: '#0d1a2d' }} // fallback for Android rendering issues
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12 sm:mb-16">
          Projects
        </h2>

        {/* Responsive Grid Layout for Mobile & Tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col sm:flex-row items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-5 sm:p-6 gap-5 transition hover:shadow-white/30"
            >
              {/* Image */}
              <div className="w-full sm:w-1/2 flex justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 sm:h-52 object-contain"
                />
              </div>

              {/* Text */}
              <div className="w-full sm:w-1/2 text-white space-y-3 text-center sm:text-left">
                <h3 className="text-xl font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm">{project.description}</p>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 border border-white text-white text-sm rounded hover:bg-white hover:text-black transition"
                >
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
