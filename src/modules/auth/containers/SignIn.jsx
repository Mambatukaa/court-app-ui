import React from 'react';
import { gql, compose, graphql } from 'react-apollo';
import { SignIn } from '../components';
import { queries } from '../graphql';

function SignInContainer(props) {
  return <SignIn />;
}

export default compose(
  graphql(gql(queries.allCourts), {
    name: 'allCourtsQuery'
  })
)(SignInContainer);
