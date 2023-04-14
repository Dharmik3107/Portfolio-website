import React, { useContext } from "react";
import Button from "../Button/Button";
import { ReactComponent as Location } from "../../assets/Location.svg";
import { BUTTON_CLASSES } from "../Button/Button";
import { ToggleContext } from "../../contexts/toggleContext";
import "./Introduction.scss";
import Span from "../Span/Span";
import { Link, useLocation } from "react-router-dom";

const Introduction = () => {
	const { isToggled } = useContext(ToggleContext);

	const path = useLocation().pathname;
	const isContactPage = path === "/contact";

	return (
		<div className="introduction-container">
			<h1 className={`${isToggled ? "active" : ""}`}>
				<Span text="D" />
				<Span text="h" />
				<Span text="a" />
				<Span text="r" />
				<Span text="m" />
				<Span text="i" />
				<Span text="k" />
				&nbsp;
				<Span text="A" />
				<Span text="b" />
				<Span text="h" />
				<Span text="a" />
				<Span text="n" />
				<Span text="g" />
				<Span text="i" />
			</h1>
			<h4 className={`${isToggled ? "active" : ""}`}>Full Stack Developer</h4>
			<div className="location-container">
				<Location />
				<h6 className={`${isToggled ? "active" : ""}`}>Surat,Gujarat</h6>
			</div>

			{!isContactPage && (
				<Link to="/contact">
					<Button text="Hire Me!" buttonType={BUTTON_CLASSES.yellow} />
				</Link>
			)}
		</div>
	);
};

export default Introduction;
