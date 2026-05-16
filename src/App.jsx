import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBars,
  FaTimes,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiVite } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { name: "Angular",icon: <FaAngular />,},
    { name: "React.js", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Redux / Zustand", icon: <SiRedux /> },
    { name: "Vite", icon: <SiVite /> },
    
  ];

 const projects = [
  {
    title: "Interactive Gaming Dashboard",

    description:
      "Modern React dashboard with responsive layouts, smooth animations and advanced state management using Zustand.",
  },

  {
    title: "Dynamic User Interface System",

    description:
      "Feature-rich frontend application with reusable components, autoplay functionality and modern UI interactions.",
  },

  {
    title: "Analytics & Admin Panel",

    description:
      "Responsive admin dashboard featuring tables, statistics cards, interactive charts and clean component architecture.",
  },
];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    e.target.reset();
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="left-nav">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <div className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <div className="socials">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>
          <h1>Yasaswetha Kanchi</h1>
          <h2>Frontend React Developer</h2>

          <p className="description">
            I build responsive and modern web applications using React,
            JavaScript, HTML, CSS and modern frontend technologies.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">Let's Connect</a>
            <a href="#projects" className="secondary-btn">View Projects</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <span>YS</span>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate frontend developer focused on building beautiful and
          responsive user experiences.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Clean Code</h3>
            <p>
              I write reusable and maintainable React components with proper
              project structure.
            </p>
          </div>

          <div className="about-card">
            <h3>Problem Solver</h3>
            <p>
              I enjoy solving frontend challenges and converting ideas into
              interactive UI.
            </p>
          </div>

          <div className="about-card">
            <h3>Fast Learner</h3>
            <p>
              I quickly learn modern frontend tools and continuously improve my
              skills.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="section light-section">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies I use to build modern frontend applications.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="progress">
                <div className="progress-fill"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my frontend React projects.</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          Let's discuss how we can work together.
        </p>

        <div className="contact-box">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email</h3>
                <p>swethareddykanchi2002@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Mobile</h3>
                <p>+91 9603421243</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Location</h3>
                <p>India</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>Developed By Yasaswetha Kanchi © 2025</p>
      </footer>
    </div>
  );
};

export default App;