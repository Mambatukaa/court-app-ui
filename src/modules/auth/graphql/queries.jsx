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

const currentUserFields = `
      _id
      username
`;

const allCourts = `
  query allCourts{
    allCourts{
        ${courtFields}
    }
}
`;

const currentUser = `
  query currentUser{
    currentUser{
      ${currentUserFields}
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  allCourts,
  currentUser
};
