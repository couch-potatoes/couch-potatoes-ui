import React, {PropTypes} from 'react';
import {
  Card,
  CardHeader,
  CardText,
  Checkbox,
  TextField,
} from 'material-ui';

import CustomPropTypes from '../util/custom-prop-types';

const StatusCard = (props) => {
  const {
    disabled,
    statusEntry: {
      calories,
      carbs,
      didEatBreakfast,
      energyLevel,
      fats,
      hoursOfExercise,
      numOfMeals,
      proteins,
    },
    isOpened: {
      nutrition,
      wellness,
      fitness
    },
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
            name="numOfMeals"
            type="number"
            floatingLabelText="Number of meals you ate"
            onChange={handleInputChange}
            value={numOfMeals}
          />
          <TextField
            disabled={disabled}
            fullWidth
            name="energyLevel"
            type="number"
            floatingLabelText="Energy Level"
            onChange={handleInputChange}
            value={energyLevel}
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
  statusEntry: CustomPropTypes.statusEntry.isRequired,
};

export default StatusCard;
