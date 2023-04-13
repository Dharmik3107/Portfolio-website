import React from "react";

import "./TechStackCard.scss";

const TechStackCard = ({ data }) => {
  const { image, skillName } = data;

  return (
    <div className="skill-card">
      <img src={image} alt={skillName} />
    </div>
  );
};

export default TechStackCard;
