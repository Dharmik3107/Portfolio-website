import React from "react";
import "./InputField.scss";

const InputField = ({ label, ...otherProps }) => {
	return (
		<div className="input-field">
			<input {...otherProps} />
			<label htmlFor={otherProps.name} className={`${otherProps.value.length ? "shrink" : ""}`}>
				{label}
			</label>
		</div>
	);
};

export default InputField;
