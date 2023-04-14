import React from "react";
import "./TextArea.scss";

const TextArea = ({ label, ...otherProps }) => {
	return (
		<div className="text-area">
			<textarea cols="30" rows="10" {...otherProps}></textarea>
			<label htmlFor={otherProps.name} className={`${otherProps.value.length ? "shrink" : ""}`}>
				{label}
			</label>
		</div>
	);
};

export default TextArea;
