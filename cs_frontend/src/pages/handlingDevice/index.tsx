import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import NotAvailable from "../../components/NotAvailable";

export default () => {
	return (
		<div className="page">
			<Background />
			<BackButton />
			<NotAvailable />
		</div>
	);
};
