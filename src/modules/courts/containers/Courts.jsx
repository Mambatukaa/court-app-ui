import React from 'react';
import { gql, graphql, compose } from 'react-apollo';

import { queries } from '../graphql';
import { Courts } from '../components';

function CourtContainer(props) {
  return <Courts />;
}

export default compose(
  graphql(gql(queries.allCourts), {
    name: 'allCourtsQuery'
  })
)(CourtContainer);
