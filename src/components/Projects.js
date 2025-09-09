import React from "react";

const projects = [
  {
    name: "Chime (Chat App)",
    desc: "Chime; a real-time, encrypted messaging app built with Node.js. It combines security, speed, and a sleek mobile-first interface, allowing users to chat safely with end-to-end encryption and instant message delivery",
    github: "https://github.com/JM0501/chime_mobile",
    access: "https://drive.google.com/file/d/1m_PZLhpSn-dvf2JzP5PHbzMGxRSInLX-/view?usp=drive_link",
  },
  {
    name: "StaffFlow",
    desc: "---",
    github: "#",
    access: "#",
  },
];

export default function Projects() {
  return (
    <div className="section projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <div className="project-links">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                GitHub
              </a>
              <a
                href={p.access}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                Access
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
