import React from "react";
import img1 from "../assets/template-30.jpg";
import img2 from "../assets/template-89.jpg";

function ClassDetail() {
  return (
    <section className="class-detail">
      <div className="text">
        <h2>Rock Climbing</h2>
        <h3>1. Classes & Events</h3>
        <p>
          Hatha is the most classic yoga. Its origin is in the Raja Yoga of Patanjali and other
          classical texts such as Bhagvat Gita and Hatha Yoga Pradipika.
        </p>
        <img src={img1} alt="Rock Climbing Class" />
        <ul>
          <li>10 modules</li>
          <li>7 weekends</li>
          <li>Start: April 15</li>
          <li>Time: 20:00 hours</li>
          <li>Price: ₹900</li>
        </ul>
        <p className="activity-text">WALKING IN NATURE AS A RECREATIONAL ACTIVITY</p>
      </div>
      <img src={img2} alt="Hiker" />
    </section>
  );
}

export default ClassDetail;
