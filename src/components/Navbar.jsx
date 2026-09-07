import { useEffect, useState } from "react";

const navigationItems = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["services", "What I Do"],
  ["work", "Works"],
  ["contact", "Contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navigationItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-78px 0px -45% 0px", threshold: [0.1, 0.35, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="brand-lockup"><span className="status-dot" /><a href="#home" className="brand-name">KISIMONI AUBAIN <span>// DEV &amp; DESIGN</span></a></div>
      <button className={`menu-dots ${menuOpen ? "open" : ""}`} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <nav id="mobile-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navigationItems.map(([id, label]) => (
          <a className={`${activeSection === id ? "active" : ""} ${id === "contact" ? "contact-link" : ""}`} href={`#${id}`} aria-current={activeSection === id ? "page" : undefined} onClick={closeMenu} key={id}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;