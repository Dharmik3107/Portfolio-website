import React, { useContext } from "react";
import "./Navbar.scss";
import { ToggleContext } from "./../../contexts/toggleContext";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen }) => {
	const { isToggled } = useContext(ToggleContext);

	return (
		<div className={`navbar-container ${isOpen ? "z-10" : "z-1"}`}>
			<Link to="/" className={`${isOpen ? "active" : ""} `}>
				<button className={`round-navitems  `}>
					<p className={`${isToggled ? "gredient-items" : ""}`}>Home</p>
				</button>
			</Link>
			<Link to="/about" className={`${isOpen ? "active" : ""} `}>
				<button className={`round-navitems  `}>
					<p className={`${isToggled ? "gredient-items" : ""}`}>About</p>
				</button>
			</Link>
			<Link to="contact" className={`${isOpen ? "active" : ""} `}>
				<button className={`round-navitems  `}>
					<p className={`${isToggled ? "gredient-items" : ""}`}>Contact</p>
				</button>
			</Link>
		</div>
	);
};

export default Navbar;
