import React from "react";
import {
  SiCplusplus,
  SiDotnet,
  SiMysql,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { FaMicrosoft } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "Java", icon: <DiJava /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "HTML5", icon: <SiHtml5 /> },
        { name: "CSS3", icon: <SiCss3 /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Flutter", icon: <SiFlutter /> },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Firebase", icon: <SiFirebase /> },
      ],
    },
    {
      category: "Cloud & Tools",
      skills: [
        { name: "Microsoft Azure", icon: <FaMicrosoft /> },
      ],
    },
  ];

  return (
    <div className="section skills">
      <h2>My Skills</h2>
      {skillCategories.map((group) => (
        <div key={group.category} className="skills-group">
          <h3>{group.category}</h3>
          <div className="skills-grid">
            {group.skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="icon">{skill.icon}</div>
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
