import { FOOTER_LINKS } from "../data/content";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">Lumina<span>.</span></a>
          <p className="footer-desc">
            A boutique digital studio crafting exceptional websites for
            forward-thinking businesses worldwide.
          </p>
          <div className="footer-socials">
            {["In", "Tw", "Dr"].map((s) => (
              <a key={s} href="#" className="social-btn">{s}</a>
            ))}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div className="footer-col" key={heading}>
            <h4>{heading}</h4>
            <ul>
              {links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© 2025 Lumina Studio. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
