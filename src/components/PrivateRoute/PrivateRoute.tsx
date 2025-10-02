import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoute() {

  const isAuth = false;

  return (
    isAuth ? <Outlet /> : <Navigate to='/login' />
  );
}

export default PrivateRoute;
