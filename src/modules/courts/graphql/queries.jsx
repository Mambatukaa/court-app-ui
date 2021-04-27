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
    ownerId

    courtSchedule {
      _id
      day
      courtId
      startTime
      endTime
      price
      bookedPeople
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
