import { PropTypes } from 'react';

const statusEntry = PropTypes.shape({
  eatAfter: PropTypes.bool.isRequired,
  eatBefore: PropTypes.bool.isRequired,
  calories: PropTypes.number.isRequired,
  carbs: PropTypes.number.isRequired,
  breakfast: PropTypes.bool.isRequired,
  energyLevel: PropTypes.number.isRequired,
  fats: PropTypes.number.isRequired,
  exerciseLength: PropTypes.number.isRequired,
  sleepLength: PropTypes.number.isRequired,
  numMeals: PropTypes.number.isRequired,
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

const userType = PropTypes.oneOf([ '', 'participant', 'researcher']);

export default {
  profile,
  statusEntry,
  statusLog,
  userType,
};
