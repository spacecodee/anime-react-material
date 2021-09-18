import { Navigate } from 'react-router-dom';
import Main from './pages/Main';

const routes = [
  {
    path: 'app',
    element: '',
    children: []
  },
  {
    path: '/',
    element: '',
    children: [
      { path: '/', element: <Main /> },
      { path: '/xd', element: <Navigate to='/app/dashboard' /> },
      { path: '*', element: <Navigate to='/404' /> }
    ]
  }
];

export default routes;
