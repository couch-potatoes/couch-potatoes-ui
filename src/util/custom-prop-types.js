import { PropTypes } from 'react';

const statusEntry = PropTypes.shape({
  ateAfterExercise: PropTypes.bool.isRequired,
  ateBeforeExercise: PropTypes.bool.isRequired,
  calories: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  didEatBreakfast: PropTypes.bool.isRequired,
  energyLevel: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  hoursOfExercise: PropTypes.number.isRequired,
  hoursOfSleep: PropTypes.number.isRequired,
  numOfMeals: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  sleepQuality: PropTypes.number.isRequired,
  stressLevel: PropTypes.number.isRequired,
});

const statusLog = PropTypes.objectOf(statusEntry);

const profile = PropTypes.shape({
  age: PropTypes.number,
  gender: PropTypes.string,
  height: PropTypes.number,
  sports: PropTypes.arrayOf(PropTypes.string),
  weight: PropTypes.number,
});

export default {
  profile,
  statusEntry,
  statusLog,
};