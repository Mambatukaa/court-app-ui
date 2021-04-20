import React, { useState } from 'react';
import { Loader } from 'rsuite';
import { gql, graphql, compose } from 'react-apollo';

import { queries, mutations } from '../graphql';
import { Courts } from '../components';
import { alert } from '../../common/utils';

function CourtContainer(props) {
  const [loading, setLoading] = useState(false);

  const {
    allCourtsQuery,
    currentUserQuery,
    removeCourtMutation,
    scheduleAddMutation
  } = props;

  if (allCourtsQuery.loading || currentUserQuery.loading) {
    return <Loader backdrop content='loading...' vertical />;
  }

  const remove = courtId => {
    removeCourtMutation({ variables: { _id: courtId } })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай устлаа');
      })
      .catch(e => {
        alert.error(e);
        setLoading(false);
      });
  };

  const addSchedule = variables => {
    scheduleAddMutation({ variables })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай нэмэгдлээ');
      })
      .catch(e => {
        alert.error(e);
        setLoading(false);
      });
  };

  const allCourts = allCourtsQuery.courts || [];

  const currentUser = currentUserQuery.currentUser || {};

  const updatedProps = {
    ...props,
    allCourts,
    currentUser,
    remove,
    loading,
    addSchedule
  };

  return <Courts {...updatedProps} />;
}

export default compose(
  graphql(gql(queries.allCourts), {
    name: 'allCourtsQuery'
  }),
  graphql(gql(queries.currentUser), {
    name: 'currentUserQuery'
  }),
  graphql(gql(mutations.removeCourt), {
    name: 'removeCourtMutation',
    options: () => ({
      refetchQueries: ['courts']
    })
  }),
  graphql(gql(mutations.schedulesAdd), {
    name: 'scheduleAddMutation'
  })
)(CourtContainer);
