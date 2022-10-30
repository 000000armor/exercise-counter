import {
  NavLink,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CounterPage } from './pages/counter-page';
import { DailyActivityPage } from './pages/daily-activity-page';

const defaultClass = 'p-6 w-full text-center';
const activeClass = 'bg-black text-white';

const classNameCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${activeClass} ${defaultClass}` : defaultClass;

const App = () => {
  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <BrowserRouter>
        <nav className="flex justify-between py-4">
          <NavLink to="/counter" className={classNameCallback}>
            Counter
          </NavLink>
          <NavLink to="/daily-activity" className={classNameCallback}>
            Daily Activity
          </NavLink>
        </nav>
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/daily-activity" element={<DailyActivityPage />} />
          <Route path="*" element={<Navigate to="/counter" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
