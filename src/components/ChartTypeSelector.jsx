import React, {PropTypes} from 'react';
import {
  MenuItem,
  SelectField,
} from 'material-ui';

const ChartTypeSelector = ({ onChange, value }) => (
  <SelectField
    fullWidth
    floatingLabelText="Chart Type"
    id="chart-type"
    onChange={onChange}
    value={value}
  >
    <MenuItem value="" primaryText="" />
    <MenuItem value="nutrition" primaryText="Nutrition" />
    <MenuItem value="wellness" primaryText="Wellness" />
    <MenuItem value="fitness" primaryText="Fitness" />
  </SelectField>
);

ChartTypeSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ChartTypeSelector;
