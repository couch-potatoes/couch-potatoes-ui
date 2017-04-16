export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const CLOSE_NOTIFICATION = 'CLOSE_NOTIFICATION';

export const addNotification = (message) => ({
  type: ADD_NOTIFICATION,
  payload: {
    message,
  },
});

export const closeNotification = () => ({
  type: CLOSE_NOTIFICATION,
});
