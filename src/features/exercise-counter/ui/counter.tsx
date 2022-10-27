import { useStore } from 'effector-react';
import {
  $counter,
  decreaseButtonClicked,
  increaseButtonClicked,
  resetButtonClicked,
} from '../model/counter';

export const Counter = () => {
  const counter = useStore($counter);

  const handleIncreaseButtonClick = () => increaseButtonClicked();

  const handleDecreaseButtonClick = () => decreaseButtonClicked();

  const handleResetButtonClick = () => resetButtonClicked();

  return (
    <div>
      <div className="mb-4">
        <h4 className="text-xl">Counter:</h4>
        <p className="text-3xl">{counter}</p>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleIncreaseButtonClick}
          className="h-20 w-20 px-6 font-semibold rounded-md bg-black text-white"
        >
          +
        </button>
        <button
          onClick={handleDecreaseButtonClick}
          className="h-20 w-20 px-6 font-semibold rounded-md bg-white text-black border-black border-2"
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
