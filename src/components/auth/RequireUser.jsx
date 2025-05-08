import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireUser = () => {
  const location = useLocation();

  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Outlet />;
  }

  return <Navigate to='/login' state={{ from: location.pathname }} replace />;
};

export default RequireUser;
