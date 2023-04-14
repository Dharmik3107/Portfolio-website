import React, { useContext, useState } from "react";
import "./Navigation.scss";
import { ReactComponent as DIcon } from "../../assets/DIcon.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";
import { ToggleContext } from "../../contexts/toggleContext";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";

const Navigation = () => {
	const path = useLocation().pathname;
	const isHomePage = path === "/";
	const { isToggled, setToggled } = useContext(ToggleContext);
	const [isNavbarOpen, setNavbarOpen] = useState(false);

	const handleClickProfessional = () => {
		setToggled(true);
	};
	const handleClickPersonal = () => {
		setToggled(false);
	};

	const handleNavbarClick = () => {
		setNavbarOpen((isNavbarOpen) => !isNavbarOpen);
	};

	return (
		<div className="navigation-container">
			<button className="round-container">
				<DIcon />
			</button>
			{isHomePage && (
				<div className="toggle-container">
					<div className={`personal-button ${isToggled ? "professional-button" : ""}`}></div>
					<button onClick={handleClickPersonal}>Personal</button>
					<button onClick={handleClickProfessional} className={isToggled ? "active" : ""}>
						Professional
					</button>
				</div>
			)}
			<button className="round-container" onClick={handleNavbarClick}>
				<Hamburger />
			</button>
			<Navbar isOpen={isNavbarOpen} />
		</div>
	);
};

export default Navigation;
