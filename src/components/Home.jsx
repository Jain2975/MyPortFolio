import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode,SiCodeforces } from "react-icons/si";
export default function Home() {
  const navigate = useNavigate();
  const [launch, setLaunch] = useState(false);

  const handleLaunch = () => {
    setLaunch(true);
    setTimeout(() => navigate("/projects"), 1500);
  };

  const ResumeLaunch = () => {
    setLaunch(true);
    window.open("/Aarush Resume.pdf", "_blank");
  };

  const OffTopicLaunch = () => {
    setLaunch(true);
    setTimeout(() => navigate("/offtopic"), 1500);
  };

  const frontendTechs = [
    "React", "Tailwind", "JavaScript", "Bootstrap", "Material UI", "HTML", "CSS", "EJS",
  ];

  const backendTechs = [
    "Node.js", "Express", "PostgreSQL", "MongoDB", "Neo4j", "Firebase", "Motoko",
  ];

  const otherTechs = [
    "Solidity", "Python", "C++", "Java", "Git", "Docker", "MDA",
  ];

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col md:flex-row">

      {/* ---------------- LEFT PANEL ---------------- */}
      <div className="md:w-1/3 flex flex-col justify-between border-r border-gray-800 px-6 py-8">

        {/* --- Top: Circle + Name --- */}
        <div className="flex flex-col items-center">
          <div className="mt-20 circle-path w-60 h-60 rounded-full border-4 border-cyan-500 flex items-center justify-center text-cyan-300 text-3xl font-bold hover:scale-105 transition-transform duration-300">
            Aarush Jain
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-cyan-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={24} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            <a href="https://leetcode.com/u/aaruzora" target="_blank" rel="noreferrer"><SiLeetcode size={24} /></a>
            <a href="https://codeforces.com/profile/aaruzora" target="_blank" rel="noreferrer"><SiCodeforces size={24} /></a>
            <a href="mailto:aarushjain.mvn@gmail.com"><Mail size={24} /></a>
          </div>
        </div>

        {/* --- Bottom: Tech Stack --- */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-wide text-cyan-400 mb-4 text-center">Tech Stack</h2>

          <div className="flex flex-col gap-3 overflow-hidden">
            {/* Frontend */}
            <div className="overflow-hidden relative">
              <div className="animate-marquee-left flex gap-8 whitespace-nowrap text-cyan-300 font-semibold uppercase text-lg">
                {frontendTechs.concat(frontendTechs).map((tech, i) => (
                  <span key={`front-${i}`} className="px-2">{tech}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="overflow-hidden relative opacity-90">
              <div className="animate-marquee-right flex gap-8 whitespace-nowrap text-cyan-400 font-semibold uppercase text-lg">
                {backendTechs.concat(backendTechs).map((tech, i) => (
                  <span key={`back-${i}`} className="px-2">{tech}</span>
                ))}
              </div>
            </div>

            {/* Other Tools / Languages */}
            <div className="overflow-hidden relative opacity-90">
              <div className="animate-marquee-left flex gap-8 whitespace-nowrap text-cyan-500 font-semibold uppercase text-lg">
                {otherTechs.concat(otherTechs).map((tech, i) => (
                  <span key={`other-${i}`} className="px-2">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- RIGHT PANEL ---------------- */}
      <div className="md:w-2/3 px-12 py-10 overflow-y-auto backdrop-blur-sm border-l border-cyan-500/30 shadow-[0_0_20px_2px_rgba(0,255,255,0.2)] rounded-l-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hey there, I’m <span className="text-cyan-400">Aarush Jain</span>
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          A passionate developer who loves solving problems and building things.
          I enjoy making web applications and exploring creative ideas.
          Currently focusing more on Data Structures & Algorithms, Coding Contest and Web3 development.
        </p>

        <div className="mt-6 space-y-3 text-gray-400">
          <p><strong className="text-cyan-300">Current focus:</strong> Web3 (Blockchain), building DApps and DSA.</p>
          <p><strong className="text-cyan-300">Interests:</strong> Table Tennis, Badminton, Piano, Drawing.</p>
          <p><strong className="text-cyan-300">Competitive:</strong> Codeforces — Newbie (Rating: 927).</p>
          <p><strong className="text-cyan-300">Open to:</strong> Internships, collaborations, and hackathons.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={handleLaunch} className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
            Projects
          </button>
          <button onClick={OffTopicLaunch} className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
            Off Topic
          </button>
          <button onClick={ResumeLaunch} className="px-6 py-3 bg-gray-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
}
