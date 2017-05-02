import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import {
  FlatButton,
} from 'material-ui';
import SaveIcon from 'material-ui/svg-icons/content/save';

import ProfileCard from '../components/ProfileCard';

const validateState = (state) => {
  const {
    age,
    gender,
    height,
    sports,
    weight,
  } = state;

  // Validate that all fields aren't empty.
  if (!(age && gender && height && sports.length && weight)) {
    return false;
  }

  return true;
};

    //component to edit profile
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.profile,
    };
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleGenderFieldChange = this.handleGenderFieldChange.bind(this);
    this.handleSportsFieldChange = this.handleSportsFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    //function to handle when gender field is changed
  handleGenderFieldChange(event, key, value) {
    this.setState({
      gender: value,
      // Reset the sports value if the user change gender value
      sports: [],
    });
  }

    //function to handle when sports field is changed
  handleSportsFieldChange(event, key, value) {
    this.setState({
      sports: value,
    });
  }

    //function to handle any text input field is changed
  handleTextFieldChange(event) {
    const {
      target: {
        name,
        value,
      },
    } = event;
    this.setState({
      [name]: value,
    });
  }

    //function to handle when hitting submit button
  onSubmit(ev) {
    ev.preventDefault();

    if (validateState(this.state)) {
      this.props.onSubmit(this.state);
    }
  }

    //render the user input fields
  render() {
    const { onCancel, profile } = this.props;
    // User doesn't have a profile, so they must be creating one
    if (_.isEmpty(profile)) {
      return (
        <div>
          <ProfileCard
            disabled={false}
            handleGenderFieldChange={this.handleGenderFieldChange}
            handleSportsFieldChange={this.handleSportsFieldChange}
            handleTextFieldChange={this.handleTextFieldChange}
            profile={this.state}
          />
          <FlatButton
            disabled={!validateState(this.state)}
            label="Create Profile"
            onTouchTap={this.onSubmit}
          />
        </div>
      );
    }
    return (
      <div>
        <ProfileCard
          disabled={false}
          handleGenderFieldChange={this.handleGenderFieldChange}
          handleSportsFieldChange={this.handleSportsFieldChange}
          handleTextFieldChange={this.handleTextFieldChange}
          profile={this.state}
        />
        <FlatButton
          label="Cancel"
          onTouchTap={onCancel}
        />
        <FlatButton
          disabled={!validateState(this.state)}
          icon={<SaveIcon />}
          onTouchTap={this.onSubmit}
        />
      </div>
    );
  }
}

    //equired data for showing and editing profile
EditProfile.propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    age: PropTypes.number,
    gender: PropTypes.string,
    height: PropTypes.number,
    sports: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number,
  }),
};

export default EditProfile;
