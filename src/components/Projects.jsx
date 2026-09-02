<<<<<<< master
import React,{useRef} from "react";

const projects = [
  {
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "KV Store (C++ Key-Value Store)",
    description:
      "A Redis-like key-value store built in C++. Supports TTL-based key expiry, append-only file (AOF) persistence, and concurrent multi-client connections over TCP — implementing the same fundamental architecture that powers Redis.",
    tech: [
      "C++",
      "TCP Sockets",
      "Multithreading",
      "AOF Persistence",
      "TTL Expiry",
    ],
    image: "/images/KvStore.png",
    github: "https://github.com/Jain2975/Kvstore",
    tag: "Systems",
  },
  {
    title: "Thrift E-Commerce",
    description:
      "Engineered a full-stack second-hand marketplace with a strong focus on robust and secure programming practices. Developed role-specific dashboards for Buyers, Sellers, and Admins, integrating workflows for product listing approval, real-time chat, and a secure checkout experience. Enhanced security and database concurrency by implementing duplicate checks, Zip Slip protection, CSRF tokens, input validation, metadata removal, brute-force rate limiting, and row-level locks.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],
    image: "/images/ThriftECommerce.png",
    github: "https://github.com/Jain2975/Thrift",
    tag: "Full Stack",
  },
  {
    title: "FocusFlow",
    description:
      "Developed a RESTful API backend using Express.js and MongoDB, seamlessly integrating it with the frontend. Implemented features including a Pomodoro timer, meditation sessions, task management, and journaling to enhance user focus.",
    tech: ["Express.js", "MongoDB", "React", "Node.js", "Tailwind CSS"],
    image: "/images/FocusFlow.png",
    // live: "", // add deployed URL here
    tag: "Full Stack",
  },
  {
>>>>>>> local
    title: "Know Your Algorithms",
    description:
      "A website with a clean and simple UI to manage and revise algorithm notes. You can add, delete, and search algorithms easily. Saved algorithms are shown in a dropdown format displaying their details.",
    tech: "React, Express, CSS",
    video: "/videos/KnowYourAlgos.mp4",
    github: "https://github.com/Jain2975/KnowYourAlgos",
    live: "https://know-your-algos.vercel.app",
  },
  {
    title: "Book Notes",
    description:
      "A recommendation platform for high-quality books across genres like romance, adventure, and more. Users can also add their own recommendations. Data is stored in PostgreSQL.",
    tech: "EJS, Express, CSS, PostgreSQL",
    video: "/videos/BookNotes.mp4",
    github: "https://github.com/Jain2975/Book-Notes-Project",
  },
  {
    title: "Simon Game",
    description:
      "A fun, interactive Simon game built with JavaScript. Click the colored buttons in sequence as the pattern grows — test your memory and reflexes!",
    tech: "HTML, JavaScript, CSS",
    video: "/videos/SimonGame.mp4",
    github: "https://github.com/Jain2975/Simon-Game",
    live: "https://jain2975.github.io/Simon-Game",
  },
];

<<<<<<< master
export default function Projects() {
    const videoRef = useRef([]);
=======
const tagColors = {
  "Full Stack": {
    bg: "rgba(0,255,255,0.15)",
    text: "#00ffff",
    border: "rgba(0,255,255,0.3)",
  },
  Backend: {
    bg: "rgba(0,200,150,0.15)",
    text: "#00e0a0",
    border: "rgba(0,200,150,0.3)",
  },
  Frontend: {
    bg: "rgba(100,180,255,0.15)",
    text: "#80c8ff",
    border: "rgba(100,180,255,0.3)",
  },
  Systems: {
    bg: "rgba(255,170,0,0.15)",
    text: "#ffaa00",
    border: "rgba(255,170,0,0.3)",
  },
};

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ExpandIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

export default function Projects() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
>>>>>>> local

  const handleVideoClick = (index) => {
    const video = videoRef.current[index];
    if (video) {
      if (!document.fullscreenElement) {
        video.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }
  };
  return (
<<<<<<< master
    <div className="min-h-screen w-full bg-linear-to-br from-black via-[#050b11] to-[#001010] text-white px-8 md:px-16 py-16">
      {/* Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-12 tracking-wide drop-shadow-[0_0_10px_#00ffff]">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="flex flex-col gap-10">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between 
                       bg-linear-to-r from-[#0a192f]/80 to-[#001a1a]/70 
                       border border-cyan-500/30 rounded-2xl p-6 md:p-8 gap-6
                       backdrop-blur-md shadow-[0_0_25px_rgba(0,255,255,0.1)]
                       transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)]
                       animate-fade-in"
          >
            {/* Text Info */}
            <div className="flex-1 space-y-3">
              <h3 className="text-2xl font-semibold text-cyan-400 drop-shadow-[0_0_8px_#00ffff]">
                {proj.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{proj.description}</p>
              <p className="text-gray-400">
                <span className="font-semibold text-cyan-300">Tech:</span>{" "}
                {proj.tech}
              </p>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg
                               hover:bg-cyan-400 hover:text-black transition duration-300"
                  >
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg
                               hover:bg-gray-700 transition duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Video Preview */}
            {proj.video && (
              <video
                ref={el => (videoRef.current[index] = el)}
                src={proj.video}
                autoPlay
                loop
                muted
                playsInline
                onClick={() => handleVideoClick(index)}
                className="w-full md:w-[400px] rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(0,255,255,0.2)]
                           object-cover aspect-video transition-transform duration-500 hover:scale-[1.03]"
              />
            )}
          </div>
        ))}
      </div>
=======
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, #000000 0%, #050b11 50%, #001010 100%)",
        color: "white",
        padding: "80px 24px",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 16px",
          background: "rgba(0,0,0,0.55)",
          border: "1px solid rgba(34,211,238,0.35)",
          borderRadius: 10,
          color: "#22d3ee",
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
          backdropFilter: "blur(8px)",
          transition: "all 0.2s ease",
          letterSpacing: "0.04em",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(34,211,238,0.12)";
          e.currentTarget.style.borderColor = "rgba(34,211,238,0.7)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(0,0,0,0.55)";
          e.currentTarget.style.borderColor = "rgba(34,211,238,0.35)";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Home
      </button>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <p
          style={{
            fontSize: "12px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#00ffff",
            opacity: 0.7,
            marginBottom: "12px",
            fontWeight: 500,
          }}
        >
          Portfolio
        </p>
        <h2
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            margin: 0,
            background: "linear-gradient(135deg, #ffffff 0%, #00ffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-1px",
            lineHeight: 1.1,
          }}
        >
          Featured Projects
        </h2>
        <div
          style={{
            width: "48px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #00ffff, transparent)",
            margin: "20px auto 0",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Projects list */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        {projects.map((proj, index) => {
          const tc = tagColors[proj.tag] || tagColors["Full Stack"];
          return (
            <div
              key={proj.title}
              className="project-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 420px",
                gap: "0",
                background: "rgba(10, 25, 47, 0.6)",
                border:
                  hoveredIndex === index
                    ? "1px solid rgba(0, 255, 255, 0.4)"
                    : "1px solid rgba(0, 255, 255, 0.12)",
                borderRadius: "20px",
                overflow: "hidden",
                backdropFilter: "blur(12px)",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                boxShadow:
                  hoveredIndex === index
                    ? "0 0 40px rgba(0, 255, 255, 0.1), inset 0 0 40px rgba(0, 255, 255, 0.03)"
                    : "0 4px 24px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Left: Text */}
              <div
                style={{
                  padding: "40px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRight: "1px solid rgba(0, 255, 255, 0.08)",
                }}
              >
                <div>
                  {/* Tag + number */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: tc.text,
                        background: tc.bg,
                        padding: "4px 10px",
                        borderRadius: "20px",
                        border: `1px solid ${tc.border}`,
                      }}
                    >
                      {proj.tag}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "rgba(255,255,255,0.2)",
                        fontWeight: 500,
                        letterSpacing: "1px",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 26px)",
                      fontWeight: 700,
                      margin: "0 0 16px",
                      color: "#ffffff",
                      letterSpacing: "-0.3px",
                      lineHeight: 1.2,
                    }}
                  >
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "15px",
                      color: "rgba(200, 220, 230, 0.75)",
                      lineHeight: "1.7",
                      margin: "0 0 28px",
                    }}
                  >
                    {proj.description}
                  </p>

                  {/* Tech stack */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginBottom: "32px",
                    }}
                  >
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "12px",
                          fontWeight: 500,
                          color: "rgba(0, 220, 200, 0.85)",
                          background: "rgba(0, 255, 220, 0.07)",
                          border: "1px solid rgba(0, 200, 180, 0.2)",
                          padding: "4px 12px",
                          borderRadius: "6px",
                          letterSpacing: "0.3px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "12px" }}>
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "#00ffff",
                        background: "rgba(0, 255, 255, 0.07)",
                        border: "1px solid rgba(0, 255, 255, 0.25)",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        letterSpacing: "0.3px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(0,255,255,0.15)";
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,255,0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(0,255,255,0.07)";
                        e.currentTarget.style.borderColor =
                          "rgba(0,255,255,0.25)";
                      }}
                    >
                      <GitHubIcon /> GitHub
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.7)",
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        borderRadius: "10px",
                        textDecoration: "none",
                        transition: "all 0.2s ease",
                        letterSpacing: "0.3px",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.09)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.25)";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.12)";
                        e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                      }}
                    >
                      <ExternalIcon /> Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Right: Image */}
              <div
                className="project-image"
                style={{
                  position: "relative",
                  background: "#050d18",
                  overflow: "hidden",
                  cursor: "pointer",
                  minHeight: "240px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setSelectedImage(proj.image)}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s ease",
                    transform:
                      hoveredIndex === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                {/* Fallback */}
                <div
                  style={{
                    display: "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "24px",
                    textAlign: "center",
                    color: "#22d3ee",
                  }}
                >
                  <div style={{ fontSize: "36px", marginBottom: "8px" }}>
                    🖼️
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: 600 }}>
                    {proj.title}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "4px",
                    }}
                  >
                    Click to expand
                  </div>
                </div>
                {/* Overlay gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, rgba(10,25,47,0.5) 0%, transparent 30%)",
                    pointerEvents: "none",
                  }}
                />
                {/* Expand button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(proj.image);
                  }}
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(0,255,255,0.3)",
                    borderRadius: "8px",
                    color: "rgba(0,255,255,0.9)",
                    padding: "8px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(4px)",
                    transition: "all 0.2s ease",
                    opacity: hoveredIndex === index ? 1 : 0.7,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(0,255,255,0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "rgba(0,0,0,0.6)")
                  }
                >
                  <ExpandIcon />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,255,255,0.3)",
              boxShadow: "0 0 50px rgba(0,255,255,0.2)",
              background: "#050d1a",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                zIndex: 10,
                background: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(0,255,255,0.4)",
                color: "#00ffff",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                fontSize: "18px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &#x2715;
            </button>
            <img
              src={selectedImage}
              alt="Full preview"
              style={{
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          color: "rgba(255,255,255,0.18)",
          fontSize: "13px",
          letterSpacing: "1px",
        }}
      >
        More on{" "}
        <a
          href="https://github.com/Jain2975"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "rgba(0,255,255,0.5)", textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card { grid-template-columns: 1fr !important; }
          .project-image { height: 220px; border-right: none !important; border-top: 1px solid rgba(0,255,255,0.08); }
        }
      `}</style>
>>>>>>> local
    </div>
  );
}
