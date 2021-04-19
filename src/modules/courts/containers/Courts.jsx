import React from 'react';
import { Loader } from 'rsuite';
import { gql, graphql, compose } from 'react-apollo';

import { queries } from '../graphql';
import { Courts } from '../components';

function CourtContainer(props) {
  const { allCourtsQuery, currentUserQuery } = props;

  if (allCourtsQuery.loading || currentUserQuery.loading) {
    return <Loader backdrop content='loading...' vertical />;
  }

  const allCourts = allCourtsQuery.courts || [];

  const currentUser = currentUserQuery.currentUser || {};

  const updatedProps = {
    ...props,
    allCourts,
    currentUser
  };

  return <Courts {...updatedProps} />;
}

export default compose(
  graphql(gql(queries.allCourts), {
    name: 'allCourtsQuery'
  }),
  graphql(gql(queries.currentUser), {
    name: 'currentUserQuery'
  })
)(CourtContainer);
