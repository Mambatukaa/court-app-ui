import React, { useState } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { SignUp } from '../components';
import { mutations } from '../graphql';
import { alert } from '../../common/utils';

function SignUpContainer(props) {
  const [loading, setLoading] = useState(false);
  const { signUpMutation, history } = props;

  const signUp = variables => {
    setLoading(true);

    signUpMutation({ variables })
      .then(() => {
        setLoading(true);
        alert.success('Бүртгэл амжилттай');
        history.push('/sign-in');
      })
      .catch(e => {
        alert.error(e);
      });
    setLoading(false);
  };

  const updatedProps = {
    ...props,
    signUp,
    loading
  };

  return <SignUp {...updatedProps} />;
}

export default compose(
  graphql(gql(mutations.signUp), {
    name: 'signUpMutation'
  })
)(SignUpContainer);
