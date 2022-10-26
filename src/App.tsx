import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
