const userRemove = `
    mutation userRemove($_id: String!){
        userRemove(_id: $_id){
            _id
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { userRemove };
