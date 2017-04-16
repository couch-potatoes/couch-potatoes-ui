import React, { PropTypes } from 'react';
import {
  MenuItem,
  SelectField,
} from 'material-ui';

import SPORTS from '../util/constants/sports';

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

const selectFieldProps = {
  fullWidth: true,
  id: 'sports',
  multiple: true,
};

const SportSelectField = (props) => {
  const {
    disabled,
    gender,
    onChange,
    value,
  } = props;
  const menuItems = makeMenuItems(gender);

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
  gender: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SportSelectField;
