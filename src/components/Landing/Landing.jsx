import React from "react";

import Navigation from "../Navigation/Navigation";
import "./Landing.scss";
import { Outlet } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Laptop from "../../assets/Laptop.png";
import Footer from "./../Footer/Footer";

const Landing = () => {
  return (
    <main className="main-body">
      <div className="shape-one" id="birds"></div>
      <div className="landing-container">
        <Navigation />
        <Introduction />
        <a href="https://www.linkedin.com/in/dharmik-abhangi/" target="_blank">
          <img src={Laptop} alt="Laptop Coffee" className="laptop-image" />
        </a>
      </div>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Landing;
