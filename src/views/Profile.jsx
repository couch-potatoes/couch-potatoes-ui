import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui';

class Profile extends React.Component {
  render() {
    const {
      email
    } = this.props;
    return (
      <div id="profile-information">
        <div className="page-title">User Profile</div>
        <List id="profile-list">
          <ListItem
             primaryText = "Email"
             secondaryText = {`${email}`}
          />
          <ListItem
             primaryText = "ID"
             secondaryText = '012345'
          />
          <ListItem
             primaryText = "Username"
             secondaryText = 'someUsername'
          />
          <ListItem
             primaryText = "Age"
             secondaryText = '21'
          />
          <ListItem
             primaryText = "Grade"
             secondaryText = 'A'
          />
          <ListItem
             primaryText = "Gender"
             secondaryText = 'F'
          />
          <ListItem
             primaryText = "Height"
             secondaryText = "6 ft. 1 in."
          />
          <ListItem
             primaryText = "Weight"
             secondaryText = '180 lb'
          />
          <ListItem
             primaryText = "Sport"
             secondaryText = 'Swimming'
          />
          <ListItem
             primaryText = "Expected Graduation Date"
             secondaryText = 'May 2019'
          />
        </List>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  const {
    auth: {
      email,
  /*   name,
      id,
      username,
      age,
      grade,
      gender, 
      height, 
      weight, 
      sport,
      exp_grd        //expected graduation date
      */
    },
  } = state;
  return {
    email,

  };
};

export default connect(mapStateToProps)(Profile);
