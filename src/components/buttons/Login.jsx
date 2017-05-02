import React, { PropTypes } from 'react';
import { FlatButton } from 'material-ui';

const style = {
  marginTop: '8px',
  color: 'white',
};

    //function for action on login button
const Login = ({ loginCallback }) => (
  <FlatButton
    label="Login"
    onTouchTap={loginCallback}
    style={style}
  />
);

Login.propTypes = {
  loginCallback: PropTypes.func,
};

export default Login;
