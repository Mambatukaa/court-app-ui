import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { MainLayout } from './modules/layouts/containers';

const Routes = () => {
  <BrowserRouter>
    <MainLayout>
      <Switch></Switch>
    </MainLayout>
  </BrowserRouter>;
};

export default Routes;
