import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Paper,
  RaisedButton,
  TextField,
} from 'material-ui';

import { login } from '../actions/auth';
import { addNotification } from '../actions/notifications';
import { getProfile, saveProfileToState } from '../actions/profile';

const validateState = ({ email, password }) => {
  return !!(email && password);
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.email.focus();
  }

  handleOnChange(ev) {
    const {
      target: {
        name,
        value,
      },
    } = ev;
    this.setState({
      [name]: value,
    });
  }

  onSubmit(ev) {
    ev.preventDefault();

    const {
      dispatch,
      history,
    } = this.props;

    const {
      email,
      password,
    } = this.state;

    if (!validateState(this.state)) {
      dispatch(addNotification('Email and password are required'));
      return;
    }

    dispatch(login(email, password))
      .then(() => {
        dispatch(getProfile())
          .then(({ data: profile }) => {
            dispatch(saveProfileToState(profile));
            history.push('/');
          })
          .catch((error) => {
            const {
              response: {
                status,
              },
            } = error;
            // Profile not found; make user create one
            if (status === 404) {
              history.push('/profile');
            } else {
              dispatch(addNotification('Error logging in; try again'));
            }
          });
      })
        .catch(() => {
          dispatch(addNotification('Invalid Credentials'));
        });
  }

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <div id="login-form">
        <Paper className="link-paper">
          <TextField
            fullWidth
            hintText="Email"
            name="email"
            onChange={this.handleOnChange}
            ref={(email) => { this.email = email; }}
            spellCheck={false}
            type="email"
            value={email}
          />
          <TextField
            fullWidth
            hintText="Password"
            name="password"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="password"
            value={password}
          />
          <RaisedButton
            disabled={!validateState(this.state)}
            className="inline-button"
            label="Login"
            onTouchTap={this.onSubmit}
            primary
            type="submit"
          />
          <RaisedButton
            className="inline-button"
            label="Register"
            href="/register"
            primary
          />
          <br/>
          <Link
            to="/reset-password"
            className="login-form-link"
          >
            Forgot Password?
          </Link>
        </Paper>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
