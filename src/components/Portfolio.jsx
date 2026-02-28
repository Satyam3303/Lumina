import { PORTFOLIO } from "../data/content";
import "./Portfolio.css";

function PortfolioItem({ tag, title, image, span }) {
  return (
    <div className={`portfolio-item reveal${span ? " portfolio-span" : ""}`}>
      <div className="portfolio-img-wrap">
        <img src={image} alt={title} className="portfolio-img" />
        <div className="portfolio-overlay" />
      </div>
      <div className="portfolio-info">
        <p className="p-tag">✦ {tag}</p>
        <h3 className="p-title">{title}</h3>
        <a href="#contact" className="p-link">View Case Study →</a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section className="portfolio-section" id="work">
      <div className="portfolio-inner section">
        <div className="section-header reveal">
          <span className="section-tag">✦ Our Work</span>
          <h2 className="section-title" style={{ color: "var(--cream)" }}>
            Selected <em>Projects</em>
          </h2>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIO.map((p, i) => (
            <PortfolioItem key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
