import React from 'react';
import { Loader } from 'rsuite';
import { gql, graphql, compose } from 'react-apollo';

import { queries } from '../graphql';
import { Courts } from '../components';

function CourtContainer(props) {
  const { allCourtsQuery } = props;

  if (allCourtsQuery.loading) {
    return <Loader backdrop content='loading...' vertical />;
  }

  const { allCourts } = allCourtsQuery;

  const updatedProps = {
    ...props,
    allCourts
  };

  return <Courts {...updatedProps} />;
}

export default compose(
  graphql(gql(queries.allCourts), {
    name: 'allCourtsQuery'
  })
)(CourtContainer);
