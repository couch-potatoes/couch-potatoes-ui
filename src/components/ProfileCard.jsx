import React, { PropTypes } from 'react';
import {
  Card,
  TextField,
} from 'material-ui';

import GenderSelectField from './GenderSelectField';
import SportSelectField from './SportSelectField';
import CustomPropTypes from '../util/custom-prop-types';

const styles = {
  paper: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignContent: 'space-around',
    padding: '2rem',
  },
};

    //function to show profile information the card
const ProfileCard = (props) => {
  const {
    disabled,
    handleTextFieldChange,
    handleGenderFieldChange,
    handleSportsFieldChange,
    profile: {
      age,
      height,
      gender,
      weight,
      sports,
    },
  } = props;

      //return code to render profile card
  return (
    <Card style={styles.paper}>
      <GenderSelectField
        disabled={disabled}
        onChange={handleGenderFieldChange}
        value={gender}
      />
      <TextField
        disabled={disabled}
        fullWidth
        name="height"
        type="number"
        floatingLabelText="Height (inches)"
        onChange={handleTextFieldChange}
        value={height}
      />
      <TextField
        disabled={disabled}
        fullWidth
        name="weight"
        type="number"
        floatingLabelText="Weight (lbs.)"
        onChange={handleTextFieldChange}
        value={weight}
      />
      <TextField
        disabled={disabled}
        fullWidth
        name="age"
        type="number"
        floatingLabelText="Age"
        onChange={handleTextFieldChange}
        value={age}
      />
      <SportSelectField
        disabled={disabled}
        gender={gender}
        onChange={handleSportsFieldChange}
        value={sports}
      />
    </Card>
  );
};

ProfileCard.defaultProps = {
  handleTextFieldChange: () => {},
  handleGenderFieldChange: () => {},
  handleSportsFieldChange: () => {},
};

ProfileCard.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleTextFieldChange: PropTypes.func,
  handleGenderFieldChange: PropTypes.func,
  handleSportsFieldChange: PropTypes.func,
  profile: CustomPropTypes.profile.isRequired,
};

export default ProfileCard;
