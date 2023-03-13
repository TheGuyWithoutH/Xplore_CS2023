import React, { useEffect, useState } from "react";
import styles from "./style.module.sass";
import { Status } from "../../utils/status.type";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Replay10Icon from "@mui/icons-material/Replay10";
import PersonIcon from "@mui/icons-material/Person";
import {
	Battery2Bar,
	Battery0Bar,
	Battery1Bar,
	Battery3Bar,
	Battery4Bar,
	Battery5Bar,
	Battery6Bar,
	BatteryFull,
} from "@mui/icons-material";

const Timer = ({
	end,
	onFinished,
	status = Status.IDLE,
	connection = 1,
	battery = 100,
}: {
	end: EpochTimeStamp;
	onFinished?: () => void;
	status?: Status;
	connection?: number;
	battery?: number;
}) => {
	const [endTime, setEndTime] = useState(0); // end time in milliseconds
	const [minutes, setMinutes] = useState(0); // minutes left
	const [seconds, setSeconds] = useState(0); // seconds left
	const [finished, setFinished] = useState(false);
	const [active, setActive] = useState(true);

	const getTime = () => {
		const time = endTime - Date.now();

		if (time <= 0) {
			setFinished(true);
			setMinutes(0);
			setSeconds(0);
			return;
		}

		setMinutes(Math.floor((time / 1000 / 60) % 60));
		setSeconds(Math.floor((time / 1000) % 60));
		setFinished(false);
	};

	useEffect(() => {
		let interval: NodeJS.Timer;
		if (!finished && active) {
			interval = setInterval(() => getTime(), 1000);
		}

		return () => clearInterval(interval);
	}, [endTime, finished, active]);

	const changeTime = (minutes: number, seconds: number) => {
		if (minutes >= 0 && seconds >= 0 && seconds < 60)
			setEndTime(Date.now() + minutes * 60000 + seconds * 1000);
		getTime();
	};

	React.useEffect(() => {
		if (finished && onFinished) {
			onFinished();
			console.log("finished");
		}
	}, [finished, onFinished]);

	return (
		<div className={styles.timer}>
			<div className={styles.batteryInfos}>
				<p className={styles.battery}>{battery}%</p>
				<div className={styles.batteryIcon}>
					<BatteryFull className={styles.icon} />
				</div>
			</div>
			<div className={styles.timeInfos}>
				<div className={styles.time}>
					<input
						type="text"
						value={timeRepresentation(minutes)}
						onChange={(e) => changeTime(parseInt(e.target.value), seconds)}
						className={styles.input}
					/>
					<p className={styles.comma}>:</p>
					<input
						type="text"
						value={timeRepresentation(seconds)}
						onChange={(e) => changeTime(minutes, parseInt(e.target.value))}
						className={styles.input}
					/>
					<p className={styles.status} />
				</div>
				<div className={styles.controls}>
					<button className={styles.button} onClick={() => setActive(!active)}>
						{active ? (
							<PauseIcon className={styles.icon} />
						) : (
							<PlayArrowIcon className={styles.icon} />
						)}
					</button>
					<button
						className={styles.button}
						onClick={() => changeTime(minutes, seconds + 10)}
					>
						<Replay10Icon className={styles.icon} />
					</button>
				</div>
			</div>
			<div className={styles.connections}>
				<p className={styles.connectionsText}>{connection}</p>
				<div className={styles.connectionsIcon}>
					<PersonIcon className={styles.icon} />
				</div>
			</div>
		</div>
	);
};

export default Timer;

////////////////////////////METHODS///////////////////////////

const timeRepresentation = (time: number) => {
	if (time < 10) {
		return `0${time}`;
	} else {
		return time.toString();
	}
};
