import React from "react";
import img1 from "../assets/hiking-105.png";
import img2 from "../assets/hiking-93.png";
import img3 from "../assets/hiking-101.png";
import img4 from "../assets/hiking-103.png";
import img5 from "../assets/hiking-102.png";
import circularImg from "../assets/hiking-68.png";

function Recovery() {
  return (
    <>
      <div className="header">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <h3>HOW TO RECOVER FROM A HIKE</h3>
      </div>

      <div className="content-left">
        <div className="content-item">
          <img src={img3} alt="" />
          <ul>
            <li>Lorem ipsum</li>
            <li>Dolor sit amet consectetur</li>
            <li>Adipiscing elit</li>
            <li>Torquent elit aptent</li>
          </ul>
        </div>

        <div className="content-item">
          <img src={img4} alt="" />
          <ul>
            <li>Fusce etiam augue</li>
            <li>Dignissim at euismod</li>
            <li>Libero monters</li>
            <li>Adipiscing elit aptent</li>
            <li>Torquent, interdum</li>
          </ul>
        </div>

        <div className="content-item">
          <img src={img5} alt="" />
          <ul>
            <li>Libero montes</li>
            <li>Adipiscing elit aptent</li>
            <li>Torquent, Interdum</li>
          </ul>
        </div>
      </div>

      <div className="content-right">
        <div
          className="circular-image"
          style={{ backgroundImage: `url(${circularImg})` }}
        ></div>
        <div className="call-to-action">MAKE SURE YOUR GEAR FITS</div>
      </div>
    </>
  );
}

export default Recovery;
