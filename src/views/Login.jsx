import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    }
    dispatch(login())
    history.push('home')
  }

  render() {
    const {
      email,
      password
    } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="password"
          value={password}
        />
        <input
          onClick={this.onSubmit}
          type="submit"
        />
      </div>
    );
  }
}

export default withRouter(connect()(Login));
