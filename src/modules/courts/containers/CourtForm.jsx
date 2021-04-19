import React, { useState } from 'react';
import { graphql, gql, compose } from 'react-apollo';

import { CourtForm } from '../components';
import { queries, mutations } from '../graphql';

import { alert } from '../../common/utils';

const CourtFormContainer = props => {
  const [loading, setLoading] = useState(false);
  const { usersQuery, addCourtMutation } = props;

  const addCourt = variables => {
    setLoading(true);

    addCourtMutation({ variables })
      .then(() => {
        alert.success('Амжилттай');
      })
      .catch(e => {
        alert.error(e);
        setLoading(false);
      });
  };

  if (usersQuery.loading) {
    return null;
  }

  const { allUsers } = usersQuery;

  const updatedProps = {
    ...props,
    allUsers,
    loading,
    addCourt
  };

  return <CourtForm {...updatedProps} />;
};

export default compose(
  graphql(gql(queries.users), {
    name: 'usersQuery'
  }),
  graphql(gql(mutations.addCourt), {
    name: 'addCourtMutation',
    options: () => ({
      refetchQueries: ['allCourts']
    })
  })
)(CourtFormContainer);
