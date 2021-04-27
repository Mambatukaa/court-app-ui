import React from 'react';
import { graphql, gql, compose } from 'react-apollo';
import { queries, mutations } from '../graphql';

import { CourtDetail } from '../components';
import { alert } from '../../common/utils';

const CourtDetailContainer = props => {
  const {
    courtDetailQuery,
    scheduleAddMutation,
    scheduleDeleteMutation
  } = props;

  if (courtDetailQuery.loading) {
    return null;
  }

  const courtDetail = courtDetailQuery.courtDetail || {};

  const addSchedule = variables => {
    scheduleAddMutation({ variables })
      .then(() => {
        alert.success('Амжилттай нэмэгдлээ');
      })
      .catch(e => {
        alert.error(e);
      });
  };

  const deleteSchedule = variables => {
    scheduleDeleteMutation({ variables })
      .then(() => {
        alert.success('Амжилттай устгалаа');
      })
      .catch(e => {
        alert.error(e);
      });
  };

  const updatedProps = {
    ...props,
    courtDetail,
    addSchedule,
    deleteSchedule
  };

  return <CourtDetail {...updatedProps} />;
};

export default compose(
  graphql(gql(queries.courtDetail), {
    name: 'courtDetailQuery',
    options: ({ id }) => ({
      variables: {
        _id: id
      }
    })
  }),
  graphql(gql(mutations.schedulesAdd), {
    name: 'scheduleAddMutation',
    options: () => ({
      refetchQueries: ['courtDetail']
    })
  }),
  graphql(gql(mutations.schedulesDelete), {
    name: 'scheduleDeleteMutation',
    options: () => ({
      refetchQueries: ['courtDetail']
    })
  })
)(CourtDetailContainer);
