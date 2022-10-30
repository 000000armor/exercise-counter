import React from 'react';
import { useStore } from 'effector-react';
import { $goal, goalChanged, goalFieldBlurred } from '../model/counter';

export const Goal = () => {
  const goal = useStore($goal);

  const handleGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.replace(/\D/g, '');
    goalChanged(result);
  };

  const handleGoalBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      goalFieldBlurred();
    }
  };

  return (
    <div>
      <h4 className="text-xl">Goal</h4>
      <input
        className="block p-2 mb-6 w-full h-14 text-sm text-white bg-black rounded-lg border border-white focus:ring-white focus:border-white"
        onChange={handleGoalChange}
        onBlur={handleGoalBlur}
        value={goal}
      />
    </div>
  );
};
