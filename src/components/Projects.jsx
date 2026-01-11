import React,{useRef} from "react";

const projects = [
  {
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

export default function Projects() {
    const videoRef = useRef([]);

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
    </div>
  );
}
