import axios from 'axios';

import { addNotification, closeNotification } from './notifications';

const requestHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/x-www-form-urlencoded',
};

export const encodeQueryConfig = (queryConfig) => {
  const {
    chartType,
    startDate,
    endDate,
    gender,
    sports,
  } = queryConfig;
  return `chart=${chartType}&startDate=${startDate}&endDate=${endDate}&gender=${gender}&sports=${sports.join('+')}`;
};

const getColumnHeaders = (chartType) => {
  switch (chartType) {
  case 'nutrition': {
    return ['Date', 'Calories', 'Carbs (g)', 'Fat (g)', 'Protein'];
  }
  case 'wellness': {
    return ['Date', 'Calories', 'Carbs (g)', 'Fat (g)', 'Protein'];
  }
  default: {
    return [];
  }
  }
};

const transformResponseDataRow = (chartType, dataRow) => {
  switch (chartType) {
  case 'nutrition': {
    const { date, calories, carbs, proteins, fats } = dataRow;
    return [
      date,
      parseInt(calories, 10),
      parseInt(carbs, 10),
      parseInt(proteins, 10),
      parseInt(fats, 10),
    ];
  }
  case 'wellness': {
    const { date, sleepQuality, sleepLength, stressLevel, energyLevel } = dataRow;
    return [
      date,
      parseInt(sleepQuality, 10),
      parseInt(sleepLength, 10),
      parseInt(stressLevel, 10),
      parseInt(energyLevel, 10),
    ];
  }
  default: {
    return [];
  }
  }
};

const transformResponseData = (chartType, dates) => {
  const columnsHeaders = getColumnHeaders(chartType);
  const dataRows =
    Object.keys(dates)
      .map(date => transformResponseDataRow(chartType, dates[date]));
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
      return transformResponseData(queryConfig.chartType, data);
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
