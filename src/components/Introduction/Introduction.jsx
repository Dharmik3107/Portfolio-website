import React from "react";
import Button from "../Button/Button";

import { ReactComponent as Location } from "../../assets/Location.svg";
import { BUTTON_CLASSES } from "../Button/Button";

import "./Introduction.scss";
import Span from "../Span/Span";

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1>
        <Span text="D" />
        <Span text="h" />
        <Span text="a" />
        <Span text="r" />
        <Span text="m" />
        <Span text="i" />
        <Span text="k" />
        &nbsp;
        <Span text="A" />
        <Span text="b" />
        <Span text="h" />
        <Span text="a" />
        <Span text="n" />
        <Span text="g" />
        <Span text="i" />
      </h1>
      <h4>Full Stack Developer</h4>
      <div className="location-container">
        <Location />
        <h6>Surat,Gujarat</h6>
      </div>

      <Button text="Hire Me!" buttonType={BUTTON_CLASSES.yellow} />
    </div>
  );
};

export default Introduction;
