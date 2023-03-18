import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import Map from "../../components/Map";
import { Mode } from "../../utils/mode.type";
import styles from "./style.module.sass";

export default ({ mode }: { mode: Mode }) => {
	return (
		<div className="page center">
			<Background />
			<BackButton />
			<div className={styles.InfoContainer}>
				<Map />
				<div className={styles.Info}>
					<h2 className={styles.InfoTitle}>{mode} Navigation</h2>
					<div className={styles.InfoText}>
						<h3>Current Position</h3>
						<p>Latitude: 0.0</p>
						<p>Longitude: 0.0</p>
						<p>Heading: 0.0</p>
						<h3>Next Goals</h3>
					</div>
				</div>
			</div>
			<div className={styles.ControlsContainer}></div>
		</div>
	);
};
