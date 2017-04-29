import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Checkbox,
  Paper,
  RaisedButton,
  TextField,
} from 'material-ui';

import { login } from '../actions/auth';
import { addNotification } from '../actions/notifications';
import { getProfile, saveProfileToState } from '../actions/profile';
import { getStatusEntries } from '../actions/statusEntry';

const validateState = ({ email, password }) => {
  return !!(email && password);
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isResearcher: false,
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onCheck = this.onCheck.bind(this);
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

  onCheck() {
    this.setState({
      isResearcher: !this.state.isResearcher,
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
      isResearcher,
    } = this.state;

    if (!validateState(this.state)) {
      dispatch(addNotification('Email and password are required'));
      return;
    }
    dispatch(login(email, password, isResearcher))
      .then(() => {
        if (!isResearcher) {
          dispatch(getProfile())
            .then(({ data: profile }) => {
              dispatch(saveProfileToState(profile));
              dispatch(getStatusEntries())
                .then(() => { history.push('/'); });
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
          return;
        }
        history.push('/');
      })
        .catch(() => {
          dispatch(addNotification('Invalid Credentials'));
        });
  }

  render() {
    const {
      email,
      password,
      isResearcher,
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
          <br />
          <Checkbox
            checked={isResearcher}
            label="I am a researcher"
            onCheck={this.onCheck}
          />
          <RaisedButton
            disabled={!validateState(this.state)}
            className="inline-button"
            label="Login"
            onTouchTap={this.onSubmit}
            primary
            type="submit"
          />
          <Link
            to='/register'
          >
            <RaisedButton
              className="inline-button"
              label="Register"
              primary
            />
          </Link>
        </Paper>
        <Link to="/forgot-password" className="paper-link">
          <Paper
            children="Forget Password?"
            className="link-paper"
          />
        </Link>
        <Link to="/about" className="paper-link">
          <Paper
            children="About"
            className="link-paper"
          />
        </Link>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
