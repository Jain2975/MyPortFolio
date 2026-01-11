import React, { useState } from "react";

export default function OffTopic() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-[#050b11] to-[#001010] text-white px-8 md:px-16 py-16">
      {/* Section Title */}
      <h2 className="text-center text-4xl md:text-5xl font-bold text-cyan-400 mb-6 tracking-wide drop-shadow-[0_0_10px_#00ffff]">
        🎨 Beyond Code
      </h2>
      <p className="text-center text-gray-300 mb-12 text-lg">
        Here are a few things I enjoy when I'm not coding or debugging!
      </p>

      {/* Drawings Section */}
      <section className="mb-16">
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
          🖌️ My Drawings
        </h3>
        <p className="text-gray-400 mb-8">
          I love sketching to unwind and explore creativity.
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 
                     bg-[#0a192f]/50 p-6 rounded-2xl border border-cyan-500/20 
                     shadow-[0_0_25px_rgba(0,255,255,0.1)] backdrop-blur-md"
        >
          {[...Array(9)].map((_, i) => (
            <img
              key={i}
              src={`/art/sketch${i + 1}.jpg`}
              alt={`Sketch ${i + 1}`}
              onClick={() => openImage(`/art/sketch${i + 1}.jpg`)}
              className="rounded-lg object-cover w-full aspect-square cursor-pointer
                         transition-transform duration-500 hover:scale-105 
                         border border-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            />
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section>
        <h3 className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-4">
          📺 Favorite Shows
        </h3>
        <ul className="space-y-6 text-gray-300 leading-relaxed">
          <li className="p-4 bg-[#0a192f]/60 rounded-xl border border-cyan-500/20 shadow-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all">
            <strong className="text-cyan-400">One Piece</strong> – I will find
            my One Piece!! I like it the most as it has everything: action,
            adventure, storytelling, foreshadowing, and what not.
          </li>
          <li className="p-4 bg-[#0a192f]/60 rounded-xl border border-cyan-500/20 shadow-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all">
            <strong className="text-cyan-400">Death Note</strong> – Who
            outsmarts who? One of the oldest and also the best anime.
          </li>
          <li className="p-4 bg-[#0a192f]/60 rounded-xl border border-cyan-500/20 shadow-sm hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all">
            <strong className="text-cyan-400">JoJo’s Bizarre Adventure</strong> –
            It’s such a good anime. Really like the art style, story, and the
            memes from it. Everything Bizarre!!
          </li>
        </ul>
      </section>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-transform duration-300 scale-100 hover:scale-[1.02]"
          />
          <button
            onClick={closeImage}
            className="absolute top-6 right-8 text-cyan-300 text-3xl font-bold hover:text-white transition"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
