import React from 'react';
import { connect } from 'react-redux';
import { Paper, TextField, RaisedButton } from 'material-ui';

class ForgotPassword extends React.Component {
  constructor(props) {
	super(props);
    this.state = {
      email: '',
      confEmail: '',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

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
      history,
    } = this.props;

    const {
      email,
      confEmail,
    } = this.state;

    if (!email || !confEmail){
      alert('All fields are required');
      return;
    }

    else if ( email !== confEmail) {
      alert('Confirmation password does not match!');
      return;
    }

    console.log(
      email
    );

    alert("Password Reset Requested!");

    history.push('login');
  }

  render() {
    return (
      <div id="pass-res-form">
        <div className="page-title"> Password Reset Request </div>
        <Paper className="link-paper">

          <TextField
            fullWidth
            floatingLabelText="Email"
            name="email"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="email"
            value={this.state.email}
          />
          
          <TextField
            fullWidth
            floatingLabelText="Confirm Email"
            name="confEmail"
            onChange={this.handleOnChange}
            spellCheck={false}
            type="email"
            value={this.state.confEmail}
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

export default connect()(ForgotPassword);
