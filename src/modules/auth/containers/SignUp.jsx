import React, { useState } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { SignUp } from '../components';
import { mutations } from '../graphql';

function SignUpContainer(props) {
  const [loading, setLoading] = useState(false);
  const { signUpMutation } = props;

  const signUp = variables => {
    setLoading(true);

    signUpMutation({ variables })
      .then(({ data }) => {
        console.log(data);
      })
      .catch(e => {
        console.log(e);
        setLoading(false);
      });
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
