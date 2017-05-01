import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Paper,
  RaisedButton,
  TextField,
} from 'material-ui';
import { withRouter } from 'react-router-dom';

import { createUser } from '../actions/auth';
import { addNotification } from '../actions/notifications';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      isResearcher: false,
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

    history.push('/');
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      dispatchAddNotification,
      dispatchRegisterUser,
    } = this.props;

    const {
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password !== confirmPassword) {
      dispatchAddNotification('Passwords do not match');
      return;
    }
    dispatchRegisterUser({email, password}, true)
      .then(() => {
        dispatchAddNotification('User created!');
      }, () => {
        dispatchAddNotification('Error creating account');
      });
  }

  render() {
    return (
      <div id="register-new-account">
        <div className="page-title">Register A Researcher</div>
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

Registration.propTypes = {
  dispatchAddNotification: PropTypes.func.isRequired,
  dispatchRegisterUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  dispatchAddNotification: (msg) => { dispatch(addNotification(msg)); },
  dispatchRegisterUser: (accountData, isResearcher) => (
    dispatch(createUser(accountData, isResearcher))
  ),
});

export default withRouter(connect(undefined, mapDispatchToProps)(Registration));
