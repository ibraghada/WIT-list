import axios from 'axios';

import {
  GET_ORGS_SUB_CATS_IN_PROGRESS,
  GET_ORGS_SUB_CATS_SUCCESS,
  GET_ORGS_SUB_CATS_FAILURE
} from '../../constants/actionTypes';

const getOrgsSubCatsInProgress = () => ({
  type: GET_ORGS_SUB_CATS_IN_PROGRESS
});

const getOrgsSubCatsSuccess = orgsSubCats => ({
  type: GET_ORGS_SUB_CATS_SUCCESS,
  payload: orgsSubCats
});

const getOrgsSubCatsFailure = error => ({
  type: GET_ORGS_SUB_CATS_FAILURE,
  payload: error
});

export const getOrgsSubCats = () => dispatch => {
  dispatch(getOrgsSubCatsInProgress());
  axios.get('/api/v1/orgs-sub-cats')
    .then(
      response => {
        if (response >= 400) {
          return new Error('Error Fetching Organizations Sub Categories');
        }
        const orgsSubCats = response.data.orgsSubCats;
        dispatch(getOrgsSubCatsSuccess(orgsSubCats));

      }
    ).catch(error => {
      return dispatch(getOrgsSubCatsFailure(error));
    });
};
