import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
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
        <h1>Athletic Tracker App</h1>

        <h2><Link to="/status">Status Log</Link></h2>
        <h2><Link to="/profile">Profile</Link></h2>
        <h3 onClick={this.handleOnClick}>Logout</h3>
      </div>
    );
  }

}

export default withRouter(connect()(Home));
