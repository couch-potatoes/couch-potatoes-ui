import React, { PropTypes } from 'react';
import {
  MenuItem,
  SelectField,
} from 'material-ui';

import SPORTS from '../util/constants/sports';

    //menu items to choose gender from
const makeMenuItems = (gender) => {
  if (gender) {
    return SPORTS[gender].map(sport => (
      <MenuItem
        {...sport}
        key={sport.value}
      />
    ));
  }
  return null;
};

    //field properties for sport selector
const selectFieldProps = {
  fullWidth: true,
  id: 'sports',
  multiple: true,
};

    //function for handling sport field
const SportSelectField = (props) => {
  const {
    disabled,
    gender,
    onChange,
    value,
  } = props;
  const menuItems = makeMenuItems(gender);

    //return code to render menu fields
  if (menuItems) {
    return (
      <SelectField
        disabled={disabled}
        {...selectFieldProps}
        floatingLabelText="Sport(s)"
        onChange={onChange}
        value={value}
      >
        {menuItems}
      </SelectField>
    );
  }
  return (
    <SelectField
      {...selectFieldProps}
      disabled
      floatingLabelText="Please select your gender before you select your sport(s)"
      value={null}
    />
  );
};

SportSelectField.propTypes = {
  disabled: PropTypes.bool.isRequired,
  gender: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
};

SportSelectField.defaultProps = {
  gender: '',
  value: [],
};

export default SportSelectField;
