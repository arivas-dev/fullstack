import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('pages/login/Login'));
const NotFound = lazy(() => import('pages/notFound/NotFound'));
const Register = lazy(() => import('pages/register/Register'));


export const SystemRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route path="*" component={NotFound} />
  </Switch>
);
