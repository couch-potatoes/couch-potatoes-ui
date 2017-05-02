export const currentDate = new Date();
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
let minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 1);
let maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() + 1);

    //export the default dates
export default {
  currentDate,
  yesterday,
  maxDate,
  minDate,
};
