import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./style.module.sass";

interface Props {
	x: number;
	y: number;
	o: number;
}

function Card({ x, y, o }: Props) {
	const [visible, setVisible] = useState(true);

	const handleDismiss = () => {
		setVisible(false);
	};

	return (
		<>
			{visible && (
				<div className={styles.cardContainer}>
					<div className={styles.closeButton}>
						<FaTimes
							onClick={handleDismiss}
							style={{
								color: "white",
								cursor: "pointer",
								fontSize: 10,
							}}
						/>
					</div>
					<div>
						<p className={styles.cardText}>
							({x}, {y}, {o}°)
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;
