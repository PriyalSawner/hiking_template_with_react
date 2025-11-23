import React from "react";
import heroImg from "../assets/hiking1.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover your next Hike</h1>
        <p>DISCOVER YOUR NEXT HIKE</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>
    </section>
  );
}

export default Hero;
