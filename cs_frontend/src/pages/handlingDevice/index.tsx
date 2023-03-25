import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import NotAvailable from "../../components/NotAvailable";
import { Mode } from "../../utils/mode.type";

export default ({ mode }: { mode: Exclude<Mode, Mode.SEMI_AUTONOMOUS> }) => {
	return (
		<div className="page">
			<Background />
			<BackButton />
			<NotAvailable />
		</div>
	);
};
