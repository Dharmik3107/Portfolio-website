import React, { useContext } from "react";
import { ToggleContext } from "../../contexts/toggleContext";

const Span = ({ text }) => {
	const { isToggled } = useContext(ToggleContext);

	return <span className={!isToggled ? "rubberBand" : ""}>{text}</span>;
};

export default Span;
