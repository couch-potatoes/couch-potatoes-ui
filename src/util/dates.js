export const currentDate = new Date();
let minDate = new Date();
minDate.setFullYear(currentDate.getFullYear() - 1);
let maxDate = new Date();
maxDate.setFullYear(currentDate.getFullYear() + 1);

export default {
  currentDate,
  maxDate,
  minDate,
};
