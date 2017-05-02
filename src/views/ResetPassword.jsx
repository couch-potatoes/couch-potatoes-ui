import React from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';

    //component for reset password page
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confPassword: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

    //function to handle when changing any text field
  handleOnChange(e) {
    const {
      target: {
        name,
        value,
      },
    } = e;
    this.setState({
      [name]: value,
    });
  }

    //function to handle when hitting cancel
  onCancel(e) {
    e.preventDefault();

    const {
      history,
    } = this.props;

    history.push('login');
  }

    //function to handle when hitting submit
  onSubmit(e) {
    e.preventDefault();

    const {
      history,
    } = this.props;

    const {
      newPassword,
      confPassword,
    } = this.state;

    if (!newPassword || !confPassword){
      alert('All fields are required');
      return;
    }

    else if ( newPassword !== confPassword) {
      alert('Confirmation password does not match!');
      return;
    }

    alert('Password Reset Success!');

    history.push('login');
  }

    //render the UI
  render() {
    const {
      newPassword,
      confPassword,
    } = this.state;
    return (
      <div id="pass-res-form">
        <div className="page-title"> Password Reset </div>
        <Paper className="link-paper">

          <TextField
            fullWidth
            floatingLabelText="New Password"
            name="newPassword"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="password"
            value={newPassword}
          />

          <TextField
            fullWidth
            floatingLabelText="Confirm Password"
            name="confPassword"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="password"
            value={confPassword}
          />

          <RaisedButton
            className="inline-button"
            label="Submit"
            onTouchTap={this.onSubmit}
            primary
            type="submit"
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

export default connect()(ResetPassword);
