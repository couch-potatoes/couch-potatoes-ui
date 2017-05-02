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

    //function to handle status entries on status card
const StatusCard = (props) => {
  const {
    disabled,
    statusEntry: {
      breakfast,
      calories,
      carbs,
      eatAfter,
      eatBefore,
      energyLevel,
      exerciseLength,
      fats,
      numMeals,
      proteins,
      sleepLength,
      sleepQuality,
      stressLevel,
    },
    handleCardExpandedChange,
    handleInputChange,
    handleSliderChange,
    isOpened: {
      nutrition,
      wellness,
      fitness
    },
  } = props;

      //return code to render UI
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
            name="numMeals"
            type="number"
            floatingLabelText="Number of meals you ate"
            onChange={handleInputChange}
            value={numMeals}
          />
          <Checkbox
            checked={breakfast}
            onCheck={handleInputChange}
            name="breakfast"
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
            name="sleepLength"
            type="number"
            floatingLabelText="How many hours did you sleep last night?"
            onChange={handleInputChange}
            value={sleepLength}
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
            name="exerciseLength"
            type="number"
            floatingLabelText="Number of hours you exercised (rounded up)"
            onChange={handleInputChange}
            value={exerciseLength}
          />
          <Checkbox
            checked={eatBefore}
            onCheck={handleInputChange}
            name="eatBefore"
            label="Did you eat within an hour before you exercised?"
          />
          <Checkbox
            checked={eatAfter}
            onCheck={handleInputChange}
            name="eatAfter"
            label="Did you eat within an hour after you exercised?"
          />
        </CardText>
      </Card>
    </div>
  );
};

    //properties required for status card
StatusCard.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleCardExpandedChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSliderChange: PropTypes.func.isRequired,
  isOpened: PropTypes.shape({
    nutrition: PropTypes.bool.isRequired,
    fitness: PropTypes.bool.isRequired,
    wellness: PropTypes.bool.isRequired,
  }).isRequired,
  statusEntry: CustomPropTypes.statusEntry.isRequired,
};

export default StatusCard;
