import React from "react";
import logo from "../assets/hiking-26.png";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><img src={logo} alt="logo" className="logo" /></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Class</a></li>
          <li><a href="#">Promo</a></li>
          <li><a href="#">Online Class</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
