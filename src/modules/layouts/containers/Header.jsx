import React from 'react';
import { Header } from '../components';
import { withCurrentUser } from '../../auth/containers';

function HeaderContainer(props) {
  return <Header {...props} />;
}

export default withCurrentUser(HeaderContainer);
