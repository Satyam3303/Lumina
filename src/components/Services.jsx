import { SERVICES } from "../data/content";
import "./Services.css";

function ServiceCard({ num, name, desc }) {
  return (
    <div className="service-card reveal">
      <div className="service-num">{num}</div>
      <h3 className="service-name">{name}</h3>
      <p className="service-desc">{desc}</p>
      <div className="service-arrow">→</div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="section-header reveal">
        <span className="section-tag">✦ What We Do</span>
        <h2 className="section-title">
          Services Built for <em>Real</em> Results
        </h2>
      </div>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.num} {...s} />
        ))}
      </div>
    </section>
  );
}
