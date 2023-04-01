import React from "react";
import styles from "./style.module.sass";

const PageHeader = ({
	title,
	options = [],
	optionsCallback = () => {},
	settings = false,
	settingsCallback = () => {},
}: {
	title: string;
	options?: string[];
	optionsCallback?: () => void;
	settings?: boolean;
	settingsCallback?: () => void;
}) => {
	return (
		<div className={styles.Container}>
			<h2 className={styles.Title}>{title}</h2>
			<div className={styles.PageOptions}></div>
		</div>
	);
};

export default PageHeader;
