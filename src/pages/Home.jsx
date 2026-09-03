import { useRef } from "react"
import { useEffect, useState } from "react"
import "../styles/Home.css";
import me from "../assets/mes.png";
import logoVideo from "../assets/logo.webm";
// import logo from "../assets/20251121_065728.png";

function Home() {
      {/* =========================================================
      WAVY BOTTOM DIVIDER
  ========================================================= */}
const WavyBottomDivider = () => (
  <div className="wavy-divider">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,0 C150,90 350,-40 500,65 C650,160 900,10 1200,45 L1200,120 L0,120 Z" />
    </svg>
  </div>
);
  const projects = [
    {
      number: "01",
      title: "Topline",
      description:
        "A modern social media platform interface with stories, messaging, notifications, posts and video experiences.",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      number: "02",
      title: "Patientor",
      description:
        "A full-stack medical record application for managing patients, diagnoses and healthcare entries.",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      number: "03",
      title: "Creative Brand",
      description:
        "A visual identity and digital experience combining graphic design, typography and modern web development.",
      tags: ["Branding", "Design", "Web"],
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub",
    "UI/UX Design",
    "Graphic Design",
  ];


  return (
    <main>
      {/* ================================
          HERO
      ================================= */}

      <header className="hero" id="home">

        <div className="hero-background">

          {/* CODING */}

          <span className="floating-item item-1">
            <i className="fa-brands fa-react"></i>
          </span>

          <span className="floating-item item-2">
            <i className="fa-brands fa-js"></i>
          </span>

          <span className="floating-item item-3">
            <i className="fa-brands fa-html5"></i>
          </span>

          <span className="floating-item item-4">
            <i className="fa-brands fa-css3-alt"></i>
          </span>

          <span className="floating-item item-5">
            <i className="fa-brands fa-node-js"></i>
          </span>

          <span className="floating-item item-6">
            <i className="fa-brands fa-github"></i>
          </span>

          <span className="floating-item item-7">
            <i className="fa-brands fa-npm"></i>
          </span>

          <span className="floating-item item-8">
            <i className="fa-brands fa-git-alt"></i>
          </span>


          {/* DEVELOPMENT */}

          <span className="floating-item item-9">
            &lt;/&gt;
          </span>

          <span className="floating-item item-10">
            {"{ }"}
          </span>

          <span className="floating-item item-11">
            &lt;/&gt;
          </span>

          <span className="floating-item item-12">
            <i className="fa-solid fa-code"></i>
          </span>


          {/* DESIGN */}

          <span className="floating-item item-13">
            <i className="fa-brands fa-figma"></i>
          </span>

          <span className="floating-item item-14">
            <i className="fa-solid fa-pen-nib"></i>
          </span>

          <span className="floating-item item-15">
            <i className="fa-solid fa-palette"></i>
          </span>

          <span className="floating-item item-16">
            <i className="fa-solid fa-bezier-curve"></i>
          </span>

          <span className="floating-item item-17">
            <i className="fa-solid fa-vector-square"></i>
          </span>

          <span className="floating-item item-18">
            <i className="fa-solid fa-image"></i>
          </span>


          {/* DESIGN TOOLS */}

          <span className="floating-item item-19">
            PS
          </span>

          <span className="floating-item item-20">
            AI
          </span>

          <span className="floating-item item-21">
            XD
          </span>

          <span className="floating-item item-22">
            FIGMA
          </span>


          {/* TECHNOLOGY */}

          <span className="floating-item item-23">
            TS
          </span>

          <span className="floating-item item-24">
            SQL
          </span>

          <span className="floating-item item-25">
            API
          </span>

          <span className="floating-item item-26">
            JSON
          </span>

          <span className="floating-item item-27">
            UI
          </span>

          <span className="floating-item item-28">
            UX
          </span>


          {/* SOCIAL MEDIA */}

          <span className="floating-item item-29">
            <i className="fa-brands fa-instagram"></i>
          </span>

          <span className="floating-item item-30">
            <i className="fa-brands fa-facebook-f"></i>
          </span>

          <span className="floating-item item-31">
            <i className="fa-brands fa-linkedin-in"></i>
          </span>

          <span className="floating-item item-32">
            <i className="fa-brands fa-x-twitter"></i>
          </span>

          <span className="floating-item item-33">
            <i className="fa-brands fa-youtube"></i>
          </span>

          <span className="floating-item item-34">
            <i className="fa-brands fa-tiktok"></i>
          </span>

        </div>

        <div className="hero-overlay"></div>

        <div className="hero-content">


          {/* <div className="logo">
            <video
              src={logoVideo}
              autoPlay
              loop
              muted
              playsInline
              className="logo-video"
            />
          </div> */}

          <p className="eyebrow">
            HELLO..!
          </p>

          <h1>
            I BUILD
            <br />
            <span>DIGITAL</span>
            <br />
            EXPERIENCES.
          </h1>

          <p className="hero-description">
            I'm <strong>Kisimoni Aubain</strong>, a frontend developer and
            graphic designer creating modern websites, digital products and
            visual experiences.
          </p>

        </div>

        <div className="hero-side">

          <div className="circle">

            <img
              src={me}
              alt="Kisimoni Aubain"
            />

          </div>

        </div>
        <WavyBottomDivider />
      </header>


      {/* ================================
          ABOUT
      ================================= */}

      <section className="about section" id="about">

        <div className="section-label">
          01 / ABOUT
        </div>

        <div className="about-grid">

          <div>
            <h2>
              Turning ideas into
              <span> digital reality.</span>
            </h2>
          </div>

          <div className="about-text">

            <p>
              I am a creative developer and graphic designer passionate about
              building meaningful digital experiences.
            </p>

            <p>
              I combine clean frontend development with strong visual design
              to create websites and applications that are functional,
              responsive and visually memorable.
            </p>

            <p>
              My work focuses on modern technologies, thoughtful interfaces
              and experiences that put people first.
            </p>

            <a href="#contact" className="text-link">
              More about me →
            </a>

          </div>

        </div>

      </section>


      {/* ================================
          SKILLS
      ================================= */}

      <section className="skills section">

        <div className="section-label">
          02 / SKILLS
        </div>

        <div className="skills-content">

          <h2>
            TOOLS & TECHNOLOGIES
          </h2>

          <div className="skills-grid">

            {skills.map((skill, index) => (

              <div
                className="skill"
                key={skill}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {skill}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================================
          WORK
      ================================= */}

      <section
        className="work section"
        id="work"
      >

        <div className="section-label">
          03 / SELECTED WORK
        </div>

        <div className="work-heading">

          <h2>
            PROJECTS
            <br />
            <span>THAT MATTER.</span>
          </h2>

          <p>
            A selection of projects where development, design and creativity
            come together.
          </p>

        </div>

        <div className="projects">

          {projects.map((project) => (

            <article
              className="project"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-main">

                <div className="project-preview">
                  <span>
                    {project.title}
                  </span>
                </div>

                <div className="project-info">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (

                      <span key={tag}>
                        {tag}
                      </span>

                    ))}

                  </div>

                  <button className="project-link">
                    View Project ↗
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* ================================
          SERVICES
      ================================= */}

      <section
        className="services section"
        id="services"
      >

        <div className="section-label">
          04 / SERVICES
        </div>

        <h2 className="services-title">
          WHAT I
          <br />
          <span>CAN DO.</span>
        </h2>

        <div className="services-list">

          <div className="service">

            <span>01</span>

            <div>
              <h3>
                Frontend Development
              </h3>

              <p>
                Responsive and interactive websites built with modern
                frontend technologies.
              </p>
            </div>

          </div>


          <div className="service">

            <span>02</span>

            <div>
              <h3>
                UI / UX Design
              </h3>

              <p>
                Clean, intuitive interfaces designed around usability and
                strong visual hierarchy.
              </p>
            </div>

          </div>


          <div className="service">

            <span>03</span>

            <div>
              <h3>
                Graphic Design
              </h3>

              <p>
                Logos, branding, posters and digital visuals that communicate
                clearly and creatively.
              </p>
            </div>

          </div>


          <div className="service">

            <span>04</span>

            <div>
              <h3>
                Full-Stack Development
              </h3>

              <p>
                Complete web applications connecting modern frontend
                interfaces with reliable backend systems.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* ================================
          CONTACT
      ================================= */}

      <section
        className="cta"
        id="contact"
      >

        <div className="cta-label">
          05 / CONTACT
        </div>

        <h2>
          HAVE AN IDEA?
          <br />
          <span>LET'S BUILD IT.</span>
        </h2>

        <p>
          I'm always interested in new projects, creative collaborations and
          opportunities to build something meaningful.
        </p>

        <a
          href="mailto:hello@kisimoni.dev"
          className="contact-button"
        >
          hello@kisimoni.dev ↗
        </a>

      </section>

    </main>
  );
}

export default Home;