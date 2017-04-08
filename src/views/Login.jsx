import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  RaisedButton,
  Paper,
  TextField,
} from 'material-ui';

import { login } from '../actions/auth';

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

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }
    dispatch(login(email, password))
      .then(() => {
        history.push('home');
      }, () => {
        alert('Invalid Credentials');
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
            label="Login"
            onTouchTap={this.onSubmit}
            primary
            type="submit"
          />
        </Paper>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
