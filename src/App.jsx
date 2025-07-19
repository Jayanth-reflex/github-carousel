import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

export default function App() {
  return (
    <div className="center-container">
      {/* <header className="header">
        <span role="img" aria-label="rocket">🚀</span>
        <span className="header-title">Jayanth's GitHub Repos</span>
        <span role="img" aria-label="sparkles">✨</span>
      </header> */}
      <Carousel />
    </div>
  );
}