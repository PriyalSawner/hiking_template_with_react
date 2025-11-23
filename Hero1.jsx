import React from "react";
import img from "../assets/hiking-60.png";

function Hero1() {
  return (
    <section className="hero1">
      <div className="hero1-content">
        <h1>WALKING IN NATURE</h1>
        <h1>AS A RECREATIONAL</h1>
        <h1>ACTIVITY</h1>
        <h2>.Activities</h2>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
      <div className="hero1-image" style={{ backgroundImage: `url(${img})` }}></div>
    </section>
  );
}

export default Hero1;
