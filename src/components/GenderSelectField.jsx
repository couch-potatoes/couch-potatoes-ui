import React, { PropTypes } from 'react';
import {
  MenuItem,
  SelectField,
} from 'material-ui';

    //function to handle when selecting genders
const GenderSelector = (props) => {
  const { disabled, onChange, value } = props;
  return (
    <SelectField
      disabled={disabled}
      floatingLabelText="Gender"
      fullWidth
      id="gender"
      onChange={onChange}
      value={value}
    >
      <MenuItem value='' primaryText="" />
      <MenuItem value="male" primaryText="Male" />
      <MenuItem value="female" primaryText="Female" />
    </SelectField>
  );
};


GenderSelector.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default GenderSelector;
