import React, { Component } from 'react';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    } = this.state;

    if (!email) {
      alert('Email is required');
      return;
    }

    alert('Password reset sent!');

    this.setState({
      email: '',
    });
  }

  render() {
    const {
      email,
    } = this.state;

    return (
      <div>
        <h2>Reset Password</h2>
        <label htmlFor="email">Enter your email</label>
        <input
          name="email"
          onChange={this.handleOnChange}
          spellCheck={false}
          type="email"
          value={email}
        />
        <input
          onClick={this.onSubmit}
          type="submit"
        />
      </div>
    );
  }

}

export default ResetPassword;
