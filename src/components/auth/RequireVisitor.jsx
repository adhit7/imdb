import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireVisitor = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Outlet />;
  }

  return <Navigate to='/' replace />;
};

export default RequireVisitor;
