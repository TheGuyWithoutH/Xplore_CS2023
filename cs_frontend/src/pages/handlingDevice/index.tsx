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
import GamepadHint from "../../components/GamepadHint";
import PageHeader from "../../components/PageHeader";
import DistanceHint from "../../components/DistanceHint";
import ModeSlider from "../../components/ModeSlider";
import JointSpeed from "../../components/JointSpeed";

export default ({ mode }: { mode: Exclude<Mode, Mode.SEMI_AUTONOMOUS> }) => {
	return (
		<div className="page">
			<Background />
			<BackButton />
			<PageHeader title="Maintenance" />
			<DistanceHint distance={10} />

			<div className={styles.jointContainer}>
				<JointPositions />
				<JointSpeed joint1={0} joint2={0} joint3={0} joint4={0} joint5={0} joint6={0} />
			</div>

			<div className={styles.globalContainer}>
				<div className={styles.container}>
					<button className={styles.button}>Button 1</button>
					<button className={styles.button}>Button 2</button>
					<button className={styles.button}>Button 3</button>
					<button className={styles.button}>Button 4</button>
					<button className={styles.button}>Button 5</button>
				</div>
				<ModeSlider />
			</div>

			<GamepadHint />
		</div>
	);
};
