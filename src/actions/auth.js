import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGOUT = 'LOGOUT';
export const INVALIDATE_CREDENTIALS = 'INVALIDATE_CREDENTIALS';

const AUTH_URL = `${process.env.REACT_APP_API_URL}/Users`;

export const loginSucceeded = (token, userId) => ({
  type: LOGIN_SUCCEEDED,
  payload: {
    token,
    userId,
  },
});

export const login = (email, password) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: `${AUTH_URL}/login`,
      data: {
        email,
        password
      },
    }).then((res) => {
      const { id: token, userId } = res.data;
      dispatch(loginSucceeded(token, userId));
    });
  };
};

const invalidateCredentials = () => ({
  type: INVALIDATE_CREDENTIALS,
});

export const logout = () => {
  return (dispatch, getState) => {
    const { auth: { token } } = getState();
    dispatch(invalidateCredentials());
    return axios({
      method: 'POST',
      url: `${AUTH_URL}/logout?access_token=${token}`,
    });
  };
};
