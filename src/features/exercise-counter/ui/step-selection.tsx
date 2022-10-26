import { useStore } from 'effector-react';
import React from 'react';
import { $step, stepSelected } from '../model/counter';

const options = [5, 10, 50, 100];

export const StepSelection = () => {
  const step = useStore($step);

  const handleStepChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    stepSelected(event.target.value);

  return (
    <div>
      <h4>Step</h4>
      <select
        value={step}
        onChange={handleStepChange}
        className="block p-2 mb-6 w-full text-sm text-white bg-black rounded-lg border border-white focus:ring-white focus:border-white"
      >
        {options.map((optionValue) => (
          <option key={optionValue}>{optionValue}</option>
        ))}
      </select>
    </div>
  );
};
