import React, { useState } from 'react';
import { gql, compose, graphql } from 'react-apollo';
import { SignIn } from '../components';
import { mutations, queries } from '../graphql';

import { alert } from '../../common/utils';

function SignInContainer(props) {
  const [loading, setLoading] = useState(false);
  const { loginMutation, history, currentUserQuery } = props;

  function login(variables) {
    loginMutation({ variables })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай нэвтэрлээ');
        history.push('/courts');
      })
      .catch(e => {
        alert.error(e);
      });
    setLoading(false);
  }

  if (currentUserQuery.loading) {
    return null;
  }

  const currentUser = currentUserQuery.currentUser || {};

  const updatedProps = {
    ...props,
    login,
    loading,
    currentUser
  };

  return <SignIn {...updatedProps} />;
}

export default compose(
  graphql(gql(mutations.login), {
    name: 'loginMutation',
    options: () => ({
      refetchQueries: ['currentUser']
    })
  }),
  graphql(gql(queries.currentUser), {
    name: 'currentUserQuery',
    options: () => ({
      fetchPolicy: 'network-only'
    })
  })
)(SignInContainer);
