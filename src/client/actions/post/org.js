import axios from 'axios';

import {
  POST_ORG_IN_PROGRESS,
  POST_ORG_SUCCESS,
  POST_ORG_BAD,
  POST_ORG_FAILURE
} from '../../constants/actionTypes';

const postOrgInProgress = () => ({
  type: POST_ORG_IN_PROGRESS
});

const postOrgSuccess = payload => ({
  type: POST_ORG_SUCCESS,
  payload
});

const postOrgBad = payload => ({
  type: POST_ORG_BAD,
  payload
});

const postOrgFailure = error => ({
  type: POST_ORG_FAILURE,
  payload: error
});

export const postOrg = orgDetails => dispatch => {
  dispatch(postOrgInProgress());
  axios.post('/api/v1/submit-org', { orgDetails })
    .then(
      response => {
        const { inserted, failedKeys } = response.data;

        !inserted && failedKeys.length >= 1 ?
          dispatch(postOrgBad(failedKeys))
          :
          dispatch(postOrgSuccess(inserted));
      }
    )
    .catch(error => {
      return dispatch(postOrgFailure(error));
    });
};
