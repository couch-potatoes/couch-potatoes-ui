import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';
import { RaisedButton, Paper } from 'material-ui';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const {
      dispatch,
      history,
    } = this.props;
    dispatch(logout());
    history.push('/login');
  }
  render() {
    return (
      <div>
        <Link to="/status">
          <Paper
            children="Status Log"
            className="link-paper"
          />
        </Link>
        <Link to="/profile" className="paper-link">
          <Paper
            children="Profile"
            className="link-paper"
          />
        </Link>
      </div>
    );
  }
}

export default withRouter(connect()(Home));
