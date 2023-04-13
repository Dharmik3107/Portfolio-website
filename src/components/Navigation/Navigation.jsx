import React from "react";
import "./Navigation.scss";
import { ReactComponent as DIcon } from "../../assets/DIcon.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <button className="round-container">
        <DIcon />
      </button>
      <button className="round-container">
        <Hamburger />
      </button>
    </div>
  );
};

export default Navigation;
