import React from 'react';
import { Route } from 'react-router-dom';

import { Courts } from './containers';

// eslint-disable-next-line import/no-anonymous-default-export
export default [<Route key='home' exact path='/' component={Courts} />];
