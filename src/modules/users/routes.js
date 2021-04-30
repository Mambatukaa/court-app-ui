import React from 'react';

import { Route } from 'react-router-dom';
import UsersList from './containers/UsersList';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route key='/users' exact path='/users' component={UsersList} />
];
