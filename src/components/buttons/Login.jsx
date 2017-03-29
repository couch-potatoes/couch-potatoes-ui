import React from 'react';
import { FlatButton } from 'material-ui';

const Login = ({ loginCallback }) => (
  <FlatButton label="Login" onTouchTap={loginCallback} />
);

export default Login;
