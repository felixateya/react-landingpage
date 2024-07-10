import React from "react";
import image from "../Images/logo.webp";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
function Navbar() {
  // document.getElementById('img').src = image
  return (
    <div id="Navbar" className="Navbar">
      {/* <div className="logo"></div> */}
      {/* <ScrollLink to="Navbar"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-50}
            className="logo" >
<img id="img" src={image} alt="" />
      </ScrollLink> */}
      <ScrollLink
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-50}
        to="home"
      >
        <img id="img" src={image} alt="" />
      </ScrollLink>
      <ul>
        {/* <ScrollLink></ScrollLink> */}
        <ScrollLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          to="investing"
        >
          Investing
        </ScrollLink>
        <ScrollLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          to="options"
        >
          Options
        </ScrollLink>
        <ScrollLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          to="startup"
        >
          Startup
        </ScrollLink>
        <ScrollLink
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-50}
          to="overview"
        >
          Overview
        </ScrollLink>
      </ul>
      <div className="log">
        <a href="...">Login</a>
        <button id="signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
