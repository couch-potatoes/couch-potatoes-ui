import axios from 'axios';

import { makeAPIEndpoint } from '../util/api';

export const LOGIN = 'LOGIN';
export const SAVE_USER_CREDENTIALS = 'SAVE_USER_CREDENTIALS';
export const LOGOUT = 'LOGOUT';
export const INVALIDATE_USER_CREDENTIALS = 'INVALIDATE_USER_CREDENTIALS';
export const SAVE_PROFILE_TO_STATE = 'SAVE_PROFILE_TO_STATE';

const participantEndpoint = makeAPIEndpoint('Participants');
const researcherEndpoint = makeAPIEndpoint('Researchers');

export const saveUserCredentials = (token, userId, isResearcher) => ({
  type: SAVE_USER_CREDENTIALS,
  payload: {
    token,
    userId,
    userType: isResearcher ? 'researcher' : 'participant',
  },
});

export const login = (email, password, isResearcher = false) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: `${isResearcher ? researcherEndpoint : participantEndpoint}/login`,
      data: {
        email,
        password
      },
    }).then((res) => {
      const { id: token, userId } = res.data;
      dispatch(saveUserCredentials(token, userId, isResearcher));
    });
  };
};

const invalidateUserCredentials = () => ({
  type: INVALIDATE_USER_CREDENTIALS,
});

export const logout = () => {
  return (dispatch, getState) => {
    const { account: { token } } = getState();
    dispatch(invalidateUserCredentials());
    return axios({
      method: 'POST',
      headers: {
        Authorization: token
      },
      url: `${participantEndpoint}/logout`,
    });
  };
};

export const registerParticipant = (accountData) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: participantEndpoint,
      data: accountData,
    })
      .then(() => {
        // Log the user in if registration was successful
        const { email, password } = accountData;
        return dispatch(login(email, password));
      }, (err) => {
        throw err;
      });
  };
};

export const updateParticipant = (accountData) => {
  return (dispatch, getState) => {
    const { account: { token, userId } } = getState();
    return axios({
      method: 'PUT',
      url: `${participantEndpoint}/${userId}`,
      data: accountData,
      headers: {
        Authorization: token,
      },
    });
  };
};
