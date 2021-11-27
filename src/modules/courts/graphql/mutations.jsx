const courtParamsDef = `
    $name: String
    $featuredImage: String

    $description: String

    $warning: String
    $parking: String

    $location: LocationInput 

    $ownerId: String
`;

const courtParamsVal = `
    name: $name
    featuredImage: $featuredImage
    description: $description

    warning: $warning
    parking: $parking

    location: $location

    ownerId: $ownerId
`;

const courtsAdd = `
    mutation courtsAdd(${courtParamsDef}){
        courtsAdd(${courtParamsVal}){
            _id
        }
    }
`;

const courtEdit = `
    mutation courtsEdit( $_id: String! ${courtParamsDef}){
        courtsEdit( _id: $_id ${courtParamsVal}){
            _id
        }
    }
`;

const removeCourt = `
    mutation courtsRemove($_id: String!){
        courtsRemove(_id: $_id)
    }
`;

const scheduleParamsDef = `
    $courtId: String!
    $startDate: Date!
    $endDate: Date!
    $price: Int
`;

const scheduleParamsVal = `
    courtId: $courtId
    startDate: $startDate
    endDate: $endDate
    price: $price
`;

const schedulesAdd = `
    mutation schedulesAdd(${scheduleParamsDef}){
        schedulesAdd(${scheduleParamsVal}){
            _id
            courtId
            startDate
            endDate
            price
        }
    }
`;

const schedulesDelete = `
    mutation schedulesDelete($_id: String!){
        schedulesDelete(_id: $_id)
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  courtsAdd,
  removeCourt,
  courtEdit,
  schedulesAdd,
  schedulesDelete
};
