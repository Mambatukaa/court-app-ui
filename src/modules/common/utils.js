import { Alert } from 'rsuite';

export const alert = {
  error: error => {
    const fixedMessage = (error.message || error).replace(
      'GraphQL error: ',
      ''
    );

    return Alert.error(fixedMessage, 2000);
  },

  success: msg => {
    return Alert.success(msg, 2000);
  }
};
