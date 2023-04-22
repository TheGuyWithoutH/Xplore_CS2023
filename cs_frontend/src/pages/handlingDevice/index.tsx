import React from "react";
import BackButton from "../../components/BackButton";
import Background from "../../components/Background";
import JointPositions from "../../components/JointPositions";
import { Mode } from "../../utils/mode.type";
import styles from "./style.module.sass";
import GamepadHint from "../../components/GamepadHint";
import PageHeader from "../../components/PageHeader";
import DistanceHint from "../../components/DistanceHint";
import CameraView from "../../components/CameraView";
import { Cameras } from "../../utils/cameras.type";
import useCameraManager from "../../hooks/cameraManager";
import Timer from "../../components/Timer";
import { Size } from "../../utils/size.type";

export default ({ mode }: { mode: Exclude<Mode, Mode.SEMI_AUTONOMOUS> }) => {
	const [camera, selectCamera] = useCameraManager(Cameras.CAM1);

	if (mode === Mode.AUTONOMOUS)
		return (
			<div className="page">
				<Background />
				<BackButton />
				<PageHeader
					title="Maintenance"
					settings
					optionTitle="Cameras"
					options={["Camera 1", "Camera 2", "Camera 3"]}
					optionsCallback={selectCamera}
				/>
				<Timer end={Date.now() + 10000} size={Size.SMALL} />
			</div>
		);

	return (
		<div className="page">
			<Background />
			<BackButton />
			<PageHeader
				title="Maintenance"
				settings
				optionTitle="Cameras"
				options={["Camera 1", "Camera 2", "Camera 3"]}
				optionsCallback={selectCamera}
			/>
			<DistanceHint distance={10} />
			<JointPositions />

			<div className={styles.container}>
				<button className={styles.button}>Button 1</button>
				<button className={styles.button}>Button 2</button>
				<button className={styles.button}>Button 3</button>
				<button className={styles.button}>Button 4</button>
				<button className={styles.button}>Button 5</button>
			</div>
			<GamepadHint />

			<Timer end={Date.now() + 10000} size={Size.SMALL} />

			<CameraView camera={camera} />
		</div>
	);
};
