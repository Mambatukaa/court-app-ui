import React from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { queries, mutations } from '../graphql';

import { alert } from '../../common/utils';
import UsersList from '../components/UsersList';

const UsersListContainer = props => {
  const { allUsersQuery, userRemoveMutation } = props;

  const removeUser = _id => {
    userRemoveMutation({ variables: { _id } })
      .then(() => {
        alert.success('Амжилттай устгалаа');
      })
      .catch(e => {
        alert.error(e);
      });
  };

  if (allUsersQuery.loading) {
    return null;
  }

  const allUsers = allUsersQuery.allUsers || [];

  const updatedProps = {
    ...props,
    allUsers,
    removeUser
  };

  return <UsersList {...updatedProps} />;
};

export default compose(
  graphql(gql(queries.allUsers), {
    name: 'allUsersQuery'
  }),
  graphql(gql(mutations.userRemove), {
    name: 'userRemoveMutation',
    options: () => ({
      refetchQueries: ['allUsers']
    })
  })
)(UsersListContainer);
