import React from 'react';
import { Route } from 'react-router-dom';

import { SignIn, SignUp } from './containers';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route key='/' exact path='/' component={SignIn} />,
  <Route key='/sign-up' exact path='/sign-up' component={SignUp} />
];
