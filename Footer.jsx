import React from "react";
import logo from "../assets/hiking-26.png";

function Footer() {
  return (
    <footer>
      <div className="main-content">
        <div className="about-section">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <h2>About</h2>
          <ul>
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
        </div>

        <div>
          <h2>About</h2>
          <ul>
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
        </div>

        <div>
          <h2>About</h2>
          <ul>
            <li>Team</li>
            <li>Join us</li>
            <li>Ethic</li>
            <li>Goals</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
