import React from 'react';
import { connect } from 'react-redux';
import {
  Card,
  RaisedButton,
  TextField,
} from 'material-ui';

import { changeUserPassword } from '../actions/auth';
import { addNotification } from '../actions/notifications';

const styles = {
  paper: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-around',
    padding: '2rem',
  },
};

class ChangePasswordCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: '',
      newPassword: '',
      newPasswordAgain: '',
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  handleTextFieldChange(event) {
    const {
      target: {
        name,
        value,
      },
    } = event;
    this.setState({
      [name]: value,
    });
  }

  changePassword() {
    const {
      currentPassword,
      newPassword,
      newPasswordAgain,
    } = this.state;
    const {
      dispatch,
    } = this.props;
    if (newPassword !== newPasswordAgain) {
      dispatch(addNotification('Passwords do not match'));
      return;
    }
    dispatch(changeUserPassword(currentPassword, newPassword))
      .then(() => {
        this.setState({
          currentPassword,
          newPassword,
          newPasswordAgain,
        });
      });
  }

  render() {
    const {
      currentPassword,
      newPassword,
      newPasswordAgain,
    } = this.state;
    return (
      <div>
        <Card style={styles.paper}>
          <TextField
            fullWidth
            floatingLabelText="Current Password"
            name="currentPassword"
            onChange={this.handleTextFieldChange}
            spellCheck={false}
            type="password"
            value={currentPassword}
          />
          <TextField
            fullWidth
            floatingLabelText="New Password"
            name="newPassword"
            onChange={this.handleTextFieldChange}
            spellCheck={false}
            type="password"
            value={newPassword}
          />
          <TextField
            fullWidth
            floatingLabelText="Confirm New Password"
            name="newPasswordAgain"
            onChange={this.handleTextFieldChange}
            spellCheck={false}
            type="password"
            value={newPasswordAgain}
          />
        </Card>
        <RaisedButton
          className="inline-button"
          label="Submit"
          onTouchTap={this.changePassword}
        />
      </div>
    );
  }
}

export default connect()(ChangePasswordCard);
