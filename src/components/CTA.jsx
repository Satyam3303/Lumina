import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-bg-img">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Modern office"
        />
        <div className="cta-bg-overlay" />
      </div>

      <div className="cta-content reveal">
        <span className="section-tag" style={{ color: "var(--gold-light)" }}>
          ✦ Let's Work Together
        </span>
        <h2 className="cta-title">
          Ready to Build<br />Something <em>Great?</em>
        </h2>
        <p className="cta-sub">
          Tell us about your project and we'll get back to you within 24 hours
          with a tailored proposal.
        </p>
        <div className="cta-actions">
          <a href="mailto:hello@lumina.studio" className="btn-cta-primary">
            Start Your Project
          </a>
          <a href="tel:+15550123456" className="btn-cta-ghost">
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}
