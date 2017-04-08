import * as actions from '../actions/auth';

const initialState = {
  email: '',
  isLoggedIn: false,
  token: '',
  userId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
  case actions.INVALIDATE_CREDENTIALS: {
    return {
      ...initialState
    };
  }
  case actions.LOGIN_SUCCEEDED: {
    return {
      ...state,
      isLoggedIn: true,
      token: action.payload.token,
      userId: action.payload.userId,
    };
  }
  default: {
    return state;
  }
  }
};
