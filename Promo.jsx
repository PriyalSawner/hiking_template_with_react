import React from "react";
import promoImg from "../assets/hiking-7.png";

function Promo() {
  return (
    <section className="promo full-width-image">
      <div className="guide">
        <h1>BIG BEND NATIONAL PARK HIKING GUIDE</h1>
        <strong>THIS HIKE IS THE NEXT OPTION</strong>
        <p>LOREM IPSUM</p>
        <img src={promoImg} alt="Promo Hike" />
      </div>
    </section>
  );
}

export default Promo;
