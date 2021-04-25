const courtFields = `
    _id

    name
    image
    slotSize
    description

    warning
    parking
    courtDetail

`;

const courtParamsDef = `
    $name: String
    $image: String

    $description: String
    $slotSize: Float

    $warning: String
    $parking: String
    $courtDetail: String

    $lat: String
    $lng: String

`;

const courtParamsVal = `
    name: $name
    image: $image

    description: $description
    slotSize: $slotSize

    warning: $warning
    parking: $parking

    courtDetail: $courtDetail

    lat: $lat
    lng: $lng

`;

const addCourt = `
    mutation courtsAdd(${courtParamsDef}){
        courtsAdd(${courtParamsVal}){
            ${courtFields}
        }
    }
`;

const courtEdit = `
    mutation courtEdit( $_id: String! ${courtParamsDef}){
        courtEdit( _id: $_id ${courtParamsVal}){
            ${courtFields}
        }
    }
`;

const removeCourt = `
    mutation removeCourt($_id: String!){
        removeCourt(_id: $_id)
    }
`;

const scheduleParamsDef = `
    $courtId: String!
    $day: Date!
    $startTime: Date!
    $endTime: Date!
    $price: String
`;

const scheduleParamsVal = `
    courtId: $courtId
    day: $day
    startTime: $startTime
    endTime: $endTime
    price: $price
`;

const schedulesAdd = `
    mutation schedulesAdd(${scheduleParamsDef}){
        schedulesAdd(${scheduleParamsVal}){
            _id
            courtId
            startTime
            endTime
            price
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { addCourt, removeCourt, courtEdit, schedulesAdd };
