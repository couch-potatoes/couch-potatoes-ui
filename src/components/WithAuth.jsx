import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import CustomPropTypes from '../util/custom-prop-types';

    //component for restricting access
export class WithAuth extends React.Component {
  render() {
    const {
      children,
      isLoggedIn,
      requiredUserType,
      userType,
    } = this.props;
    // Redirect user to Login if he/she is not logged in, or if they aren't
    // authorized to view the resource
    if (!isLoggedIn || (requiredUserType && userType !== requiredUserType)) {
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
      userType,
    },
  } = state;

  return {
    isLoggedIn,
    userType,
  };
};

    //properties required to restrict access
WithAuth.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  requiredUserType: CustomPropTypes.userType,
  userType: CustomPropTypes.userType
};

    //default properties for access restriction control
WithAuth.defaultProps = {
  requiredUserType: '',
  userType: '',
};

export default connect(mapStateToProps)(WithAuth);
