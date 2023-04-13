import React from "react";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import TechStackCard from "../../components/TechStackCard/TechStackCard";

import { projects } from "../../utils/projectData";
import { skills } from "../../utils/skillsData";

import "./Personal.scss";

const Personal = () => {
  return (
    <section className="personal-container">
      <h1 className="category-heading">PROJECTS</h1>
      <div className="cards-container">
        {projects.map((element, index) => {
          return <ProjectCard key={index} data={element} />;
        })}
      </div>
      <h1 className="category-heading">TECH STACK</h1>
      <div className="stack-container">
        {skills.map((element, index) => (
          <TechStackCard key={index} data={element} />
        ))}
      </div>
    </section>
  );
};

export default Personal;
