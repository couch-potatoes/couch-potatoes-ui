import * as actions from '../actions/auth';

const initialState = {
  isLoggedIn: false,
  token: '',
  userId: '',
  profile: {},
};

export default (state = initialState, { type, payload}) => {
  switch (type) {
  case actions.INVALIDATE_USER_CREDENTIALS: {
    return {
      ...initialState
    };
  }
  case actions.SAVE_USER_CREDENTIALS: {
    return {
      ...state,
      isLoggedIn: true,
      token: payload.token,
      userId: payload.userId,
    };
  }
  case actions.SAVE_PROFILE_TO_STATE: {
    return {
      ...state,
      profile: payload.profile,
    };
  }
  default: {
    return state;
  }
  }
};
