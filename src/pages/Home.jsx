import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import me from "../assets/me.png";
import soldadoLogo from "../assets/20251121_065728.png";
import soldadoMark from "../assets/20251121_0657281.png";
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
    "WEB EXPERIENCE",
    "Challenger",
    "A focused web experience built to turn a clear idea into an engaging digital product.",
    "React / CSS / JavaScript",
    "https://challenger-2-uqtu.onrender.com/",
  ],
  [
    "02",
    "CREATIVE PLATFORM",
    "Growing Creative",
    "A bold creative web experience with a strong visual system and responsive presentation.",
    "React / Design / Responsive UI",
    "https://growing-creative.onrender.com/",
  ],
  [
    "03",
    "PRODUCT EXPERIENCE",
    "UseCorg",
    "A polished product interface designed around clarity, interaction, and a confident brand presence.",
    "React / UI Design / JavaScript",
    "https://usecorg.vercel.app/",
  ],
  [
    "04",
    "E-COMMERCE",
    "Soldy Home Shop",
    "A home-focused shopping experience that combines product discovery with a clean, welcoming interface.",
    "React / E-commerce / CSS",
    "https://soldyhomeshop.onrender.com",
  ],
  [
    "05",
    "COMMUNITY HUB",
    "Codust Hub",
    "A community-driven digital hub created for browsing, connection, and shared resources.",
    "React / JavaScript / UI Systems",
    "https://codust-hub.vercel.app/",
  ],
  [
    "06",
    "SOCIAL PLATFORM",
    "Topline",
    "A modern social media platform interface with stories, messaging, notifications, posts, and video experiences.",
    "React / CSS / JavaScript",
    "https://topline-irjw.onrender.com/",
  ],
];

const graphicProjects = [
  [
    "01",
    "IDENTITY",
    "Creative Brand",
    "A visual identity and digital experience combining graphic design, typography, and modern web development.",
    "Branding / Design / Web",
    "#contact",
    soldadoLogo,
    "brand",
  ],
  [
    "02",
    "POSTER",
    "Visual Direction",
    "Editorial artwork, campaign direction, and polished visual systems built for memorable brand moments.",
    "Branding / Posters / Art Direction",
    "#contact",
    soldadoMark,
    "poster",
  ],
  [
    "03",
    "LOGO",
    "Mono Archive",
    "A graphic identity study exploring typography, contrast, composition, and tactile digital layouts.",
    "Identity / Typography / Layout",
    "#contact",
    soldadoMark,
    "logo",
  ],
  [
    "04",
    "FLYER",
    "Campaign Flyer",
    "A promotional flyer concept balancing bold type, clear messaging, and a memorable visual rhythm.",
    "Flyer / Typography / Art Direction",
    "#contact",
    soldadoLogo,
    "flayer",
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
    "Backend Development",
    "Robust and scalable server-side applications built with modern backend technologies, ensuring high performance and seamless integration.",
  ],
  [
    "03",
    "UI / UX Design",
    "Clean, intuitive interfaces designed around usability and strong visual hierarchy. Wireframing, prototyping, and design system governance.",
  ],
  [
    "04",
    "Graphic Design",
    "Logos, branding, posters, and digital visuals that communicate clearly and creatively with distinctive aesthetic character.",
  ],
  [
    "05",
    "Full-Stack Development",
    "Complete web applications connecting modern frontend interfaces with reliable backend systems, custom APIs, and scalable databases.",
  ],
];

const benchmarkTools = [
  ["01", "React.js", "SPA & Hooks Architecture", 97],
  ["02", "TypeScript", "Strict Type Safety & Generics", 95],
  ["03", "JavaScript ES6+", "Async, DOM & Event Loop", 98],
  ["04", "HTML5 & ARIA", "Accessible DOM Structuring", 99],
  ["05", "Tailwind / CSS3", "Responsive & Grid Systems", 97],
  ["06", "Node.js & Express", "REST APIs & Middleware", 92],
  ["07", "MongoDB / NoSQL", "Schema Architecture & Aggregations", 90],
];

const designTools = [
  ["FG", "Figma (UI/UX Design)", "Design Systems, Auto-layout, Interactive Prototypes", "98.5%", "#ff007a"],
  ["AI", "Adobe Illustrator", "Precision Vector Pen, Monograms & Brand Marks", "99.0%", "#fbbf24"],
  ["PS", "Adobe Photoshop", "High-End Compositing, Texturing, Retouching", "96.0%", "#38bdf8"],
  ["XD", "Adobe XD", "Wireframing, User Flows & Rapid Prototypes", "94.0%", "#ec4899"],
  ["FX", "Kinetic Motion & SVG Vectors", "Bespoke Vector Morphing, Easing Curves, WebGL/Shader Staging", "97.5%", "#a855f7"],
];

function Home() {
  const formRef = useRef(null);
  const [workCategory, setWorkCategory] = useState("web");
  const [graphicCategory, setGraphicCategory] = useState("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0n7u9ra";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_o47h07g";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "w9H1Onw0PA9CSEtYf";

  const visibleProjects =
    workCategory === "web"
      ? projects
      : graphicProjects.filter(
          ([, , , , , , , category]) =>
            graphicCategory === "all" || category === graphicCategory,
        );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setFeedback("");

    if (formRef.current) {
      const avatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(
        formData.name || "Client",
      )}&background=random`;
      formRef.current.avatar.value = avatar;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFeedbackType("success");
        setFeedback("Message sent successfully. Thank you for reaching out.");
        setFormData({ name: "", email: "", message: "" });
        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((error) => {
        setFeedbackType("error");
        setFeedback("Message failed to send. Please try again in a moment.");
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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
        {workCategory === "graphic" && (
          <div className="graphic-tabs" role="tablist" aria-label="Graphic design categories">
            {[
              ["all", "All"],
              ["flayer", "Flayer Design"],
              ["poster", "Poster Design"],
              ["brand", "Brand Identity"],
              ["logo", "Logo Design"],
            ].map(([category, label]) => (
              <button
                className={graphicCategory === category ? "active" : ""}
                onClick={() => setGraphicCategory(category)}
                role="tab"
                aria-selected={graphicCategory === category}
                key={category}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        <div className="project-grid">
          {visibleProjects.map(([id, type, name, text, tags, url, image]) => (
            <article className="project-card" key={name}>
              <div className="terminal-bar">
                <span>● ● ●</span> NODE.{id} // {type}
              </div>
              <div className={`project-art art-${id}${image ? " has-image" : ""}`}>
                {image ? <img src={image} alt={`${name} design`} /> : <i>{name}</i>}
              </div>
              <div className="project-info">
                <small>
                  {id} / {type}
                </small>
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="project-tags">{tags}</span>
                <a href={url} target="_blank" rel="noreferrer">
                  VIEW PROJECT ↗
                </a>
              </div>
            </article>
          ))}
        </div>
        {workCategory === "web" && (
          <article className="stack-benchmark">
            <div className="benchmark-grid-lines" aria-hidden="true" />
            <div className="benchmark-scanner" aria-hidden="true" />
            <div className="benchmark-header">
              <div className="benchmark-title">
                <span className="benchmark-live-dot" />
                <div>
                  <small>SYSTEM TELEMETRY // STACK BENCHMARK</small>
                  <h3>WEB DEVELOPER PROFICIENCY METRICS</h3>
                </div>
              </div>
              <div className="benchmark-summary">
                <small>STACK AGGREGATE</small>
                <strong>96.4 <span>/ 100</span></strong>
                <b>ACTIVE // L5</b>
              </div>
            </div>
            <div className="benchmark-body">
              <div className="benchmark-tools">
                {benchmarkTools.map(([id, name, role, score]) => (
                  <div className="benchmark-tool" key={name}>
                    <span className="benchmark-id">{id}</span>
                    <div className="benchmark-tool-name">
                      <strong>{name}</strong>
                      <small>// {role}</small>
                    </div>
                    <div className="benchmark-bar">
                      <span style={{ "--bar-width": `${score}%` }} />
                    </div>
                    <b className="benchmark-score">{score}%</b>
                  </div>
                ))}
              </div>
              <div className="benchmark-runtime">
                <div className="benchmark-gauge" style={{ "--gauge-progress": "96.4%" }}>
                  <span className="gauge-ring" />
                  <strong>96%</strong>
                  <small>FULL MASTERY</small>
                </div>
                <div className="runtime-stat">
                  <small>VERSION CONTROL</small>
                  <strong>Git &amp; GitHub Actions <b>98%</b></strong>
                  <span>Branching // CI/CD // Releases</span>
                </div>
                <div className="runtime-stat">
                  <small>RUNTIME EFFICIENCY</small>
                  <strong>60 FPS Hardware Sync <b>99%</b></strong>
                  <span>Lighthouse PWA Score: 100</span>
                </div>
              </div>
            </div>
          </article>
        )}
        {workCategory === "graphic" && (
          <article className="design-benchmark">
            <div className="design-radar-glow" aria-hidden="true" />
            <div className="design-header">
              <div className="benchmark-title">
                <span className="design-live-dot" />
                <div>
                  <small>SYSTEM TELEMETRY // CREATIVE DESIGN BENCHMARK</small>
                  <h3>GRAPHIC DESIGN &amp; UI/UX TOOL MASTERY</h3>
                </div>
              </div>
              <div className="design-summary">
                <small>DESIGN FIDELITY</small>
                <strong>97.8 <span>/ 100</span></strong>
                <b>HAUTE CRAFT</b>
              </div>
            </div>
            <div className="design-body">
              <div className="design-radar" aria-label="Creative design proficiency radar">
                <svg viewBox="0 0 500 424" role="img">
                  <defs>
                    <linearGradient id="designRadarFill" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0" stopColor="#ff007a" stopOpacity=".45" />
                      <stop offset=".6" stopColor="#a855f7" stopOpacity=".3" />
                      <stop offset="1" stopColor="#fbbf24" stopOpacity=".2" />
                    </linearGradient>
                    <radialGradient id="designRadarGlow">
                      <stop offset="0" stopColor="#f1e8ed" stopOpacity=".35" />
                      <stop offset="1" stopColor="#faf8f9" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle cx="250" cy="212" r="140" fill="url(#designRadarGlow)" />
                  <g className="radar-reticle">
                    <circle cx="250" cy="212" r="148" fill="none" stroke="#f3eaee" strokeDasharray="14 26" />
                    <circle cx="250" cy="212" r="158" fill="none" stroke="#fbbf24" strokeDasharray="4 16" />
                  </g>
                  <g className="radar-grid">
                    {["250,188 271,200 271,224 250,236 229,224 229,200", "250,164 292,188 292,236 250,260 208,236 208,188", "250,140 312,176 312,248 250,284 188,248 188,176", "250,116 333,164 333,260 250,308 167,260 167,164", "250,92 354,152 354,272 250,332 146,272 146,152"].map((points) => <polygon key={points} points={points} />)}
                    <line x1="250" y1="212" x2="250" y2="82" />
                    <line x1="250" y1="212" x2="362" y2="147" />
                    <line x1="250" y1="212" x2="362" y2="277" />
                    <line x1="250" y1="212" x2="250" y2="342" />
                    <line x1="250" y1="212" x2="138" y2="277" />
                    <line x1="250" y1="212" x2="138" y2="147" />
                  </g>
                  <g className="radar-sweep">
                    <path d="M250 212 L250 75 A137 137 0 0 1 350 122 Z" fill="url(#designRadarGlow)" />
                    <line x1="250" y1="212" x2="250" y2="76" />
                  </g>
                  <polygon className="radar-proficiency" points="250,92 355,152 355,274 250,332 145,274 145,152" fill="url(#designRadarFill)" />
                  <g className="radar-vertices" aria-hidden="true">
                    <circle cx="250" cy="92" r="6" />
                    <circle cx="355" cy="152" r="6" />
                    <circle cx="355" cy="274" r="6" />
                    <circle cx="250" cy="332" r="6" />
                    <circle cx="145" cy="274" r="6" />
                    <circle cx="145" cy="152" r="6" />
                  </g>
                </svg>
                <span className="radar-label radar-top">FIGMA // UI/UX <b>98.5%</b></span>
                <span className="radar-label radar-right-top">ILLUSTRATOR <b>99.0%</b></span>
                <span className="radar-label radar-right-bottom">PHOTOSHOP <b>96.0%</b></span>
                <span className="radar-label radar-bottom">BRAND IDENTITY <b>97.0%</b></span>
                <span className="radar-label radar-left-bottom">HAUTE TYPO <b>98.0%</b></span>
                <span className="radar-label radar-left-top">MOTION SVG <b>97.5%</b></span>
              </div>
              <div className="design-tools">
                {designTools.map(([code, name, description, score, color]) => (
                  <div className="design-tool" key={name}>
                    <span className="design-tool-icon" style={{ "--tool-color": color }}>{code}</span>
                    <div className="design-tool-copy">
                      <strong>{name}</strong>
                      <small>{description}</small>
                      <div className="design-tool-bar"><span style={{ width: score, "--tool-color": color }} /></div>
                    </div>
                    <b style={{ color }}>{score}</b>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )}
      </section>

      <section className="contact-section" id="contact">
        <div className="section-label">05 / CONTACT</div>
        <h2>HAVE AN IDEA? LET'S BUILD IT.</h2>
        <p>
          I'm always interested in new projects, creative collaborations and
          opportunities to build something meaningful together.
        </p>

        <div className="contact-layout">
          <div className="contact-meta">
            <h3>Let's create something memorable.</h3>
            <p>
              Share a few details and I'll get back to you with the right next
              step for your project.
            </p>
            <a href="mailto:hello@kisimoni.dev">hello@kisimoni.dev ↗</a>
            <small>● CURRENT QUEUE: OPEN FOR Q2-Q3 COLLABORATIONS</small>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="avatar" />

            <div className="contact-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="message">Project brief</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your idea, timeline, and goals..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-button" disabled={isSending}>
              {isSending ? "Sending..." : "Send message"}
            </button>

            {feedback && (
              <p className={`form-feedback ${feedbackType}`} role="status" aria-live="polite">
                {feedback}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
