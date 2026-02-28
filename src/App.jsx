import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";
import "./styles/global.css";
import Cursor from "./components/Cursor";

export default function App() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Lumina Studio — Crafting Digital Experiences";
  }, []);

  return (
    <div className="app">
      <Cursor /> 
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
