import React from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { queries } from '../graphql';

import { CourtDetail } from '../components';

const CourtDetailContainer = props => {
  const { courtDetailQuery } = props;

  if (courtDetailQuery.loading) {
    return null;
  }

  const courtDetail = courtDetailQuery.courtDetail || {};

  console.log(courtDetail);

  return <CourtDetail />;
};

export default compose(
  graphql(gql(queries.courtDetail), {
    name: 'courtDetailQuery',
    options: ({ id }) => ({
      variables: {
        _id: id
      }
    })
  })
)(CourtDetailContainer);
