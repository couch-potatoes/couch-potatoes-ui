import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEmailChange(ev) {
    this.setState({
      email: ev.target.value,
    });
  }

  onPasswordChange(ev) {
    this.setState({
      password: ev.target.value,
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
        <input
          name="email"
          onChange={this.onEmailChange}
          spellCheck={false}
          type="email"
          value={email}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={this.onPasswordChange}
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
