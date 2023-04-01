import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import Slider from "../../components/Slider";
import Button from "../../components/Button";
import JointPositions from "../../components/JointPositions";
import { Mode } from "../../utils/mode.type";
import styles from "./style.module.sass";
import { Themes } from "../../utils/themes";
import { Size } from "../../utils/size.type";

export default ({ mode }: { mode: Exclude<Mode, Mode.SEMI_AUTONOMOUS> }) => {
	return (
		<div className="page">
			<Background />
			<BackButton />
			<JointPositions />

			<div className={styles.container}>
				<button className={styles.button}>Button 1</button>
				<button className={styles.button}>Button 2</button>
				<button className={styles.button}>Button 3</button>
				<button className={styles.button}>Button 4</button>
				<button className={styles.button}>Button 5</button>
			</div>
		</div>
	);
};
