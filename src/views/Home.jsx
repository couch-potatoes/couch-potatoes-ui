import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../actions/auth';
import {RaisedButton} from 'material-ui';

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
      <div id="home-page-wrapper">
        <div class="page-title">Athletic Tracker App</div>

        <div class="section-title"><Link to="/status">Status Log</Link></div>
        <div class="section-title"><Link to="/profile">Profile</Link></div>
        <RaisedButton onClick={this.handleOnClick} label="Logout" />
      </div>
    );
  }
}

export default withRouter(connect()(Home));
