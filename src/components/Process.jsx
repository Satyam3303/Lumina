import { PROCESS_STEPS, STATS } from "../data/content";
import "./Process.css";

function Step({ num, title, desc }) {
  return (
    <div className="step reveal">
      <span className="step-num">{num}</span>
      <div className="step-body">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function StatBlock({ num, suffix, label }) {
  return (
    <div className="pv-stat">
      <div className="pv-num">
        {num}<span>{suffix}</span>
      </div>
      <div className="pv-label">{label}</div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="section-header reveal">
        <span className="section-tag">✦ How We Work</span>
        <h2 className="section-title">
          A Process Built for <em>Clarity</em>
        </h2>
      </div>

      <div className="process-grid">
        <div className="process-steps">
          {PROCESS_STEPS.map((s) => (
            <Step key={s.num} {...s} />
          ))}
        </div>

        <div className="process-visual reveal">
          <div className="process-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
              alt="Team collaboration"
              className="process-img"
            />
          </div>
          <div className="pv-stats">
            {STATS.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
