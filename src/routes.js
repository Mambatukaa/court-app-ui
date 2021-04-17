import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import AuthRoutes from './modules/auth/routes';

const Routes = () => (
  <BrowserRouter>
    <Switch>{AuthRoutes}</Switch>
  </BrowserRouter>
);

export default Routes;
