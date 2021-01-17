import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PrivateRoute = ({ component, path, exact, ...props }) => {
  const { data } = useSelector(s => s.user.login);

  if (!data) {
    return <Redirect to="/login" />
  } else {
    return <Route exact component={component} path={path} {...props} />;
  }

}
