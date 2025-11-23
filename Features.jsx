import React from "react";
import img1 from "../assets/hiking-103.png";
import img2 from "../assets/hiking-102.png";
import img3 from "../assets/hiking-101.png";

function Features() {
  return (
    <section className="features">
      <h2>Hiking and Camping Classes</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <img src={img1} alt="Activities" />
          <h3>Activities</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="feature-item">
          <img src={img2} alt="Hiking" />
          <h3>Hiking</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="feature-item">
          <img src={img3} alt="Mountains" />
          <h3>Mountains</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
