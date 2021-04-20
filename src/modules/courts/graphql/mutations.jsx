const courtFields = `
    _id

    name
    shortName
    image

    price
    description

    warning
    parking
    courtDetail

`;

const courtParamsDef = `
    $name: String
    $shortName: String
    $image: String

    $price: String
    $description: String

    $warning: String
    $parking: String
    $courtDetail: String

    $lat: String
    $lng: String

`;

const courtParamsVal = `
    name: $name
    shortName: $shortName
    image: $image

    price: $price
    description: $description
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

const removeCourt = `
    mutation removeCourt($_id: String!){
        removeCourt(_id: $_id)
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { addCourt, removeCourt };
