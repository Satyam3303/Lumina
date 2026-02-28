import { MARQUEE_ITEMS } from "../data/content";
import "./Marquee.css";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            <em>{item}</em>
            <span className="marquee-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
