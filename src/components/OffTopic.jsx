import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SKETCH_COUNT = 9;
const sketches = Array.from({ length: SKETCH_COUNT }, (_, i) => ({
  src: `/art/sketch${i + 1}.jpg`,
  alt: `Sketch ${i + 1}`,
}));

/* ── Fan carousel for sketches ── */
function SketchFan() {
  const n = sketches.length;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const intervalRef = useRef(null);

  const advance = useCallback(() => setActive((p) => (p + 1) % n), [n]);

  useEffect(() => {
    if (!isPaused) intervalRef.current = setInterval(advance, 1800);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, advance]);

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  const getStyle = (i) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    const absD = Math.abs(d);
    const visible = absD <= 3;

    return {
      position: "absolute",
      width: 200,
      height: 240,
      transformOrigin: "50% 115%", // pivot below = natural fan
      transform: `translateX(${d * 80}px) translateY(${absD * 14}px) rotate(${d * 13}deg) scale(${1 - absD * 0.1})`,
      zIndex: 20 - absD,
      opacity: visible
        ? absD === 0
          ? 1
          : absD === 1
            ? 0.85
            : absD === 2
              ? 0.6
              : 0.35
        : 0,
      filter: absD > 1 ? `blur(${(absD - 1) * 1.2}px)` : "none",
      pointerEvents: visible ? "auto" : "none",
      cursor: absD === 0 ? "zoom-in" : "pointer",
      transition:
        "transform 0.5s cubic-bezier(0.34,1.36,0.64,1), opacity 0.4s ease, filter 0.4s ease",
    };
  };

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fan stage */}
      <div
        style={{
          position: "relative",
          height: 280,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {sketches.map((sk, i) => {
          let d = i - active;
          if (d > n / 2) d -= n;
          if (d < -n / 2) d += n;
          const absD = Math.abs(d);

          return (
            <div
              key={sk.src}
              style={getStyle(i)}
              onClick={() => (absD === 0 ? setLightbox(sk.src) : setActive(i))}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 14,
                  overflow: "hidden",
                  border:
                    absD === 0
                      ? "2px solid rgba(34,211,238,0.7)"
                      : "1.5px solid rgba(34,211,238,0.18)",
                  boxShadow:
                    absD === 0
                      ? "0 0 30px rgba(0,255,255,0.2), 0 16px 48px rgba(0,0,0,0.7)"
                      : "0 8px 24px rgba(0,0,0,0.5)",
                  background: "#050d18",
                }}
              >
                <img
                  src={sk.src}
                  alt={sk.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    pointerEvents: "none",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background =
                      "rgba(34,211,238,0.05)";
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Nav row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          marginTop: 24,
        }}
      >
        <button
          onClick={prev}
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.3)",
            color: "#22d3ee",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(34,211,238,0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(34,211,238,0.08)")
          }
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
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {sketches.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                borderRadius: 99,
                padding: 0,
                border: "none",
                cursor: "pointer",
                background: i === active ? "#22d3ee" : "rgba(34,211,238,0.22)",
                transition: "all 0.35s cubic-bezier(0.34,1.36,0.64,1)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "rgba(34,211,238,0.08)",
            border: "1px solid rgba(34,211,238,0.3)",
            color: "#22d3ee",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(34,211,238,0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(34,211,238,0.08)")
          }
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
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <p
        style={{
          textAlign: "center",
          fontSize: 10.5,
          color: "rgba(255,255,255,0.2)",
          marginTop: 8,
          letterSpacing: "0.07em",
        }}
      >
        {isPaused
          ? "paused"
          : "auto-rotating · click front card to expand · hover to pause"}
      </p>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            background: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(0,255,255,0.35)",
              boxShadow: "0 0 50px rgba(0,255,255,0.2)",
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                zIndex: 10,
                background: "rgba(0,0,0,0.7)",
                border: "1px solid rgba(0,255,255,0.4)",
                color: "#00ffff",
                width: 36,
                height: 36,
                borderRadius: "50%",
                fontSize: 18,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              &#x2715;
            </button>
            <img
              src={lightbox}
              alt="Full sketch"
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
    </div>
  );
}

/* ── Main OffTopic page ── */
export default function OffTopic() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(135deg, #000000 0%, #050b11 50%, #001010 100%)",
        color: "white",
        fontFamily: "'Inter','Segoe UI',sans-serif",
        padding: "72px 32px 48px",
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

      {/* Page title */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2
          style={{
            fontSize: "clamp(28px,4vw,48px)",
            fontWeight: 700,
            margin: "0 0 10px",
            background: "linear-gradient(135deg,#ffffff 0%,#00ffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.5px",
          }}
        >
          Beyond Code
        </h2>
        <p style={{ color: "rgba(200,220,230,0.65)", fontSize: 15, margin: 0 }}>
          Things I enjoy when I'm not coding or debugging
        </p>
        <div
          style={{
            width: 48,
            height: 3,
            background:
              "linear-gradient(90deg,transparent,#00ffff,transparent)",
            margin: "16px auto 0",
            borderRadius: 2,
          }}
        />
      </div>

      {/* ── Drawings section with fan carousel ── */}
      <section style={{ marginBottom: 64 }}>
        <h3
          style={{
            fontSize: "clamp(18px,2.5vw,26px)",
            fontWeight: 700,
            color: "#22d3ee",
            marginBottom: 6,
            textAlign: "center",
            letterSpacing: "-0.2px",
          }}
        >
          My Drawings
        </h3>
        <p
          style={{
            color: "rgba(180,210,230,0.55)",
            fontSize: 13,
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          I love sketching to unwind and explore creativity
        </p>
        <SketchFan />
      </section>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto 56px",
          height: 1,
          background:
            "linear-gradient(90deg,transparent,rgba(34,211,238,0.2),transparent)",
        }}
      />

      {/* ── Favorite Shows ── */}
      <section style={{ maxWidth: 700, margin: "0 auto" }}>
        <h3
          style={{
            fontSize: "clamp(18px,2.5vw,26px)",
            fontWeight: 700,
            color: "#22d3ee",
            marginBottom: 6,
            textAlign: "center",
            letterSpacing: "-0.2px",
          }}
        >
          Favorite Shows
        </h3>
        <p
          style={{
            color: "rgba(180,210,230,0.55)",
            fontSize: 13,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          My anime watchlist — sorted by obsession level
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              title: "One Piece",
              desc: "I will find my One Piece!! I like it the most as it has everything: action, adventure, storytelling, foreshadowing, and what not.",
            },
            {
              title: "Death Note",
              desc: "Who outsmarts who? One of the oldest and also the best anime.",
            },
            {
              title: "JoJo's Bizarre Adventure",
              desc: "It's such a good anime. Really like the art style, story, and the memes from it. Everything Bizarre!!",
            },
          ].map((show, i) => (
            <div
              key={show.title}
              style={{
                padding: "16px 20px",
                background: "rgba(10,25,47,0.6)",
                border: "1px solid rgba(34,211,238,0.14)",
                borderRadius: 14,
                backdropFilter: "blur(8px)",
                transition: "border-color 0.25s, box-shadow 0.25s",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.4)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(34,211,238,0.14)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>
                {i === 0 ? "🏴‍☠️" : i === 1 ? "📓" : "👁️"}
              </span>
              <div>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontWeight: 700,
                    color: "#22d3ee",
                    fontSize: 15,
                  }}
                >
                  {show.title}
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(190,215,230,0.72)",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                  }}
                >
                  {show.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
