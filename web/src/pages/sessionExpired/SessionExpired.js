import { logout } from 'store/actions/userActions';
import { Redirect } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const SessionExpired = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <Redirect to="/login" />;
}

export default SessionExpired;
