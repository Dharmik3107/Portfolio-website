import React, { useEffect, useContext } from "react";
import { ToggleContext } from "../../contexts/toggleContext";
import Navigation from "../Navigation/Navigation";
import "./Landing.scss";
import { Outlet } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Laptop from "../../assets/Laptop.png";
import Footer from "./../Footer/Footer";
import birdAnimation from "../../utils/birdsAnimation";

const Landing = () => {
	const { isToggled } = useContext(ToggleContext);

	useEffect(() => {
		birdAnimation(isToggled);
	}, [isToggled]);

	return (
		<main className="main-body">
			<div className="shape-one" id={isToggled ? "birds-pro" : "birds"}></div>
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
