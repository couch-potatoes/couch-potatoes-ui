import * as actions from '../actions/auth';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case actions.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
}
