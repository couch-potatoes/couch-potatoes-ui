import React from 'react';
import { connect } from 'react-redux';
import {List, ListItem} from 'material-ui';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';

class Profile extends React.Component {
  render() {
    const {
      email
    }=this.props;
    return (
      <div id="profile-information">
        <List>
          <ListItem
             primaryText="Email"
             secondaryText={`${email}`}
          />
          <ListItem
             primaryText="ID"
             secondaryText='012345'
          />
          <ListItem
             primaryText="Username"
             secondaryText='someUsername'
          />
          <ListItem
             primaryText="Age"
             secondaryText='21'
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Grade"
             secondaryText='A'
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Gender"
             secondaryText='F'
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Height"
             secondaryText="6 ft. 1 in."
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Weight"
             secondaryText='180 lb'
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Sport"
             secondaryText='Swimming'
             rightIcon={<EditorModeEdit />}
          />
          <ListItem
             primaryText="Expected Graduation Date"
             secondaryText='May 2019'
             rightIcon={<EditorModeEdit />}
          />
        </List>
      </div>
    );
  }

}

const mapStateToProps=(state) => {
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
  }=state;
  return {
    email,

  };
};

export default connect(mapStateToProps)(Profile);
