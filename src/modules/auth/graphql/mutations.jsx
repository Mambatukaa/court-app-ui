const login = `
    mutation login($email: String! $password: String!){
        login(email: $email password: $password){
            token
            refreshToken
        }
    }
`;

const signUp = `
    mutation usersCreate($username: String! $email: String! $password: String!){
        usersCreate(username: $username email: $email password: $password){
            _id
            username
            email
            
        }
    }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  signUp
};
