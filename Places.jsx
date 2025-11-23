import React from "react";
import img1 from "../assets/template-40.jpg";
import img2 from "../assets/template-39.jpg";
import img3 from "../assets/template-38.jpg";

function Places() {
  return (
    <section className="places">
      <h2>Places to Visit in Autumn</h2>
      <div className="places-grid">
        <div className="place-card">
          <img src={img1} alt="Mountain Loop" />
          <h3>Mountain Loop</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p><strong>Location:</strong> 0.3 miles</p>
        </div>
        <div className="place-card">
          <img src={img2} alt="National Park" />
          <h3>National Park</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p><strong>Location:</strong> 0.2 miles</p>
        </div>
        <div className="place-card">
          <img src={img3} alt="Canyon Trail" />
          <h3>Canyon Trail</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <p><strong>Location:</strong> 0.6 miles</p>
        </div>
      </div>
    </section>
  );
}

export default Places;
