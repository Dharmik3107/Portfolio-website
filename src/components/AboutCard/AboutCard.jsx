import React from "react";
import "./AboutCard.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BUTTON_CLASSES } from "../Button/Button";

const AboutCard = () => {
	return (
		<div className="about-card">
			<h3 className="ram">Jay Shree Ram</h3>
			<h1>Abhangi Dharmik Mansukhbhai</h1>
			<h3>Full Stack Developer</h3>
			<h6 className="graduation">Graduation Details</h6>
			<h3>Bachelor of Mechanical Engineering</h3>
			<h6>Gujarat Technological University, Ahmedabad, Gujarat</h6>
			<h6>July 2018 - April 2022</h6>
			<h5 className="career-switch">Career Switch</h5>
			<p>
				I decided to switch my career from mechanical engineering to programming because of my strong passion and interest in programming. In my second year of studies, I began learning
				Python, which sparked a desire to create a project that would assist frontline workers during the COVID-19 pandemic. Through watching online tutorials, I was able to complete my first
				machine learning project using Python.
			</p>
			<p>
				I further expanded my programming skills by learning Arduino programming to control my final year project, the nursing robot. Through my dedication and hard work, I successfully
				created a functioning robot and was awarded full marks for my project.
			</p>
			<p>
				a relative who was an alumni of Pesto Tech referred me to the company. I joined Pesto Tech as a trainee to gain knowledge about website development. I worked tirelessly for six months,
				completing all the assignments and projects assigned to me.
			</p>
			<p>
				After my stint at Pesto Tech, I joined the ZeroToMastery community to further hone my programming skills. Through their community lectures, I have mastered React, Node, JavaScript, and
				Testing. Currently, I am focused on learning Typescript through their community resources.
			</p>
			<a href="/Resume-Dev-Dharmik-Abhangi.pdf" download="Resume-Dev-Dharmik-Abhangi.pdf">
				<Button text="Download Resume" buttonType={BUTTON_CLASSES.yellow} />
			</a>
		</div>
	);
};

export default AboutCard;
