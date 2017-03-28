import * as actions from '../actions/auth';

const initialState = {
  email: '',
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
      };
    }
    case actions.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        email: '',
      };
    }
    default: {
      return state;
    }
  }
}
