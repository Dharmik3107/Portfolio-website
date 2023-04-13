import React from "react";
import "./ProjectCard.scss";
import Button, { BUTTON_CLASSES } from "../Button/Button";

const ProjectCard = ({ data }) => {
  const {
    logoUrl,
    title,
    subtitle,
    description,
    websiteUrl,
    githubUrl,
    demoImageUrl,
  } = data;

  return (
    <div className="card-body">
      <div className="porject-information">
        <img src={logoUrl} alt="HazguardLogo" />
        <h1>{title}</h1>
        <h5>{subtitle}</h5>
        <p>{description}</p>
        <div className="card-buttons">
          <a href={websiteUrl} target="_blank">
            <Button text="Checkout Live" buttonType={BUTTON_CLASSES.default} />
          </a>
          <a href={githubUrl} target="_blank">
            <Button text="Github Repo" buttonType={BUTTON_CLASSES.yellow} />
          </a>
        </div>
      </div>
      <div className="image-container">
        <img src={demoImageUrl} alt="image" className="project-image" />
      </div>
    </div>
  );
};

export default ProjectCard;
