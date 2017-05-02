import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';

import Login from './buttons/Login';
import Menu from './buttons/Menu';

import { logout } from '../actions/auth';

    //component for app bar
class CouchPotatoAppBar extends Component {
  constructor(props) {
    super(props);
    this.routeToHome = this.routeToHome.bind(this);
    this.routeToLogin = this.routeToLogin.bind(this);
    this.signOut = this.signOut.bind(this);
  }
      //function to take to home
  routeToHome() {
    const { history } = this.props;
    history.push('/');
  }

      //function to take to login
  routeToLogin() {
    const { history } = this.props;
    history.push('/login');
  }

      //function to handle when sign out
  signOut() {
    const { dispatch, history } = this.props;
    dispatch(logout())
      .then(() => { history.push('/login'); });
  }

      //render the app bar
  render() {
    const {
      isLoggedIn,
    } = this.props;
    let iconElementRight;
    if (isLoggedIn) {
      iconElementRight = <Menu signOut={this.signOut} />;
    } else {
      iconElementRight = <Login loginCallback={this.routeToLogin} />;
    }
    return (
      <div>
        <AppBar
          title="Athlete Tracker Program"
          iconElementRight={iconElementRight}
          onTitleTouchTap={this.routeToHome}
          showMenuIconButton={false}
        />
      </div>
    );
  }
}

CouchPotatoAppBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  const {
    account: {
      isLoggedIn,
    },
  } = state;
  return {
    isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(CouchPotatoAppBar));
