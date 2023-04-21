import React, { useEffect, useState } from "react";
import { drawPoint } from "../components/MAP2";

type Goal = { x: number; y: number; o: number };

export const useGoalTracker = () => {
	const [goals, setGoals] = useState<Goal[]>([]);

	const addGoal = (x: number, y: number, o: number) => {
		setGoals([...goals, { x, y, o }]);
	};

	const resetGoals = () => {
		setGoals([]);
	};

	useEffect(() => {
		goals.forEach((goal) => {
			drawPoint(goal.x, goal.y);
		});
	}, [goals]);

	return { goals, addGoal, resetGoals };
};
