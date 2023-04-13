import React from "react";
import { useLocation } from "react-router-dom";

const Span = ({ text }) => {
	const path = useLocation().pathname;
	const isProfessional = path === "/professional";

	return <span className={!isProfessional ? "rubberBand" : ""}>{text}</span>;
};

export default Span;
