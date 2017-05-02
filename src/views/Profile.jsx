import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { FlatButton } from 'material-ui';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

import { createProfile, updateProfile, saveProfileToState } from '../actions/profile';
import ChangePasswordCard from '../components/ChangePasswordCard';
import ProfileCard from '../components/ProfileCard';
import EditProfile from '../views/EditProfile';
import CustomPropTypes from '../util/custom-prop-types';

    //conponent for profile page
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: _.isEmpty(props.profile),
      profile: props.profile
    };
    this.switchEditMode = this.switchEditMode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    //let this component receive properties of the user
  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props, nextProps)) {
      this.setState({
        profile: nextProps.profile,
      });
    }
  }

    //function to handle switching between edit mode and viewing mode
  switchEditMode() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

    //function to handle when hitting submit
  onSubmit(profileInput) {
    const { dispatch } = this.props;
    const { profile } = this.state;
    dispatch(_.isEmpty(profile) ? createProfile(profileInput) : updateProfile(profileInput))
      .then(({ data: profile }) => {
        dispatch(saveProfileToState(profile));
        this.switchEditMode();
      });
  }

    //render the user interface
  render() {
    const { isEditing, profile } = this.state;
    if (isEditing) {
      return (
        <EditProfile
          onCancel={this.switchEditMode}
          onSubmit={this.onSubmit}
          profile={profile}
        />
      );
    }
    return (
      <div>
        <div id="profile-information">
          <ProfileCard
            disabled
            profile={profile}
          />
          <FlatButton
            icon={<ModeEdit />}
            onTouchTap={this.switchEditMode}
          />
        </div>
        <div id="profile-information">
          <h1>Change your password</h1>
          <ChangePasswordCard />
        </div>
      </div>
    );
  }
}
    //required fields
Profile.propTypes = {
  profile: CustomPropTypes.profile.isRequired,
};

const mapStateToProps = (state) => {
  const {
    account: {
      profile,
    },
  } = state;
  return {
    profile,
  };
};

export default connect(mapStateToProps)(Profile);
