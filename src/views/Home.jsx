import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Paper } from 'material-ui';

export class Home extends Component {
  render() {
    const { userType } = this.props;
    if (userType === 'researcher') {
      return (
        <div>
          <h1>Researcher view</h1>
          <Link to="/charts" className="paper-link">
            <Paper
              children="View aggregated data"
              className="link-paper"
            />
          </Link>
          <Link to="/register-researcher" className="paper-link">
            <Paper
              children="Register a researcher"
              className="link-paper"
            />
          </Link>
          <Link to="/about" className="paper-link">
            <Paper
              children="About"
              className="link-paper"
            />
          </Link>
        </div>
      );
    }
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
        <Link to="/about" className="paper-link">
          <Paper
            children="About"
            className="link-paper"
          />
        </Link>
      </div>
    );
  }
}

Home.propTypes = {
  userType: PropTypes.oneOf(['participant', 'researcher']).isRequired,
};

const mapStateToProps = (state) => {
  const {
    account: {
      userType,
    },
  } = state;
  return {
    userType,
  };
};

export default withRouter(connect(mapStateToProps)(Home));
