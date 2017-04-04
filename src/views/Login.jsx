import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../actions/auth';
import { TextField } from 'material-ui';
import {RaisedButton} from 'material-ui';

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
    }

    dispatch(login(email, password))
      .then(() => {
        history.push('home');
      });
  }

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <div id="login-form">
        <div className="page-title">Login</div>
        <TextField
          name="email"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="email"
          value={email}
          hintText="Email"
        />
        <br/>
        <TextField
          name="password"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="password"
          value={password}
          hintText="Password"
        />
        <br/><br/>
        <RaisedButton
          onTouchTap={this.onSubmit}
          type="submit"
          label="Login"
        />
      </div>
    );
  }
}

export default withRouter(connect()(Login));
