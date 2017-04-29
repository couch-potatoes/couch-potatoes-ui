import React, { PropTypes } from 'react';

import {
  Card,
  DatePicker,
} from 'material-ui';

import GenderSelectField from './GenderSelectField';
import SportSelectField from './SportSelectField';
import dates from '../util/dates';

const ChartVariablesController = (props) => {
  const {
    handleDateChange,
    handleGenderFieldChange,
    handleSportsFieldChange,
    chartQueryData: {
      endDate,
      gender,
      sports,
      startDate,
    },
  } = props;

  return (
    <Card>
      <DatePicker
        name="startDate"
        container="inline"
        locale="en-US"
        mode="landscape"
        minDate={dates.minDate}
        maxDate={dates.currentDate}
        value={startDate}
        onChange={handleDateChange('startDate')}
      />
      <DatePicker
        name="endDate"
        container="inline"
        locale="en-US"
        mode="landscape"
        value={endDate}
        minDate={startDate}
        maxDate={dates.currentDate}
        onChange={handleDateChange('endDate')}
      />
      <GenderSelectField
        disabled={false}
        onChange={handleGenderFieldChange}
        value={gender}
      />
      <SportSelectField
        disabled={false}
        onChange={handleSportsFieldChange}
        gender={gender}
        value={sports}
      />
    </Card>
  );
};

ChartVariablesController.propTypes = {
  chartQueryData: PropTypes.shape({
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    gender: PropTypes.string,
    sports: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleGenderFieldChange: PropTypes.func.isRequired,
  handleSportsFieldChange: PropTypes.func.isRequired,
};

export default ChartVariablesController;
