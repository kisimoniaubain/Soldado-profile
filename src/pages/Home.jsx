import { useState } from "react";
import me from "../assets/me.png";
import "../styles/Home.css";

const skills = [
  [
    "01",
    "FRAMEWORK",
    "React",
    "Modular component architectures, state hooks, reactive UI flows",
  ],
  [
    "02",
    "RUNTIME",
    "JavaScript",
    "ES6+, asynchronous event loops, DOM orchestration, and Web APIs",
  ],
  [
    "03",
    "STRICT TYPE",
    "TypeScript",
    "Type-safe interfaces, predictable runtime bounds, strict telemetry",
  ],
  [
    "04",
    "MARKUP",
    "HTML5",
    "Semantic hierarchy, accessibility protocols, structured nodes",
  ],
  [
    "05",
    "STYLING",
    "CSS3",
    "Modern Grid, Flexbox, transitions, variables, and responsive units",
  ],
  [
    "06",
    "UTILITY",
    "Tailwind CSS",
    "Rapid atomic styling and tokenized design systems",
  ],
  [
    "07",
    "BACKEND",
    "Node.js",
    "Server-side I/O engines, microservices, headless APIs",
  ],
  [
    "08",
    "ROUTING",
    "Express",
    "RESTful endpoints, modular middleware, authentication",
  ],
  [
    "09",
    "DATABASE",
    "MongoDB",
    "Document stores and robust aggregation pipelines",
  ],
  [
    "10",
    "VERSION",
    "Git & GitHub",
    "Branching strategies, CI/CD, atomic commits",
  ],
  [
    "11",
    "PRODUCT",
    "UI/UX Design",
    "User journeys, wireframing, high-fidelity prototypes",
  ],
  [
    "12",
    "VISUAL",
    "Graphic Design",
    "Brand identities, typography, spatial balance, layout",
  ],
];

const projects = [
  [
    "01",
    "PLATFORM",
    "Topline",
    "A modern social media platform interface with stories, messaging, notifications, posts and video experiences.",
    "React / CSS / JavaScript",
    "web",
  ],
  [
    "02",
    "FULL-STACK",
    "Patientor",
    "A full-stack medical record application for managing patients, diagnoses and healthcare entries.",
    "React / TypeScript / Node.js",
    "web",
  ],
  [
    "03",
    "IDENTITY",
    "Creative Brand",
    "A visual identity and digital experience combining graphic design, typography and modern web development.",
    "Branding / Design / Web",
    "graphic",
  ],
  [
    "04",
    "CAMPAIGN",
    "Visual Direction",
    "Editorial artwork, campaign direction, and polished visual systems built for memorable brand moments.",
    "Branding / Posters / Art Direction",
    "graphic",
  ],
  [
    "05",
    "IDENTITY",
    "Mono Archive",
    "A graphic identity study exploring typography, contrast, composition, and tactile digital layouts.",
    "Identity / Typography / Layout",
    "graphic",
  ],
];

const services = [
  [
    "01",
    "Frontend Development",
    "Responsive and interactive websites built with modern frontend technologies, smooth kinetic animations, and rock-solid performance optimization.",
  ],
  [
    "02",
    "UI / UX Design",
    "Clean, intuitive interfaces designed around usability and strong visual hierarchy. Wireframing, prototyping, and design system governance.",
  ],
  [
    "03",
    "Graphic Design",
    "Logos, branding, posters, and digital visuals that communicate clearly and creatively with distinctive aesthetic character.",
  ],
  [
    "04",
    "Full-Stack Development",
    "Complete web applications connecting modern frontend interfaces with reliable backend systems, custom APIs, and scalable databases.",
  ],
];

function Home() {
  const [workCategory, setWorkCategory] = useState("web");
  const visibleProjects = projects.filter(
    ([, , , , , category]) => category === workCategory,
  );

  return (
    <main className="portfolio-main">
      <div className="hud-bar">
        <span>
          <b>●</b> SYS.LOC // 45.5152° N, 122.6784° W
        </span>
        <span className="release">PORTFOLIO_RELEASE // v2.5.0-PROD</span>
        <div>
          <a href="#about">[01_ABOUT]</a>
          <a href="#skills">[02_SKILLS]</a>
          <a href="#work">[03_WORK]</a>
          <a href="#services">[04_SERVICES]</a>
          <a href="#contact">[05_CONTACT]</a>
        </div>
      </div>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <div className="telemetry-tag">
            ● HELLO..! <span>// STATUS: AVAILABLE</span>
          </div>
          <h1>
            I BUILD <em>DIGITAL</em>
            <br /> EXPERIENCES.
          </h1>
          <p>
            I'm <strong>Kisimoni Aubain</strong>, a frontend developer and
            graphic designer creating modern websites, digital products and
            high-fidelity visual experiences.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">
              EXPLORE COLLABORATION <span>→</span>
            </a>
            <a className="button-secondary" href="mailto:hello@kisimoni.dev">
              ⌘ hello@kisimoni.dev
            </a>
          </div>
          <div className="stack-line">
            <span>DEPLOYED STACK:</span>
            <b>REACT</b>
            <b>TS</b>
            <b>TAILWIND</b>
            <b>FIGMA</b>
            <b>NODE</b>
            <b>GIT</b>
          </div>
        </div>
        <div className="hero-visual">
          <div className="orbit">
            <span className="orbit-label top">NODE.ME</span>
            <span className="orbit-label bottom">DEV//DSGN</span>
            <img src={me} alt="Kisimoni Aubain" />
          </div>
          <div className="wordmark">
            <span>CORE_SIGNATURE // ACTIVE</span>
            <strong>SOLDADO</strong>
            <small>DIGITAL ENGINEERING LABS</small>
          </div>
        </div>
      </section>
      <section className="about-section content-section" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div>
          <h2>Turning ideas into digital reality.</h2>
          <div className="philosophy">
            PHILOSOPHY // VECTOR_01
            <br />
            <span>
              Bridging the gap between rigid software architecture and emotive
              cinematic user experience.
            </span>
          </div>
        </div>
        <div className="about-copy">
          <p className="lead">
            I am a creative developer and graphic designer passionate about
            building meaningful digital experiences. With a foundation spanning
            visual hierarchy and modern front-end engineering, I craft intuitive
            interfaces that resonate on an emotional level while remaining
            computationally optimized.
          </p>
          <p>
            I combine clean frontend development with strong visual design
            principles to produce digital products that leave lasting
            impressions. Every micro-interaction, transition timing curve, and
            layout anchor is calibrated to feel direct, responsive, and
            seamless.
          </p>
          <a href="#contact">MORE ABOUT ME →</a>
        </div>
      </section>
      <section className="skills-section content-section" id="skills">
        <div className="section-heading">
          <div>
            <div className="section-label pink">02 / SKILLS</div>
            <h2>TOOLS &amp; TECHNOLOGIES</h2>
          </div>
          <p>
            A calibrated telemetry readout of engineering protocols, frameworks,
            and creative software suites.
          </p>
        </div>
        <div className="skill-grid">
          {skills.map(([num, type, name, text]) => (
            <article className="skill-card" key={name}>
              <span>
                {num} // {type}
              </span>
              <h3>{name}</h3>
              <p>{text}.</p>
            </article>
          ))}
        </div>
      </section>
            <section className="services-section content-section" id="services">
        <div className="section-heading">
          <div>
            <div className="section-label">04 / SERVICES</div>
            <h2>WHAT I CAN DO.</h2>
          </div>
          <p>
            Comprehensive product execution covering the entire spectrum from
            initial branding to robust client deployment.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([num, title, text]) => (
            <article className="service-card" key={title}>
              <b>{num}</b>
              <h3>{title}</h3>
              <p>{text}</p>
              <small>REACT • TYPESCRIPT • FIGMA • NODE.JS</small>
            </article>
          ))}
        </div>
      </section>
      <section className="work-section content-section" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">03 / SELECTED WORK</div>
            <h2>PROJECTS THAT MATTER.</h2>
          </div>
          <p>
            A selection of projects where development, design and creativity
            come together to solve tangible problems.
          </p>
        </div>
        <div className="work-tabs" role="tablist" aria-label="Work categories">
          <button
            className={workCategory === "web" ? "active" : ""}
            onClick={() => setWorkCategory("web")}
            role="tab"
            aria-selected={workCategory === "web"}
          >
            Web Development
          </button>
          <button
            className={workCategory === "graphic" ? "active" : ""}
            onClick={() => setWorkCategory("graphic")}
            role="tab"
            aria-selected={workCategory === "graphic"}
          >
            Graphic Works
          </button>
        </div>
        <div className="project-grid">
          {visibleProjects.map(([id, type, name, text, tags]) => (
            <article className="project-card" key={name}>
              <div className="terminal-bar">
                <span>● ● ●</span> NODE.{id} // {type}
              </div>
              <div className={`project-art art-${id}`}>
                <i>{name}</i>
              </div>
              <div className="project-info">
                <small>
                  {id} / {type}
                </small>
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="project-tags">{tags}</span>
                <a href="#contact">VIEW PROJECT ↗</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-label">05 / CONTACT</div>
        <h2>HAVE AN IDEA? LET'S BUILD IT.</h2>
        <p>
          I'm always interested in new projects, creative collaborations and
          opportunities to build something meaningful together.
        </p>
        <a className="contact-button" href="mailto:hello@kisimoni.dev">
          hello@kisimoni.dev ↗
        </a>
        <small>● CURRENT QUEUE: OPEN FOR Q2-Q3 COLLABORATIONS</small>
      </section>
    </main>
  );
}

export default Home;
