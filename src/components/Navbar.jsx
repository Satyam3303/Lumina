import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = ["Services", "Work", "Process", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <a href="#" className="nav-logo">Lumina<span>.</span></a>

      <ul className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">Get a Quote</a>

      <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={open ? "open" : ""} />
        <span className={open ? "open" : ""} />
      </button>
    </nav>
  );
}
