import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: '',
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
      confirmPassword,
      email,
      password,
    } = this.state;

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords must match');
      return;
    }

    this.setState({
      confirmPassword: '',
      email: '',
      password: '',
    });
  }

  render() {

    const {
      confirmPassword,
      email,
      password
    } = this.state;

    return (
      <div>
        <h2>Register</h2>
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="password"
            value={confirmPassword}
          />
          <input
            onClick={this.onSubmit}
            type="submit"
          />
      </div>
    );
  }

}

export default Register;
