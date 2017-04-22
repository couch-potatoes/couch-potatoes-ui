import axios from 'axios';
import _ from 'lodash';

import { makeAPIEndpoint } from '../util/api';

export const SAVE_PROFILE_TO_STATE = 'SAVE_PROFILE_TO_STATE';
export const CACHE_STATUS_ENTRY = 'CACHE_STATUS_ENTRY';

const makeProfileEndpoint = _.memoize((userId) => makeAPIEndpoint(`Participants/${userId}/participantProfile`));

export const cacheStatusEntry = (date, statusEntry) => ({
  type: CACHE_STATUS_ENTRY,
  payload: {
    date: date.toDateString(),
    statusEntry,
  },
});

export const saveProfileToState = (profile) => ({
  type: SAVE_PROFILE_TO_STATE,
  payload: {
    profile,
  },
});

export const getProfile = () => {
  return (dispatch, getState) => {
    const { token, userId } = getState().account;
    return axios({
      method: 'GET',
      headers: {
        Authorization: token,
      },
      url: makeProfileEndpoint(userId),
    });
  };
};

export const updateProfile = (profile) => {
  return (dispatch, getState) => {
    const { token, userId } = getState().account;

    return axios({
      method: 'PUT',
      headers: {
        Authorization: token,
      },
      url: makeProfileEndpoint(userId),
      data: profile
    });
  };
};

export const createProfile = (profile) => {
  return (dispatch, getState) => {
    const { token, userId } = getState().account;

    return axios({
      method: 'POST',
      headers: {
        Authorization: token,
      },
      url: makeProfileEndpoint(userId),
      data: profile
    });
  };
};

export const getStatusEntry = (date) => (dispatch, getState) => {
  const { token, userId } = getState().account;

  return axios({
    method: 'GET',
    headers: {
      Authorization: token,
    },
    url: makeAPIEndpoint(`Participants/${userId}/statusEntries/${date}`),
  });
};
