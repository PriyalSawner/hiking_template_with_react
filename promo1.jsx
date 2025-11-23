import React from "react";
import promoImg from "../assets/hiking-5.png";
import promoImg1 from "../assets/hiking-7.png";

function Promo1() {
  return (
    <section className="promo full-width-image">
      <div className="guide">
         <h3>THE ASANAS PURIFY OUR MINDS AND</h3>
	     <h3>KEEP IT HEALTHY,MAKING IT SUIT</h3>
	     <h3>ABLE VEHICLE FOR THE SOUL</h3>
        <img src={promoImg} alt="Promo Hike" />
	    <img src={promoImg1} alt="Promo Hike" />
      </div>
    </section>
  );
}

export default Promo1;
