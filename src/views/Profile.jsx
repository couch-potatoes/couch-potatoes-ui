import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    const {
      email
    } = this.props;
    return (
      <div>
        <h1>Profile</h1>
        <h3>Email: {`${email}`}</h3>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const {
    auth: {
      email,
    },
  } = state;
  return {
    email,
  };
};

export default connect(mapStateToProps)(Profile);
