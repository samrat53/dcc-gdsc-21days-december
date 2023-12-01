
import './App.css'
import AdminDashboard from './ui/AdminDashboard'
import UserDashBoard from './ui/UserDashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error'
import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/admin',
        element: <AdminDashboard />,
      },
      {
        path: '/user',
        element: <UserDashBoard/>,
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
