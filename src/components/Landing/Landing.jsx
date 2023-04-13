import React, { useEffect, useContext } from "react";
import { ToggleContext } from "../../contexts/toggleContext";
import Navigation from "../Navigation/Navigation";
import "./Landing.scss";
import { Outlet } from "react-router-dom";
import Introduction from "../Introduction/Introduction";
import Laptop from "../../assets/Laptop.png";
import Footer from "./../Footer/Footer";

const Landing = () => {
	const { isToggled } = useContext(ToggleContext);

	useEffect(() => {
		if (isToggled) {
			VANTA.BIRDS({
				el: "#birds-pro",
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color1: 0x8075ff,
				color2: 0xff7171,
				backgroundColor: 0x2f3061,
				birdSize: 2.6,
				wingSpan: 16.0,
				speedLimit: 3.0,
				separation: 88.0,
				cohesion: 1.0,
				quantity: 2.0,
			});
		} else {
			VANTA.BIRDS({
				el: "#birds",
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color1: 0xeceff1,
				color2: 0xffffff,
				backgroundColor: 0x2f3061,
				birdSize: 2.6,
				wingSpan: 16.0,
				speedLimit: 3.0,
				separation: 88.0,
				cohesion: 1.0,
				quantity: 2.0,
			});
		}
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
