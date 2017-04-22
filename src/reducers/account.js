import * as actions from '../actions/auth';
import {
  CACHE_STATUS_ENTRY,
  CACHE_STATUS_ENTRIES,
} from '../actions/statusEntry';

const initialState = {
  isLoggedIn: false,
  token: '',
  userId: '',
  profile: {},
  userType: '',
  statusEntryCache: {},
};

export default (state = initialState, { type, payload }) => {
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
      userType: payload.userType,
    };
  }
  case actions.SAVE_PROFILE_TO_STATE: {
    return {
      ...state,
      profile: payload.profile,
    };
  }
  case CACHE_STATUS_ENTRY: {
    return {
      ...state,
      statusEntryCache: {
        ...state.statusEntryCache,
        [payload.date]: payload.statusEntry,
      },
    };
  }
  case CACHE_STATUS_ENTRIES: {
    return {
      ...state,
      statusEntryCache: payload.statusEntries
    };
  }
  default: {
    return state;
  }
  }
};
