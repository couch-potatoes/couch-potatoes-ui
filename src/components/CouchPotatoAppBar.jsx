import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';

import Login from './buttons/Login';
import Menu from './buttons/Menu';

import { logout } from '../actions/auth';

class CouchPotatoAppBar extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  signIn() {
    history.push('/login');
  }
  signOut() {
    const { dispatch, history } = this.props;
    dispatch(logout());
    history.push('/login');
  };

  render() {
    const {
      isLoggedIn,
    } = this.props;
    return (
      <div>
        <AppBar
          title="Athlete Tracker Program"
          iconElementRight={isLoggedIn ? <Menu signOut={this.signOut} /> : <Login />}
          showMenuIconButton={false}
        />
      </div>
    );
  }
};

CouchPotatoAppBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    auth: {
      isLoggedIn,
    },
  } = state;
  return {
    isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(CouchPotatoAppBar));
