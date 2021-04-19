const courtFields = `
    _id
    createdAt
    name
    shortName
    price
    description
    warning
    parking
    courtDetail
    image 
    location {
        lat
        lng
      }
`;

const allCourts = `
  query allCourts{
    allCourts{
        ${courtFields}
    }
}
`;

const users = `
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
export default {
  allCourts,
  users
};
