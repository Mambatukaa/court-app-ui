import React, { useState } from 'react';
import { graphql, gql, compose } from 'react-apollo';

import { CourtForm } from '../components';
import { queries, mutations } from '../graphql';

import { alert } from '../../common/utils';

const CourtFormContainer = props => {
  const [loading, setLoading] = useState(false);
  const {
    usersQuery,
    addCourtMutation,
    courtEditMutation,
    currentUserQuery
  } = props;

  if (currentUserQuery.loading) {
    return null;
  }

  const currentUser = currentUserQuery.currentUser || {};

  const addCourt = variables => {
    addCourtMutation({ variables })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай');
      })
      .catch(e => {
        alert.error(e);
      });
    setLoading(false);
  };

  const editCourt = (_id, variables) => {
    setLoading(true);

    courtEditMutation({
      variables: {
        _id,
        name: variables.name,
        image: variables.image,

        description: variables.description,
        slotSize: variables.slotSize,

        warning: variables.warning,
        parking: variables.parking,

        courtDetail: variables.courtDetail,

        lat: variables.lat,
        lng: variables.lng,

        ownerId: variables.ownerId
      }
    })
      .then(() => {
        setLoading(true);
        alert.success('Амжилттай засагдлаа');
      })
      .catch(e => {
        alert.error(e);
      });
    setLoading(false);
  };

  if (usersQuery.loading) {
    return null;
  }

  const allUsers = usersQuery.allUsers || [];

  const updatedProps = {
    ...props,
    allUsers,
    loading,
    addCourt,
    editCourt,
    currentUser
  };

  return <CourtForm {...updatedProps} />;
};

export default compose(
  graphql(gql(queries.users), {
    name: 'usersQuery'
  }),
  graphql(gql(queries.currentUser), {
    name: 'currentUserQuery'
  }),
  graphql(gql(mutations.addCourt), {
    name: 'addCourtMutation',
    options: () => ({
      refetchQueries: ['courts']
    })
  }),
  graphql(gql(mutations.courtEdit), {
    name: 'courtEditMutation',
    options: () => ({
      refetchQueries: ['courts']
    })
  })
)(CourtFormContainer);
