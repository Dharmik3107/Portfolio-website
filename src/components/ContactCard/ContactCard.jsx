import React, { useState } from "react";
import "./ContactCard.scss";
import InputField from "../InputField/InputField";
import TextArea from "./../TextArea/TextArea";
import Button, { BUTTON_CLASSES } from "../Button/Button";
import { mailer } from "../../utils/mailer";

const initialFormValue = {
	personName: "",
	companyName: "",
	email: "",
	yourRole: "",
	message: "",
};

const ContactCard = () => {
	const [formValue, setFormValue] = useState(initialFormValue);
	const { personName, companyName, email, yourRole, message } = formValue;

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValue({ ...formValue, [name]: value });
	};

	const handleSubmit = () => {};

	return (
		<div className="contact-card">
			<h3 className="contact-card-heading">Fill up Below Form to get in touch with me. Happy to see you here</h3>
			<form onSubmit={handleSubmit}>
				<div className="row">
					<InputField label="Your Name" type="text" name="personName" value={personName} onChange={handleChange} required={true} />
					<InputField label="Your Company" type="text" name="companyName" value={companyName} onChange={handleChange} required={true} />
				</div>
				<div className="row">
					<InputField label="Your Email" type="email" name="email" value={email} onChange={handleChange} required={true} />
					<InputField label="Your Role" type="text" name="yourRole" value={yourRole} onChange={handleChange} required={true} />
				</div>
				<TextArea label="Your Message" name="message" required={true} value={message} />
				<div className="row button-row">
					<Button text="Submit" type="submit" buttonType={BUTTON_CLASSES.yellow} />
					<Button text="Reset" type="reset" buttonType={BUTTON_CLASSES.default} />
				</div>
			</form>
		</div>
	);
};

export default ContactCard;
