import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
export const LOGOUT = 'LOGOUT';

const AUTH_URL = `${process.env.REACT_APP_API_URL}/Users/login`;

export const login = (email, password) => {
  return (dispatch) => {
    return axios({
      method: 'POST',
      url: AUTH_URL,
      data: {
        email,
        password
      },
    }).then((res) => {
      const { token, userId } = res.data;
      dispatch(loginSucceeded(token, userId))
    }, (err) => {
      console.log(err);
    });
  };
};

export const loginSucceeded = (token, userId) => ({
  type: LOGIN_SUCCEEDED,
  payload: {
    token,
    userId,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
