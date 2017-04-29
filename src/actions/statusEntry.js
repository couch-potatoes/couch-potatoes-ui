import axios from 'axios';
import _ from 'lodash';

import { makeAPIEndpoint } from '../util/api';

const makeStatusEntryEndpoint = _.memoize((userId) => makeAPIEndpoint(`Participants/${userId}/statusEntries`));

export const CACHE_STATUS_ENTRY = 'CACHE_STATUS_ENTRY';
export const CACHE_STATUS_ENTRIES = 'CACHE_STATUS_ENTRIES';

export const cacheStatusEntry = (date, statusEntry) => ({
  type: CACHE_STATUS_ENTRY,
  payload: {
    date,
    statusEntry,
  },
});

export const cacheStatusEntries = (statusEntries) => ({
  type: CACHE_STATUS_ENTRIES,
  payload: {
    statusEntries,
  },
});

export const getStatusEntries = () => (dispatch, getState) => {
  const { token, userId } = getState().account;
  return axios({
    method: 'GET',
    headers: {
      Authorization: token,
    },
    url: makeStatusEntryEndpoint(userId),
  })
    .then(({ data: entries }) => {
      const dateEntries = entries.map((entry) => [
        new Date(entry.date).toDateString(),
        entry,
      ]);
      dispatch(cacheStatusEntries(_.fromPairs(dateEntries)));
    });
};

export const getStatusEntry = (date) => (dispatch, getState) => {
  const { token, userId, statusEntryCache } = getState().account;
  if (statusEntryCache[date]) {
    return Promise.resolve(statusEntryCache[date]);
  }
  return axios({
    method: 'GET',
    headers: {
      Authorization: token,
    },
    url: `${makeStatusEntryEndpoint(userId)}/${date}`,
  })
    .then((res) => {
      dispatch(cacheStatusEntry(res.data));
    });
};

export const createStatusEntry = (date, statusEntry) => (dispatch, getState) => {
  const { token, userId } = getState().account;
  const entry = {
    ...statusEntry,
    date,
  };
  return axios({
    method: 'POST',
    headers: {
      Authorization: token,
    },
    url: makeStatusEntryEndpoint(userId),
    data: entry,
  })
    .then(() => {
      dispatch(cacheStatusEntry(date, statusEntry));
    });
};

export const updateStatusEntry = (date, statusEntry) => (dispatch, getState) => {
  const { token, userId } = getState().account;
  return axios({
    method: 'PUT',
    headers: {
      Authorization: token,
    },
    url: `${makeStatusEntryEndpoint(userId)}/${date}`,
    data: statusEntry,
  });
};
