function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        SOLDADO<span>.</span>
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>
    </nav>
  );
}

export default Navbar;