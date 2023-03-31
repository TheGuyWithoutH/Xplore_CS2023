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
				<Button
					text="Button 1"
					size={Size.SMALL}
					theme={Themes.BROWN}
					onClick={() => {}}
					radius={10}
				/>
				<Button
					text="Button 2"
					size={Size.SMALL}
					theme={Themes.BROWN}
					onClick={() => {}}
					radius={10}
				/>
				<Button
					text="Button 3"
					size={Size.SMALL}
					theme={Themes.BROWN}
					onClick={() => {}}
					radius={10}
				/>
				<Button
					text="Button 4"
					size={Size.SMALL}
					theme={Themes.BROWN}
					onClick={() => {}}
					radius={10}
				/>
				<Button
					text="Button 5"
					size={Size.SMALL}
					theme={Themes.BROWN}
					onClick={() => {}}
					radius={10}
				/>
			</div>
		</div>
	);
};
