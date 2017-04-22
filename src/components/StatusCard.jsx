import React, {PropTypes} from 'react';
import {
  Card,
  CardHeader,
  CardText,
  Checkbox,
  TextField,
} from 'material-ui';

import Slider from './Slider';
import CustomPropTypes from '../util/custom-prop-types';

const StatusCard = (props) => {
  const {
    disabled,
    statusEntry: {
      ateAfterExercise,
      ateBeforeExercise,
      calories,
      carbs,
      didEatBreakfast,
      energyLevel,
      fats,
      hoursOfExercise,
      hoursOfSleep,
      numOfMeals,
      proteins,
      sleepQuality,
      stressLevel,
    },
    isOpened: {
      nutrition,
      wellness,
      fitness
    },
    handleSliderChange,
    handleInputChange,
    handleCardExpandedChange,
  } = props;
  return (
    <div>
      <Card
        expanded={nutrition}
        onExpandChange={handleCardExpandedChange('nutrition')}
      >
        <CardHeader
          title="Nutrition"
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <TextField
            disabled={disabled}
            fullWidth
            name="calories"
            type="number"
            floatingLabelText="Calories"
            onChange={handleInputChange}
            value={calories}
          />
          <TextField
            disabled={disabled}
            fullWidth
            name="carbs"
            type="number"
            floatingLabelText="Carbs"
            onChange={handleInputChange}
            value={carbs}
          />
          <TextField
            disabled={disabled}
            fullWidth
            name="fats"
            type="number"
            floatingLabelText="Fats"
            onChange={handleInputChange}
            value={fats}
          />
          <TextField
            disabled={disabled}
            fullWidth
            name="proteins"
            type="number"
            floatingLabelText="Proteins"
            onChange={handleInputChange}
            value={proteins}
          />
          <TextField
            disabled={disabled}
            fullWidth
            name="numOfMeals"
            type="number"
            floatingLabelText="Number of meals you ate"
            onChange={handleInputChange}
            value={numOfMeals}
          />
          <Checkbox
            checked={didEatBreakfast}
            onCheck={handleInputChange}
            name="didEatBreakfast"
            label="I ate breakfast today"
          />
        </CardText>
      </Card>
      <br />
      <Card
        expanded={wellness}
        onExpandChange={handleCardExpandedChange('wellness')}
      >
        <CardHeader
          title="Wellness"
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <TextField
            disabled={disabled}
            fullWidth
            name="hoursOfSleep"
            type="number"
            floatingLabelText="How many hours did you sleep last night?"
            onChange={handleInputChange}
            value={hoursOfSleep}
          />
          <Slider
            name="sleepQuality"
            label="Sleep Quality"
            value={sleepQuality}
            onChange={handleSliderChange('sleepQuality')}
          />
          <Slider
            name="stressLevel"
            label="Stress Level"
            value={stressLevel}
            onChange={handleSliderChange('stressLevel')}
          />
          <Slider
            name="energyLevel"
            label="Energy Level"
            value={energyLevel}
            onChange={handleSliderChange('energyLevel')}
          />
        </CardText>
      </Card>
      <br />
      <Card
        expanded={fitness}
        onExpandChange={handleCardExpandedChange('fitness')}
      >
        <CardHeader
          title="Fitness"
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          <TextField
            disabled={disabled}
            fullWidth
            name="hoursOfExercise"
            type="number"
            floatingLabelText="Number of hours you exercised (rounded up)"
            onChange={handleInputChange}
            value={hoursOfExercise}
          />
          <Checkbox
            checked={ateBeforeExercise}
            onCheck={handleInputChange}
            name="ateBeforeExercise"
            label="Did you eat within an hour before you exercised?"
          />
          <Checkbox
            checked={ateAfterExercise}
            onCheck={handleInputChange}
            name="ateAfterExercise"
            label="Did you eat within an hour after you exercised?"
          />
        </CardText>
      </Card>
    </div>
  );
};

StatusCard.propTypes = {
  disabled: PropTypes.bool.isRequired,
  isOpened: PropTypes.shape({
    nutrition: PropTypes.bool.isRequired,
    fitness: PropTypes.bool.isRequired,
    wellness: PropTypes.bool.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCardExpandedChange: PropTypes.func.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
  statusEntry: CustomPropTypes.statusEntry.isRequired,
};

export default StatusCard;
