import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Login = lazy(() => import('pages/login/Login'));
const NotFound = lazy(() => import('pages/notFound/NotFound'));


export const SystemRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);
