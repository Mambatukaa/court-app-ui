const courtFields = `
    _id
    name
    description

    featuredImage
    parking
    ownerId
    warning
    surface
    format

    location {
      latitude
      longitude
    }
    
    secondaryImages

    courtSchedule {
      startDate
      endDate
      price
      courtId
    }
`;

const allCourts = `
  query courtsMain{
    courtsMain{
        ${courtFields}
    }
}
`;

const users = `
  query allUsers{
    allUsers{
      _id
      username
      role
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

const courtDetail = `
  query courtDetail($_id: String!){
    courtDetail(_id: $_id){
      ${courtFields}
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  allCourts,
  users,
  currentUser,
  courtDetail
};
