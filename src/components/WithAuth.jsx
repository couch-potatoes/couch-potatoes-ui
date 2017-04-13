import React, { PropTypes } from 'react';
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
    account: {
      isLoggedIn,
    },
  } = state;

  return {
    isLoggedIn,
  };
};

WithAuth.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(WithAuth);
