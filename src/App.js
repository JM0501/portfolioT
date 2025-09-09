import React, { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("About");
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="app-container">
      <nav className="navbar">
        <h1 className="logo">Tshepang Mohlamonyane</h1>
        <div className="tabs">
          {["About", "Skills", "Projects", "Contact"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          className="dark-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      <main className="main-content">
        {activeTab === "About" && <About />}
        {activeTab === "Skills" && <Skills />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Contact" && <Contact />}
      </main>
    </div>
  );
}

export default App;
