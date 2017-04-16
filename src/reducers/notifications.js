import * as actions from '../actions/notifications';

export const initialState = {
  messages: [], // Queue of messages to display
  displayed: false, // Is NotificationSnackbar displayed?
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case actions.ADD_NOTIFICATION: {
    // Append the message to the queue
    return {
      ...state,
      messages: state.messages.concat(payload.message),
      displayed: true, // display the notification if there were none
    };
  }
  case actions.CLOSE_NOTIFICATION: {
    // If this is the last notification in the queue, return the initial
    if (state.messages.length === 1) {
      return {
        ...initialState,
      };
    }
    // Return the original
    return {
      ...state,
      messages: state.messages.slice(1),
    };
  }
  default: {
    return state;
  }
  }
};
