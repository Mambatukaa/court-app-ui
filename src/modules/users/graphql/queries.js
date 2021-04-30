const allUsers = `
query allUsers{
  allUsers{
    _id
    username
    email
    role
    phone
  }
}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { allUsers };
