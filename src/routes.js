import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Header } from './modules/layouts/components';
import AuthRoutes from './modules/auth/routes';
import CourtsRoutes from './modules/courts/routes';

const Routes = () => (
  <Router>
    <Header />
    <div>
      <Switch>
        {AuthRoutes}
        {CourtsRoutes}
      </Switch>
    </div>
  </Router>
);

export default Routes;
