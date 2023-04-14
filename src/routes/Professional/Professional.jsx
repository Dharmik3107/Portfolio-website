import React from "react";
import "./Professional.scss";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";

const Professional = () => {
	return (
		<section className="professional-container">
			<h1 className="category-heading">EXPERIENCE</h1>
			<ExperienceCard />
		</section>
	);
};

export default Professional;
