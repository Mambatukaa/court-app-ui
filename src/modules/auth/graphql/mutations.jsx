const login = `
    mutation login($input: String! $password: String!){
        login(input: $input password: $password){
            token
            refreshToken
        }
    }
`;

const signUp = `
    mutation userCreate($username: String! $email: String! $password: String!){
        userCreate(username: $username email: $email password: $password){
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
