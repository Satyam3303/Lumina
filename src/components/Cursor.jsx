import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = "* { cursor: none !important; }";
    document.head.appendChild(style);

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };

    let raf;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);
    const links = document.querySelectorAll("a, button");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    document.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  const dotStyle = {
    width: hovered ? 20 : 10,
    height: hovered ? 20 : 10,
    background: "#c9a84c",
    borderRadius: "50%",
    position: "fixed",
    top: 0, left: 0,
    pointerEvents: "none",
    zIndex: 99999,
    transform: "translate(-50%, -50%)",
    transition: "width 0.25s, height 0.25s",
  };

  const ringStyle = {
    width: hovered ? 54 : 36,
    height: hovered ? 54 : 36,
    border: "1.5px solid #c9a84c",
    borderRadius: "50%",
    position: "fixed",
    top: 0, left: 0,
    pointerEvents: "none",
    zIndex: 99998,
    transform: "translate(-50%, -50%)",
    opacity: 0.6,
    transition: "width 0.3s, height 0.3s",
  };

  return (
    <>
      <div ref={dotRef} style={dotStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
}