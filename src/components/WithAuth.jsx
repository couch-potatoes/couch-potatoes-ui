import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class WithAuth extends React.Component {
  render() {
    const {
      children,
      isLoggedIn,
    } = this.props;
    if (!isLoggedIn) {
      // Redirect user to login page
      return (
        <Redirect to="login"/>
      );
    }
    return children;
  }
}

const mapStateToProps = (state) => {
  const {
    auth: {
      isLoggedIn,
    },
  } = state;

  return {
    isLoggedIn,
  };
}

export default connect(mapStateToProps)(WithAuth);
