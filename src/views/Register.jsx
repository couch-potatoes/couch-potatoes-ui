import React from 'react';
import { connect } from 'react-redux';
import {
  TextField,
  Paper,
  RaisedButton,
} from 'material-ui';

import { registerParticipant } from '../actions/auth';
import { addNotification } from '../actions/notifications';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
    };

    this.onTextFieldChange = this.onTextFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onTextFieldChange(ev) {
    const {
      target: {
        name,
        value,
      }
    } = ev;
    this.setState({
      [name]: value
    });
  }

  onCancel(e) {
    e.preventDefault();

    const {
      history,
    } = this.props;

    history.push('login');
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      dispatch,
      history,
    } = this.props;

    const {
      email,
      password,
      confirmPassword
    } = this.state;

    if (password !== confirmPassword) {
      dispatch(addNotification('Passwords do not match'));
      return;
    }
    dispatch(registerParticipant({email, password}))
      .then(() => {
        history.push('/profile');
      }, () => {
        dispatch(addNotification('Error creating account'));
      });
  }

  render() {
    return (
      <div id="register-new-account">
        <div className="page-title">Register New Account</div>
        <Paper id="registration-wrapper">
          <TextField
            name="email"
            onChange={this.onTextFieldChange}
            spellCheck={true}
            type="email"
            floatingLabelText="Email"
            fullWidth={true}
            value={this.state.email}
          />

          <br/>

          <TextField
            name="password"
            onChange={this.onTextFieldChange}
            type="password"
            floatingLabelText="Password"
            fullWidth={true}
            value={this.state.password}
          />

          <br />

          <TextField
            name="confirmPassword"
            onChange={this.onTextFieldChange}
            type="password"
            floatingLabelText="Confirm Password"
            fullWidth={true}
            value={this.state.confirmPassword}
          />

          <br/>

          <RaisedButton
            name="submit"
            label="Submit"
            onTouchTap={this.onSubmit}
            primary={true}
          />

          <RaisedButton
            className="inline-button"
            label="Cancel"
            onTouchTap={this.onCancel}
            type="cancel"
          />
        </Paper>
      </div>
    );
  }
}

export default connect()(Registration);
