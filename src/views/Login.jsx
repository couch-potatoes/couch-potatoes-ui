import React, { Component } from 'react';
import { TextField } from 'material-ui';

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
      email,
      password,
    } = this.state;

    if (!email || !password) {
      alert('Email and password are required');
    }

    this.setState({
      email: '',
      password: '',
    })
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
        <TextField
          name="email"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <TextField
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

export default Login;
