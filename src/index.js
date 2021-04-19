import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import './index.css';
import 'rsuite/dist/styles/rsuite-default.css';
import 'antd/dist/antd.css';
import apolloClient from './apolloClient';

import Routes from './routes';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);
