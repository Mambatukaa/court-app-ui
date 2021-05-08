import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header } from './modules/layouts/containers';
import AuthRoutes from './modules/auth/routes';
import CourtsRoutes from './modules/courts/routes';
import UsersRoutes from './modules/users/routes';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      {AuthRoutes}
      {CourtsRoutes}
      {UsersRoutes}
    </Switch>
  </Router>
);

export default Routes;
