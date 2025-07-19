import React from "react";
import Carousel from "./components/Carousel";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

export default function App() {
  // Particle options for interactive effect
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { quantity: 6 }
      }
    },
    particles: {
      color: { value: ["#F7A41D", "#6ae3ff", "#fff"] },
      links: { enable: true, color: "#fff", distance: 120, opacity: 0.3, width: 1 },
      collisions: { enable: false },
      move: { enable: true, speed: 1.5, direction: "none", random: false, straight: false, outModes: "out" },
      number: { value: 40, density: { enable: true, area: 600 } },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 5 } }
    },
    detectRetina: true
  };

  return (
    <>
      <div className="header-particles-container">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="particles-bg"
        />
        <h1 className="portfolio-header">Jayanth’s Interactive Portfolio Playground</h1>
      </div>
      <div className="center-container">
        <Carousel />
      </div>
    </>
  );
}