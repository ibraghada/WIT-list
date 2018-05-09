import axios from 'axios';

import {
  GET_CATS_IN_PROGRESS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE
} from '../../constants/actionTypes';

const getCatsInProgress = () => ({
  type: GET_CATS_IN_PROGRESS
});

const getCatsSuccess = cats => ({
  type: GET_CATS_SUCCESS,
  payload: cats
});

const getCatsFailure = error => ({
  type: GET_CATS_FAILURE,
  payload: error
});

export const getCats = () => dispatch => {
  dispatch(getCatsInProgress());
  axios.get('/api/v1/cats')
    .then(
      response => {
        if (response >= 400) {
          return new Error('Error Fetching Categories');
        }
        const cats = response.data.cats;
        dispatch(getCatsSuccess(cats));

      }
    ).catch(error => {
      return dispatch(getCatsFailure(error));
    });
};
