import React, { useState } from "react";

type Goal = { x: number; y: number; o: number };

export const useGoalTracker = () => {
	const [goals, setGoals] = useState<Goal[]>([]);

	const addGoal = (x: number, y: number, o: number) => {
		setGoals([...goals, { x, y, o }]);
	};

	const resetGoals = () => {
		setGoals([]);
	};

	return { goals, addGoal, resetGoals };
};
