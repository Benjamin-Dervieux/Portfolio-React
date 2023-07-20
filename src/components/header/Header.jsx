import React from "react";
import CallToAction from "./CallToAction";
import "./header.css";
import ME from "../../assets/profile.png";
import HeaderSocial from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className=" container header_container">
        <h5>Hello I'm</h5>
        <h1>Benjamin Dervieux</h1>
        <h5 className="text-light">Fullstack Developper</h5>
        <CallToAction />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
