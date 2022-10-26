import { createBrowserRouter } from 'react-router-dom';
import { CounterPage } from '../pages/counter-page';
import { DailyActivityPage } from '../pages/daily-activity-page/daily-activity-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CounterPage />,
  },
  {
    path: '/daily-activity',
    element: <DailyActivityPage />,
  },
]);
