import React from 'react';
import { graphql, gql, compose } from 'react-apollo';

import { Header } from '../components';
import { withCurrentUser } from '../../auth/containers';
import mutations from '../graphql/mutations';

function HeaderContainer(props) {
  const { logoutMutation } = props;

  function logout() {
    logoutMutation()
      .then(() => {
        localStorage.removeItem('locale');
        window.location.href = '/sign-in';
      })
      .catch(e => {
        console.log(e);
      });
  }

  const updatedProps = {
    ...props,
    logout
  };

  return <Header {...updatedProps} />;
}

const Layout = compose(
  graphql(gql(mutations.logout), {
    name: 'logoutMutation'
  })
)(HeaderContainer);

export default withCurrentUser(Layout);
