import axios from 'axios';

import {
  GET_ALL_ORGS_IN_PROGRESS,
  GET_ALL_ORGS_SUCCESS,
  GET_ALL_ORGS_FAILURE
} from '../../constants/actionTypes';

const getAllOrgsInProgress = () => ({
  type: GET_ALL_ORGS_IN_PROGRESS
});

const getAllOrgsSuccess = orgs => ({
  type: GET_ALL_ORGS_SUCCESS,
  payload: orgs
});

const getAllOrgsFailure = error => ({
  type: GET_ALL_ORGS_FAILURE,
  payload: error
});

export const getAllOrgs = () => dispatch => {
  dispatch(getAllOrgsInProgress());
  axios.get('/api/v1/all-organizations')
    .then(
      response => {
        if (response >= 400) {
          return new Error('Error Fetching Organizations');
        }

        const orgs = response.data.orgs;

        return dispatch(getAllOrgsSuccess(orgs));
      }
    )
    .catch(error => {
      return dispatch(getAllOrgsFailure(error));
    });
};
