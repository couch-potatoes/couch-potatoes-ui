export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
  }
});

export const logout = () => ({
  type: LOGOUT,
});
