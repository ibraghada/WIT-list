import axios from 'axios';

import {
  GET_ORGS_IN_PROGRESS,
  GET_ORGS_SUCCESS,
  GET_ORGS_FAILURE
} from '../../constants/actionTypes';

const getOrgsInProgress = () => ({
  type: GET_ORGS_IN_PROGRESS
});

const getOrgsSuccess = orgs => ({
  type: GET_ORGS_SUCCESS,
  payload: orgs
});

const getOrgsFailure = error => ({
  type: GET_ORGS_FAILURE,
  payload: error
});

export const getOrgs = () => dispatch => {
  dispatch(getOrgsInProgress());
  axios.get('/api/v1/organizations')
    .then(
      response => {
        if (response >= 400) {
          return new Error('Error Fetching Organizations');
        }

        const orgs = response.data.orgs;

        return dispatch(getOrgsSuccess(orgs));
      }
    )
    .catch(error => {
      return dispatch(getOrgsFailure(error));
    });
};
