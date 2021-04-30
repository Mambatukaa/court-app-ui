import React from 'react';
import { Route } from 'react-router-dom';

import { Courts, CourtDetail } from './containers';

const details = ({ match, location }) => {
  const id = match.params.id;

  return (
    <CourtDetail
      id={id}
      // queryParams={queryString.parse(location.search)}
    />
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  <Route key='home' exact path='/' component={Courts} />,
  <Route
    key='/courtDetail'
    exact
    path='/courtDetails/:id'
    component={details}
  />
];
