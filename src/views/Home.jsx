import React, { Component, PropTypes } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Paper, RaisedButton } from 'material-ui';

export class Home extends Component {
  render() {
    const { userType } = this.props;
    if (userType === 'researcher') {
      return (
        <div>
          <Link to='/charts'>
            <RaisedButton
              className='inline-button'
              label='View Charts'
              primary
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
      </div>
    );
  }
}

Home.propTypes = {
  userType: PropTypes.string.isRequired,
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
