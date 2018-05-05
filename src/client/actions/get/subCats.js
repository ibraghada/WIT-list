import axios from 'axios';

import {
  GET_SUB_CATS_IN_PROGRESS,
  GET_SUB_CATS_SUCCESS,
  GET_SUB_CATS_FAILURE
} from '../../constants/actionTypes';

const getSubCatsInProgress = () => ({
  type: GET_SUB_CATS_IN_PROGRESS
});

const getSubCatsSuccess = subCats => ({
  type: GET_SUB_CATS_SUCCESS,
  payload: subCats
});

const getSubCatsFailure = error => ({
  type: GET_SUB_CATS_FAILURE,
  payload: error
});

export const getSubCats = () => dispatch => {
  dispatch(getSubCatsInProgress());
  axios.get('/api/v1/sub-cats')
    .then(
      response => {
        if (response >= 400) {
          return new Error('Error Fetching Sub Categories');
        }
        const { subCats } = response.data;
        dispatch(getSubCatsSuccess(subCats));

      }
    ).catch(error => {
      return dispatch(getSubCatsFailure(error));
    });
};
