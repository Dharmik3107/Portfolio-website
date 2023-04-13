import React, { useContext, useState } from "react";
import "./Navigation.scss";
import { ReactComponent as DIcon } from "../../assets/DIcon.svg";
import { ReactComponent as Hamburger } from "../../assets/Hamburger.svg";
import { ToggleContext } from "../../contexts/toggleContext";

const Navigation = () => {
	const { isToggled, setToggled } = useContext(ToggleContext);

	const handleClickProfessional = () => {
		setToggled(true);
	};
	const handleClickPersonal = () => {
		setToggled(false);
	};

	return (
		<div className="navigation-container">
			<button className="round-container">
				<DIcon />
			</button>
			<div className="toggle-container">
				<div className={`personal-button ${isToggled ? "professional-button" : ""}`}></div>
				<button onClick={handleClickPersonal}>Personal</button>
				<button onClick={handleClickProfessional} className={isToggled ? "active" : ""}>
					Professional
				</button>
			</div>
			<button className="round-container">
				<Hamburger />
			</button>
		</div>
	);
};

export default Navigation;
