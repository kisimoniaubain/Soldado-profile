import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="brand-lockup"><span className="status-dot" /><a href="#home" className="brand-name">KISIMONI AUBAIN <span>// DEV &amp; DESIGN</span></a></div>
      <button className={`menu-dots ${menuOpen ? "open" : ""}`} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#services" onClick={closeMenu}>What I Do</a><a href="#work" onClick={closeMenu}>Works</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
    </header>
  );
}

export default Navbar;