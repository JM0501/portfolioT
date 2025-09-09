import React from "react";

const projects = [
  {
    name: "Seeder-Leecher App in Java",
    desc: "Built with Java and JavaFX.",
    link: "https://github.com/JM0501/JavaXJavafx",
  },
  {
    name: "Simple C++ Program",
    desc: "",
    link: "https://github.com/JM0501/C-_project_uno",
  },
  {
    name: "Password Generator",
    desc: "Built with HTML, CSS, and JavaScript.",
    link: "password-generator/index.html",
  },
  {
    name: "Chime (Chat App)",
    desc: "Built with Node.js, React & MySQL. Coming soon...",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="section projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.name} className="project-card">
            <h3>
              <a href={p.link} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            </h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
