import { TESTIMONIALS } from "../data/content";
import "./Testimonials.css";

function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="testimonial reveal">
      <div className="t-quote">"</div>
      <p className="t-text">{quote}</p>
      <div className="t-author">
        <div className="t-avatar-wrap">
          <img src={image} alt={name} className="t-avatar-img" />
        </div>
        <div>
          <div className="t-name">{name}</div>
          <div className="t-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="section-header reveal">
        <span className="section-tag">✦ What Clients Say</span>
        <h2 className="section-title">
          Trusted by <em>Businesses</em> Like Yours
        </h2>
      </div>

      <div className="testimonials-grid">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
