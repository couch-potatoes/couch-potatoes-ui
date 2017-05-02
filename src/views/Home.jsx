import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Paper } from 'material-ui';

    //component for home page
export class Home extends Component {
  render() {
    const { userType } = this.props;

        //section to show when user is a researcher
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
          <a href="https://potatoes-db.herokuapp.com/db-backup.php" className="paper-link">
            <Paper
              children="Export Database"
              className="link-paper"
            />
          </a>
          <Link to="/about" className="paper-link">
            <Paper
              children="About"
              className="link-paper"
            />
          </Link>
        </div>
      );
    }

        //section to show if user is a participant
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
    //determination of user being participant or researcher is required
Home.propTypes = {
  userType: PropTypes.oneOf(['participant', 'researcher']).isRequired,
};

    //get the user type
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
