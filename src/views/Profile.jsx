import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    return (
      <div id="profile-information">
        <h1>profile</h1>
      </div>
    );
  }
}
export default connect()(Profile);
