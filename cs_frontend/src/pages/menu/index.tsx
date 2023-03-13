import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import Timer from "../../components/Timer";
import styles from "./style.module.sass";

export default () => {
	return (
		<div className={`page center`}>
			<Background />
			<BackButton />
			<Timer end={Date.now() + 10000} />
			<h2>Astra</h2>
		</div>
	);
};
