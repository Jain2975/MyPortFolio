import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiApachekafka as SiKafka,
  SiGrafana,
  SiSolidity,
  SiPython,
  SiCplusplus,
  SiGit,
  SiDocker,
} from "react-icons/si";

/* ─ Omnitrix Avatar: rises edge-on from below, then slow 3-D spin ─ */
function OmnitrixAvatar({ src }) {
  const cardRef = useRef(null);

  const pause = () => {
    if (cardRef.current)
      cardRef.current.style.animationPlayState = "paused, paused";
  };
  const resume = () => {
    if (cardRef.current)
      cardRef.current.style.animationPlayState = "running, running";
  };

  const RISE = "rise-and-spin 1.8s cubic-bezier(0.22,1,0.36,1) forwards";
  const CARD_SPIN = "slow-spin 6s ease-in-out 1.8s infinite";
  const RING1_SPIN = "ring-cw 8s linear 1.8s infinite";
  const RING2_SPIN = "ring-ccw 12s linear 1.8s infinite";

  return (
    <>
      <style>{`
        @keyframes rise-and-spin {
          0%   { transform: rotateX(90deg) translateY(40px); opacity: 0.2; }
          100% { transform: rotateX(0deg)  translateY(0px);  opacity: 1;   }
        }
        @keyframes slow-spin {
          0%   { transform: rotateX(0deg)   rotateY(0deg);   }
          20%  { transform: rotateX(-12deg) rotateY(72deg);  }
          40%  { transform: rotateX(8deg)   rotateY(144deg); }
          60%  { transform: rotateX(-6deg)  rotateY(216deg); }
          80%  { transform: rotateX(10deg)  rotateY(288deg); }
          100% { transform: rotateX(0deg)   rotateY(360deg); }
        }
        @keyframes ring-cw  { to { transform: rotate(360deg);  } }
        @keyframes ring-ccw { to { transform: rotate(-360deg); } }
        @keyframes scan-move {
          0%   { transform: translate(-50%, -65px); opacity: 1; }
          100% { transform: translate(-50%,  65px); opacity: 0; }
        }
        @keyframes glow-pulse {
          0%, 100% { text-shadow: 0 0 10px #22d3ee; }
          50%       { text-shadow: 0 0 35px #22d3ee, 0 0 70px #22d3ee; }
        }
        @keyframes shadow-in {
          0%   { transform: scaleX(0.1); opacity: 0; }
          100% { transform: scaleX(1);   opacity: 1; }
        }
        @keyframes fade-up {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0);   }
        }
        @keyframes bar-fill {
          from { width: 0%; }
        }
        @keyframes pill-in {
          0%   { opacity: 0; transform: scale(0.85); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div
        style={{
          perspective: 700,
          perspectiveOrigin: "50% 60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div style={{ position: "relative", width: 220, height: 220 }}>
          {/* Ring 1 */}
          <svg
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              animation: `${RISE}, ${RING1_SPIN}`,
              pointerEvents: "none",
            }}
          >
            <circle
              cx="110"
              cy="110"
              r="105"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="5 9"
              opacity="0.6"
            />
            {[
              [110, 5],
              [215, 110],
              [110, 215],
              [5, 110],
            ].map(([cx, cy], i) => (
              <polygon
                key={i}
                points="0,-8 6,4 -6,4"
                fill="#22d3ee"
                transform={`translate(${cx},${cy}) rotate(${i * 90})`}
              />
            ))}
            {[
              [186, 34],
              [186, 186],
              [34, 186],
              [34, 34],
            ].map(([cx, cy], i) => (
              <polygon
                key={`d${i}`}
                points="0,-7 5,3 -5,3"
                fill="#22d3ee"
                opacity="0.45"
                transform={`translate(${cx},${cy}) rotate(${45 + i * 90})`}
              />
            ))}
          </svg>

          {/* Ring 2 */}
          <svg
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              animation: `${RISE}, ${RING2_SPIN}`,
              pointerEvents: "none",
            }}
          >
            <circle
              cx="110"
              cy="110"
              r="89"
              fill="none"
              stroke="#0e7490"
              strokeWidth="1.2"
              strokeDasharray="2 10"
              opacity="0.5"
            />
            {[
              { cx: 110, cy: 21 },
              { cx: 199, cy: 110 },
              { cx: 110, cy: 199 },
              { cx: 21, cy: 110 },
            ].map((p, i) => (
              <circle
                key={i}
                cx={p.cx}
                cy={p.cy}
                r="4"
                fill="#22d3ee"
                opacity="0.9"
              />
            ))}
          </svg>

          {/* Scan line */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 145,
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #22d3ee, transparent)",
              animation: "scan-move 2.4s ease-in-out 1.8s infinite",
              pointerEvents: "none",
            }}
          />

          {/* Card */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 145,
              height: 145,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              ref={cardRef}
              style={{
                width: "100%",
                height: "100%",
                transformStyle: "preserve-3d",
                borderRadius: "50%",
                animation: `${RISE}, ${CARD_SPIN}`,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backfaceVisibility: "hidden",
                  border: "2.5px solid #22d3ee",
                  boxShadow:
                    "0 0 22px rgba(34,211,238,0.5), inset 0 0 16px rgba(34,211,238,0.12)",
                  overflow: "hidden",
                }}
              >
                <img
                  src={src || "/AJ.jpeg"}
                  alt="Aarush Jain"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background:
                    "radial-gradient(circle, #042f2e 0%, #0c4a6e 100%)",
                  border: "2.5px solid #22d3ee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 42,
                  color: "#22d3ee",
                  animation: "glow-pulse 1.4s ease-in-out infinite",
                }}
              >
                ⬡
              </div>
            </div>
          </div>
        </div>

        {/* Ground glow */}
        <div
          style={{
            width: 110,
            height: 12,
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(34,211,238,0.3) 0%, transparent 70%)",
            marginTop: 6,
            animation: "shadow-in 0.6s ease 1.6s both",
          }}
        />
      </div>
    </>
  );
}

/* ─ Skill bar ─ */
function SkillBar({ label, pct, delay }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "#67e8f9",
          marginBottom: 4,
          letterSpacing: "0.05em",
        }}
      >
        <span>{label}</span>
        <span>{pct}%</span>
      </div>
      <div
        style={{
          height: 4,
          borderRadius: 99,
          background: "rgba(34,211,238,0.12)",
          border: "1px solid rgba(34,211,238,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 99,
            background: "linear-gradient(90deg,#0e7490,#22d3ee)",
            width: `${pct}%`,
            animation: `bar-fill 1s ease ${delay}s both`,
          }}
        />
      </div>
    </div>
  );
}

/* ─ Tag pill ─ */
function Pill({ children, delay }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 99,
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        background: "rgba(34,211,238,0.08)",
        border: "1px solid rgba(34,211,238,0.3)",
        color: "#67e8f9",
        animation: `pill-in 0.4s ease ${delay}s both`,
      }}
    >
      {children}
    </span>
  );
}

/* ─ Section card ─ */
function InfoCard({ icon, title, children }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(34,211,238,0.15)",
        borderRadius: 12,
        padding: "14px 18px",
        marginBottom: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#22d3ee",
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}

/* ─ Main Home component ─ */
export default function Home() {
  const navigate = useNavigate();
  const handleLaunch = () => navigate("/projects");
  const ResumeLaunch = () => window.open("/resume.pdf", "_blank");
  const OffTopicLaunch = () => navigate("/offtopic");

  const profileImageSrc = "/AJ.jpeg";

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col md:flex-row">
      {/*  LEFT PANEL  */}
      <div className="md:w-1/3 flex flex-col justify-between border-r border-gray-800 px-6 py-8">
        <div className="flex flex-col items-center mt-10 gap-4">
          <OmnitrixAvatar src={profileImageSrc} />

          <p
            style={{
              fontFamily: "'Orbitron', monospace",
              fontSize: 11,
              letterSpacing: "0.28em",
              color: "#22d3ee",
              textTransform: "uppercase",
              animation: "fade-up 0.6s ease 1.9s both",
            }}
          >
            Aarush Jain
          </p>

          <div
            className="flex gap-4 text-cyan-400"
            style={{ animation: "fade-up 0.6s ease 2.1s both" }}
          >
            <a
              href="https://github.com/Jain2975"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/aarush-jain-171083286"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={22} />
            </a>
            <a href="mailto:aarushjain.mvn@gmail.com">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div
          className="mt-8"
          style={{ display: "flex", flexWrap: "wrap", gap: 6 }}
        >
          <h2
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#22d3ee",
              textTransform: "uppercase",
              marginBottom: 12,
              textAlign: "center",
              flexBasis: "100%",
            }}
          >
            Tech Stack
          </h2>

          {/* Frontend */}
          <div style={{ display: "contents" }}>
            <div style={{ display: "contents" }}>
              {[
                { icon: SiReact, label: "React", color: "#61dafb" },
                { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
                { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
                { icon: SiTailwindcss, label: "Tailwind", color: "#38bdf8" },
                { icon: SiHtml5, label: "HTML5", color: "#e34f26" },
                { icon: SiCss3, label: "CSS3", color: "#264de4" },
                { icon: SiBootstrap, label: "Bootstrap", color: "#7952b3" },
              ].map((item) => {
                const TechIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "4px 9px",
                      borderRadius: 8,
                      background: "rgba(34,211,238,0.05)",
                      border: "1px solid rgba(34,211,238,0.18)",
                      fontSize: 11,
                      color: "#cbd5e1",
                      fontWeight: 500,
                      transition: "border-color 0.2s",
                    }}
                  >
                    <TechIcon
                      style={{ color: item.color, fontSize: 14, flexShrink: 0 }}
                    />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend */}
          <div style={{ display: "contents" }}>
            <div style={{ display: "contents" }}>
              {[
                { icon: SiNodedotjs, label: "Node.js", color: "#68a063" },
                { icon: SiExpress, label: "Express", color: "#ffffff" },
                { icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
                { icon: SiMongodb, label: "MongoDB", color: "#47a248" },
                { icon: SiFirebase, label: "Firebase", color: "#ffca28" },
                { icon: SiKafka, label: "Kafka", color: "#231f20" },
              ].map((item) => {
                const TechIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "4px 9px",
                      borderRadius: 8,
                      background: "rgba(34,211,238,0.05)",
                      border: "1px solid rgba(34,211,238,0.18)",
                      fontSize: 11,
                      color: "#cbd5e1",
                      fontWeight: 500,
                    }}
                  >
                    <TechIcon
                      style={{ color: item.color, fontSize: 14, flexShrink: 0 }}
                    />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & Languages */}
          <div style={{ display: "contents" }}>
            <div style={{ display: "contents" }}>
              {[
                { icon: SiCplusplus, label: "C++", color: "#00599c" },
                { icon: SiPython, label: "Python", color: "#3572A5" },
                { icon: SiSolidity, label: "Solidity", color: "#6b7280" },
                { icon: SiGit, label: "Git", color: "#f05032" },
                { icon: SiDocker, label: "Docker", color: "#0db7ed" },
                { icon: SiGrafana, label: "Grafana", color: "#f46800" },
              ].map((item) => {
                const TechIcon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "4px 9px",
                      borderRadius: 8,
                      background: "rgba(34,211,238,0.05)",
                      border: "1px solid rgba(34,211,238,0.18)",
                      fontSize: 11,
                      color: "#cbd5e1",
                      fontWeight: 500,
                    }}
                  >
                    <TechIcon
                      style={{ color: item.color, fontSize: 14, flexShrink: 0 }}
                    />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="md:w-2/3 px-10 py-8 overflow-y-auto backdrop-blur-sm border-l border-cyan-500/30 shadow-[0_0_20px_2px_rgba(0,255,255,0.2)] rounded-l-3xl">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Hey, I'm <span className="text-cyan-400">Aarush Jain</span>
        </h1>
        <p
          className="text-gray-400 text-sm tracking-widest uppercase mb-6"
          style={{ fontFamily: "'Orbitron', monospace", fontSize: 10 }}
        >
          Developer · Builder · Learner
        </p>

        <p className="text-gray-300 text-base leading-relaxed mb-6">
          I love solving hard problems and building scalable systems — from
          low-latency market data pipelines to full-stack web apps and Smart
          Contracts.
        </p>

        {/* Internship Experience Section */}
        <InfoCard icon="💼" title="Internship Experience">
          <div className="space-y-6 my-2">
            {/* Experience 1 */}
            <div className="relative pl-5 border-l-2 border-cyan-500/40 hover:border-cyan-400 transition-colors">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  SDE Intern
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  May 2026 – Jul 2026
                </span>
              </div>
              <div className="text-sm font-medium text-cyan-400 mb-2">
                63 moons Technologies Limited{" "}
                <span className="text-gray-400 text-xs font-normal">
                  · On-site (Mumbai, Maharashtra)
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-gray-300 leading-relaxed mb-3">
                <li>
                  Engineered real-time market data feeders for 4 major exchanges
                  and designed a shared framework to integrate 2 additional
                  exchanges, enabling a modular, reliable and low-latency data
                  collection pipeline across 6 exchanges.
                </li>
                <li>
                  Optimized performance to sustain{" "}
                  <strong>150K+ data frames/min</strong> throughput at p50
                  &lt;1ms and p99 &lt;10ms latency.
                </li>
                <li>
                  Developed a configurable Resource Manager for dynamic hardware
                  resource allocation.
                </li>
                <li>
                  Designed a Kafka to Database consumer, cutting new topic
                  integration down to a single config change.
                </li>
                <li>
                  Built Grafana dashboards for real-time monitoring of system
                  health, throughput, and hardware resource utilization.
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["C++", "Kafka", "Docker", "Prometheus", "Grafana"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-5 border-l-2 border-cyan-500/40 hover:border-cyan-400 transition-colors">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-cyan-400/60 shadow-[0_0_6px_#22d3ee]" />
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  Software Engineering Intern
                </h3>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  Nov 2025 – Dec 2025
                </span>
              </div>
              <div className="text-sm font-medium text-cyan-400 mb-2">
                63 moons Technologies Limited{" "}
                <span className="text-gray-400 text-xs font-normal">
                  · On-site (Mumbai, Maharashtra)
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-gray-300 leading-relaxed mb-3">
                <li>
                  Developed Python scripts automating retrieval and ingestion of{" "}
                  <strong>50+ GB</strong> historical trade data of different
                  exchanges.
                </li>
                <li>
                  Designed real-time Grafana dashboards to monitor system and
                  20+ database metrics for early problem detection.
                </li>
                <li>
                  Co-developed a real-time C++ market data feeder handling
                  thousands of concurrent trades per second.
                </li>
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Python", "C++", "Grafana", "SQL"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-medium px-2 py-0.5 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </InfoCard>

        {/* Stats row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 10,
            marginBottom: 14,
          }}
        >
          {/* Interests + open-to */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridColumn: "span 2",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <InfoCard title="Interests">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Table Tennis", "Badminton", "Piano", "Drawing"].map(
                  (x, i) => (
                    <Pill key={x} delay={0.1 * i}>
                      {x}
                    </Pill>
                  ),
                )}
              </div>
            </InfoCard>
            <InfoCard title="Open To">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {[
                  "Internships",
                  "Collaborations",
                  "Hackathons",
                  "Research",
                ].map((x, i) => (
                  <Pill key={x} delay={0.1 * i}>
                    {x}
                  </Pill>
                ))}
              </div>
            </InfoCard>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleLaunch}
              className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition"
            >
              Projects
            </button>
            <button
              onClick={OffTopicLaunch}
              className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition"
            >
              Off Topic
            </button>
            <button
              onClick={ResumeLaunch}
              className="px-6 py-3 bg-gray-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition"
            >
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
