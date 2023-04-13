import React from "react";

import { ReactComponent as Linkedin } from "../../assets/Linkedin.svg";
import { ReactComponent as Github } from "../../assets/Github.svg";
import { ReactComponent as Instagram } from "../../assets/Instagram.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="social-container">
        <a href="https://www.linkedin.com/in/dharmik-abhangi/" target="_blank">
          <Linkedin />
        </a>
        <a href="https://github.com/Dharmik3107" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com/_er.dharmik._/" target="_blank">
          <Instagram />
        </a>
      </div>
      <div className="copyrights">
        Copyright © 2023 Dharmik Abhangi. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
