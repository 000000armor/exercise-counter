import { useEvent, useStore } from 'effector-react';
import { useEffect } from 'react';
import {
  $counter,
  $goal,
  decreaseButtonClicked,
  increaseButtonClicked,
  resetButtonClicked,
  counterPageMounted,
} from '../model/counter';

export const Counter = () => {
  const counter = useStore($counter);
  const goal = useStore($goal);
  const handleCounterPageMount = useEvent(counterPageMounted);

  useEffect(() => {
    handleCounterPageMount();
  }, [handleCounterPageMount]);

  const handleIncreaseButtonClick = () => increaseButtonClicked();

  const handleDecreaseButtonClick = () => decreaseButtonClicked();

  const handleResetButtonClick = () => resetButtonClicked();

  return (
    <div className="mb-6">
      <div className="mb-4">
        <h4 className="text-xl">Counter:</h4>
        <p className="text-3xl">
          {counter}/{goal}
        </p>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleIncreaseButtonClick}
          className="h-20 px-6 font-semibold rounded-md bg-black text-white w-full"
        >
          +
        </button>
        <button
          onClick={handleDecreaseButtonClick}
          className="h-20 px-6 font-semibold rounded-md bg-white text-black border-black border-2 w-full"
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={handleResetButtonClick}
          className="w-full h-14 px-6 font-semibold rounded-md bg-black text-white"
        >
          Reset counter
        </button>
      </div>
    </div>
  );
};
