import React from 'react';
import { Route } from 'react-router-dom';

import { Courts, CourtDetail } from './containers';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route key='court' exact path='/' component={Courts} />,
  <Route
    key='/courtDetail'
    exact
    path='/courtDetails/:id'
    component={CourtDetail}
  />
];
