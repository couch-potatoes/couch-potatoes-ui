import { PropTypes } from 'react';

    //properties needed for status entries
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

    //properties needed for status log
const statusLog = PropTypes.objectOf(statusEntry);

    //properties needed for profile
const profile = PropTypes.shape({
  age: PropTypes.number,
  gender: PropTypes.string,
  height: PropTypes.number,
  sports: PropTypes.arrayOf(PropTypes.string),
  weight: PropTypes.number,
});

    //properties needed for determining participant or researcher
const userType = PropTypes.oneOf([ '', 'participant', 'researcher']);

    //export default values
export default {
  profile,
  statusEntry,
  statusLog,
  userType,
};
