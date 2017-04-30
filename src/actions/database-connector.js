import axios from 'axios';

import { addNotification, closeNotification } from './notifications';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

const encodeQueryConfig = (queryConfig) => {
  const {
    chartType,
    startDate,
    endDate,
    gender,
    sports,
  } = queryConfig;
  return `chart=${chartType}&startDate=${startDate}&endDate=${endDate}&gender=${gender}&sports=${sports.join('+')}`;
};

const transformResponseDataRow = ({ date, calories, carbs, proteins, fats }) => ([
  date,
  parseInt(calories, 10),
  parseInt(carbs, 10),
  parseInt(proteins, 10),
  parseInt(fats, 10),
]);

const transformResponseData = (dates) => {
  const columnsHeaders = ['Date', 'Calories', 'Carbs (g)', 'Fat (g)', 'Protein'];
  const dataRows =
    Object.keys(dates)
      .map(date => transformResponseDataRow(dates[date]));
  return [columnsHeaders].concat(dataRows);
};

export const fetchAggregatedData = (queryConfig) => dispatch => {
  dispatch(addNotification('Loading...'));
  return axios({
    method: 'POST',
    headers: requestHeaders,
    url: process.env.REACT_APP_PHP_API_URL,
    data: encodeQueryConfig(queryConfig),
  })
    .then((res) => {
      dispatch(closeNotification());
      const { data, status } = res;
      if (status !== 200) {
        throw res;
      }
      return transformResponseData(data);
    })
    .catch((err) => {
      dispatch(closeNotification());
      if (err.status === 204) {
        dispatch(addNotification('No data found for the given query'));
      } else {
        dispatch(addNotification('Error loading data; try again'));
      }
      return [];
    });
};
