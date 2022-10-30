import { useStore } from 'effector-react';
import { $scores, deleteDayButtonClicked } from '../model/counter';

export const DailyActivityTable = () => {
  const scores = useStore($scores);
  const days = Object.keys(scores);

  const handleClickDeleteButton = (day: string) => () =>
    deleteDayButtonClicked(day);

  return (
    <div>
      {days.map((day) => (
        <div key={day} className="flex justify-center w-full">
          <span className="p-4 bg-black text-white w-full text-center">
            {day}
          </span>
          <span className="p-4 bg-black text-white w-full text-center">
            {scores[day].counter} / {scores[day].goal}
          </span>
          <button className="p-4" onClick={handleClickDeleteButton(day)}>
            ╳
          </button>
        </div>
      ))}
    </div>
  );
};
