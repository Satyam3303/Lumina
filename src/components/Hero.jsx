import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-tag">✦ Digital Studio — Est. 2019</p>
        <h1 className="hero-title">
          We Build<br />
          Websites That<br />
          <em>Convert</em>
        </h1>
        <p className="hero-desc">
          From elegant landing pages to full-scale platforms, we craft digital
          experiences that captivate your audience and grow your business.
        </p>
        <div className="hero-btns">
          <a href="#work" className="btn-primary">View Our Work</a>
          <a href="#contact" className="btn-ghost">
            Start a Project <span>→</span>
          </a>
        </div>

        <div className="hero-badges">
          <div className="hero-badge">
            <span className="badge-num">120+</span>
            <span className="badge-label">Projects Done</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-badge">
            <span className="badge-num">98%</span>
            <span className="badge-label">Satisfaction</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-badge">
            <span className="badge-num">5★</span>
            <span className="badge-label">Avg. Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85"
            alt="Modern web design workspace"
            className="hero-img"
          />
          <div className="hero-img-overlay" />
          <div className="hero-float-card">
            <p className="hfc-label">Latest Project</p>
            <p className="hfc-title">Marble &amp; Co.<br />E-Commerce</p>
            <div className="hfc-bar" />
          </div>
        </div>
        <div className="hero-accent-img">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
            alt="Developer at work"
          />
        </div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
