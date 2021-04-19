import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { Loader } from 'rsuite';
import { queries } from '../graphql';

const withCurrentUser = Component => {
  const Container = props => {
    const { currentUserQuery } = props;

    if (currentUserQuery.loading) {
      return (
        <div id='loaderInverseWrapper' style={{ height: 200 }}>
          <Loader inverse center content='loading...' />
        </div>
      );
    }

    const updatedProps = {
      ...props,
      currentUser: currentUserQuery.currentUser
    };

    return <Component {...updatedProps} />;
  };

  return compose(
    graphql(gql(queries.currentUser), {
      name: 'currentUserQuery'
    })
  )(Container);
};

export default withCurrentUser;
