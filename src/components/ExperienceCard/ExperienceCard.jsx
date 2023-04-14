import React from "react";
import "./ExperienceCard.scss";
import PestoLogo from "../../assets/PestoLogo.png";

const ExperienceCard = () => {
	return (
		<div className="experience-card">
			<div className="company-details">
				<h1>Full Stack Developer Trainee</h1>
				<h5>Pesto Tech (Remote)</h5>
				<h6>July-2022 to December-2022 </h6>
				<p>&#10022; Learned HTML5, CSS3 and Web Accessibility</p>
				<p>&#10022; Mastered Javascript with advanced concepts like Closures, Promise, Prototypes, AJAX, etc.</p>
				<p>&#10022; Developed skills to create SPA using react, redux and tailwind CSS.</p>
				<p>&#10022; Practiced DSA concepts and exercises to develop Problem-Solving skills.</p>
				<p>&#10022; Developed a handful experience on creating API Using NodeJS</p>
			</div>
			<div className="company-logo">
				<img src={PestoLogo} alt="Pesto" />
			</div>
		</div>
	);
};

export default ExperienceCard;
