export const frontToBack = (statusEntry) => {
  const {
    breakfast: didEatBreakfast,
    calories,
    carbs,
    eatAfter: ateAfterExercise,
    eatBefore: ateBeforeExercise,
    energyLevel,
    exerciseLength: hoursOfExercise,
    fats,
    numMeals: numOfMeals,
    proteins,
    sleepLength: hoursOfSleep,
    sleepQuality,
    stressLevel,
  } = statusEntry;
  return {
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
  };
};

export const backToFront = (statusEntry) => {
  const {
    ateAfterExercise: eatBefore,
    ateBeforeExercise: eatAfter,
    calories,
    carbs,
    didEatBreakfast: breakfast,
    energyLevel,
    fats,
    hoursOfExercise: exerciseLength,
    hoursOfSleep: sleepLength,
    numOfMeals: numMeals,
    proteins,
    sleepQuality,
    stressLevel,
  } = statusEntry;
  return {
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
  };
};

export default {
  frontToBack,

};
