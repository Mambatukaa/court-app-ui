import React, { useState } from 'react';
import { gql, compose, graphql } from 'react-apollo';
import { SignIn } from '../components';
import { mutations } from '../graphql';

import { alert } from '../../common/utils';

function SignInContainer(props) {
  const [loading, setLoading] = useState(false);
  const { loginMutation, history } = props;

  function login(variables) {
    loginMutation({ variables })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай нэвтэрлээ');
        history.push('/');
      })
      .catch(e => {
        alert.error(e);
      });
    setLoading(false);
  }

  const updatedProps = {
    ...props,
    login,
    loading
  };

  return <SignIn {...updatedProps} />;
}

export default compose(
  graphql(gql(mutations.login), {
    name: 'loginMutation',
    options: () => ({
      refetchQueries: ['currentUser']
    })
  })
)(SignInContainer);
