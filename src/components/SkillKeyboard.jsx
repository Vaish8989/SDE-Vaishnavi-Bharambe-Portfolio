import React, { useEffect, useRef, useState, useCallback } from "react";

const PURPLE = "#915EFF";

const SKILLS_LIST = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", category: "Frontend", desc: "The backbone of every web page.\nStructures content semantically for the browser." },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", category: "Frontend", desc: "Styles, animations and responsive layouts.\nMakes websites beautiful across all screens." },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Frontend", desc: "The language of the web.\nAdds interactivity and dynamic behaviour." },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend", desc: "Component-based UI library by Meta.\nBuilds fast, reusable user interfaces." },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "Frontend", desc: "Utility-first CSS framework.\nRapid styling without leaving HTML." },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend", desc: "Robust, object-oriented language.\nPlatform-independent and widely used in enterprise." },
  { name: "Java Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", category: "Backend", desc: "Powerful Java microservices framework.\nBuilds production-ready REST APIs with ease." },
  { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hibernate/hibernate-original.svg", category: "Backend", desc: "ORM framework for Java.\nMaps Java objects directly to database tables." },
  { name: "JSP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend", desc: "JavaServer Pages for dynamic web content.\nCombines Java logic with HTML templates." },
  { name: "Servlets", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend", desc: "Java server-side programs.\nHandle HTTP requests and build web apps." },
  { name: "JDBC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Backend", desc: "Java Database Connectivity API.\nEnables Java apps to interact with databases." },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database", desc: "Popular open-source relational database.\nPerfect for structured data and complex queries." },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "Database", desc: "Advanced open-source relational database.\nSupports complex queries and large-scale data." },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "Tools", desc: "Distributed version control system.\nTracks code history and enables team collaboration." },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "Tools", desc: "Cloud hosting for Git repositories.\nCollaborate, review, and deploy from one place." },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", category: "Cloud", desc: "Amazon Web Services cloud platform.\nDeploy, scale and manage apps in the cloud." },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud", desc: "Microsoft Azure cloud computing platform.\nEnterprise-grade cloud services and DevOps tools." },
];

const total = SKILLS_LIST.length;

// Exact slot config like the reference — cards fan out diagonally in 3D
function getSlotConfig(offset) {
  const map = {
    "-4": { tx: -800, tz: -300, ry: 50,  scale: 0.42, opacity: 0.12, zIndex: 1,  diagY: 72 },
    "-3": { tx: -590, tz: -240, ry: 38,  scale: 0.54, opacity: 0.28, zIndex: 2,  diagY: 54 },
    "-2": { tx: -390, tz: -150, ry: 26,  scale: 0.67, opacity: 0.52, zIndex: 3,  diagY: 36 },
    "-1": { tx: -210, tz: -55,  ry: 15,  scale: 0.82, opacity: 0.78, zIndex: 4,  diagY: 18 },
     "0": { tx:    0, tz:   0,  ry:  0,  scale: 1.00, opacity: 1.00, zIndex: 10, diagY:  0 },
     "1": { tx:  210, tz: -55,  ry: -15, scale: 0.82, opacity: 0.78, zIndex: 4,  diagY: 18 },
     "2": { tx:  390, tz: -150, ry: -26, scale: 0.67, opacity: 0.52, zIndex: 3,  diagY: 36 },
     "3": { tx:  590, tz: -240, ry: -38, scale: 0.54, opacity: 0.28, zIndex: 2,  diagY: 54 },
     "4": { tx:  800, tz: -300, ry: -50, scale: 0.42, opacity: 0.12, zIndex: 1,  diagY: 72 },
  };
  const abs = Math.abs(offset);
  if (abs > 4) return { tx: offset > 0 ? 1100 : -1100, tz: -400, ry: offset > 0 ? -65 : 65, scale: 0.3, opacity: 0, zIndex: 0, diagY: 100 };
  return map[String(offset)];
}

// ── Single phone-frame skill card ──────────────────────────────────────────────
function SkillCard({ skill, slotOffset, isActive, onClick }) {
  const cfg = getSlotConfig(slotOffset);
  const isHidden = Math.abs(slotOffset) > 4;
  const descLines = skill.desc.split("\n");

  const transform = `translateX(${cfg.tx}px) translateZ(${cfg.tz}px) rotateY(${cfg.ry}deg) scale(${cfg.scale}) translateY(${cfg.diagY}px)`;

  return (
    <div
      onClick={() => !isActive && !isHidden && onClick(slotOffset)}
      style={{
        position:   "absolute",
        bottom:     "30px",
        display:    "flex",
        flexDirection: "column",
        alignItems: "center",
        transform,
        opacity:    isHidden ? 0 : cfg.opacity,
        zIndex:     cfg.zIndex,
        transition: "transform 0.7s cubic-bezier(0.23,1,0.32,1), opacity 0.7s ease",
        cursor:     isActive ? "default" : "pointer",
        pointerEvents: isHidden ? "none" : "auto",
      }}
    >
      {/* Phone frame */}
      <div style={{
        width:        "240px",
        height:       "500px",
        background:   "linear-gradient(160deg, rgba(38,22,68,0.97) 0%, rgba(16,8,32,0.97) 100%)",
        borderRadius: "38px",
        border:       isActive
          ? `2.5px solid rgba(145,94,255,0.80)`
          : `2px solid rgba(145,94,255,0.14)`,
        overflow:     "hidden",
        position:     "relative",
        boxShadow:    isActive
          ? `0 0 0 1px rgba(145,94,255,0.18) inset, 0 0 55px rgba(145,94,255,0.30), 0 28px 64px rgba(0,0,0,0.88)`
          : `0 0 18px rgba(145,94,255,0.07), 0 16px 40px rgba(0,0,0,0.72)`,
        display:      "flex",
        flexDirection: "column",
        alignItems:   "center",
        justifyContent: "center",
        padding:      "52px 26px 36px",
        gap:          "14px",
        boxSizing:    "border-box",
      }}>
        {/* Notch */}
        <div style={{
          position:     "absolute",
          top:          "14px",
          left:         "50%",
          transform:    "translateX(-50%)",
          width:        "58px",
          height:       "13px",
          background:   "rgba(0,0,0,0.85)",
          borderRadius: "8px",
          zIndex:       10,
        }} />

        {/* Top glow line — active only */}
        {isActive && (
          <div style={{
            position:     "absolute",
            top:          0,
            left:         "12%",
            right:        "12%",
            height:       "2px",
            borderRadius: "100%",
            background:   `linear-gradient(to right, transparent, ${PURPLE}, transparent)`,
            boxShadow:    `0 0 16px ${PURPLE}`,
          }} />
        )}

        {/* Category badge */}
        <div style={{
          position:      "absolute",
          top:           "38px",
          right:         "18px",
          fontSize:      "0.56rem",
          fontWeight:    700,
          color:         PURPLE,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          background:    "rgba(145,94,255,0.11)",
          border:        "1px solid rgba(145,94,255,0.28)",
          borderRadius:  "20px",
          padding:       "2px 8px",
          opacity:       isActive ? 1 : 0.55,
          transition:    "opacity 0.4s",
        }}>
          {skill.category}
        </div>

        {/* Logo box */}
        <div style={{
          width:          "78px",
          height:         "78px",
          borderRadius:   "20px",
          background:     "rgba(255,255,255,0.04)",
          border:         "1px solid rgba(255,255,255,0.07)",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "14px",
          boxShadow:      isActive ? `0 0 26px rgba(145,94,255,0.32)` : "none",
          transition:     "box-shadow 0.4s",
          flexShrink:     0,
        }}>
          <img
            src={skill.icon}
            alt={skill.name}
            style={{
              width:      "50px",
              height:     "50px",
              objectFit:  "contain",
              filter:     isActive
                ? "brightness(1.2) drop-shadow(0 0 8px rgba(145,94,255,0.65))"
                : "brightness(0.72)",
              transition: "filter 0.4s",
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>

        {/* Skill name */}
        <h3 style={{
          margin:        0,
          fontSize:      "1.05rem",
          fontWeight:    700,
          color:         isActive ? "#fff" : "#c4b5fd",
          textAlign:     "center",
          letterSpacing: "0.3px",
          lineHeight:    1.3,
          transition:    "color 0.4s",
        }}>
          {skill.name}
        </h3>

        {/* 2-line description — fades in on active */}
        <div style={{
          opacity:    isActive ? 1 : 0,
          transform:  isActive ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.45s ease, transform 0.45s ease",
          textAlign:  "center",
        }}>
          <p style={{ margin: 0, fontSize: "0.74rem", color: "#9ca3af", lineHeight: 1.7 }}>
            {descLines[0]}
          </p>
          {descLines[1] && (
            <p style={{ margin: "4px 0 0", fontSize: "0.74rem", color: "#6b7280", lineHeight: 1.7 }}>
              {descLines[1]}
            </p>
          )}
        </div>

        {/* Bottom accent dots */}
        <div style={{
          position:   "absolute",
          bottom:     "20px",
          display:    "flex",
          gap:        "5px",
          alignItems: "center",
          opacity:    isActive ? 1 : 0.22,
          transition: "opacity 0.4s",
        }}>
          <div style={{ width: "20px", height: "2px", borderRadius: "2px", background: PURPLE }} />
          <div style={{ width: "6px",  height: "2px", borderRadius: "2px", background: PURPLE, opacity: 0.5 }} />
          <div style={{ width: "4px",  height: "2px", borderRadius: "2px", background: PURPLE, opacity: 0.25 }} />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
const SkillKeyboard = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused,    setPaused]    = useState(false);
  const timerRef = useRef(null);

  const advance = useCallback((dir = 1) => {
    setActiveIdx((prev) => ((prev + dir) % total + total) % total);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => advance(1), 2800);
    return () => clearInterval(timerRef.current);
  }, [paused, advance]);

  const handleCardClick = (slotOffset) => {
    if (slotOffset === 0) return;
    advance(slotOffset);
    setPaused(true);
    setTimeout(() => setPaused(false), 3000);
  };

  return (
    <section
      id="skills"
      style={{
        width:          "100%",
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        alignItems:     "center",
        justifyContent: "center",
        padding:        "5rem 0 4rem",
        overflow:       "hidden",
        position:       "relative",
      }}
    >
      {/* Ambient purple glow */}
      <div style={{
        position:      "absolute",
        top:           "55%",
        left:          "50%",
        transform:     "translate(-50%, -50%)",
        width:         "1000px",
        height:        "600px",
        background:    "radial-gradient(ellipse at center, rgba(145,94,255,0.10) 0%, transparent 68%)",
        pointerEvents: "none",
        zIndex:        0,
      }} />

      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem", zIndex: 1, position: "relative" }}>
        <p style={{
          fontSize:      "0.88rem",
          fontWeight:    600,
          color:         PURPLE,
          textTransform: "uppercase",
          letterSpacing: "3px",
          marginBottom:  "0.4rem",
        }}>
          What I work with
        </p>
        <h2
          className="purple-text-gradient"
          style={{
            fontSize:      "clamp(2rem, 5vw, 3.5rem)",
            fontWeight:    800,
            lineHeight:    1.1,
            letterSpacing: "-1px",
            margin:        0,
          }}
        >
          My Skills.
        </h2>
      </div>

      {/* 3D Carousel stage */}
      <div
        style={{
          position:    "relative",
          width:       "100%",
          height:      "580px",
          perspective: "1400px",
          display:     "flex",
          alignItems:  "center",
          justifyContent: "center",
          zIndex:      1,
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {SKILLS_LIST.map((skill, i) => {
          let slotOffset = (i - activeIdx + total) % total;
          if (slotOffset > total / 2) slotOffset -= total;

          return (
            <SkillCard
              key={skill.name}
              skill={skill}
              slotOffset={slotOffset}
              isActive={slotOffset === 0}
              onClick={handleCardClick}
            />
          );
        })}
      </div>

      <span id="projects" />
    </section>
  );
};

export default SkillKeyboard;
