const courtFields = `
    _id
    createdAt
    name
    description
    slotSize
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
  query courts{
    courts{
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

const currentUser = `
  query currentUser{
    currentUser{
      _id
      username
      role
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  allCourts,
  users,
  currentUser
};
