import React from "react";
import "./Contact.scss";
import ContactCard from "../../components/ContactCard/ContactCard";

const Contact = () => {
	return (
		<div className="contact-container">
			<h1 className="category-heading">CONTACT ME</h1>
			<ContactCard />
		</div>
	);
};

export default Contact;
