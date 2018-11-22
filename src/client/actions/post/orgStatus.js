import axios from 'axios';

import {
  POST_ORG_STATUS_IN_PROGRESS,
  POST_ORG_STATUS_SUCCESS,
  POST_ORG_STATUS_FAILURE
} from '../../constants/actionTypes';

const postOrgStatusInProgress = () => ({
  type: POST_ORG_STATUS_IN_PROGRESS
});

const postOrgStatusSuccess = (payload, orgDetails) => ({
  type: POST_ORG_STATUS_SUCCESS,
  payload,
  orgDetails
});

const postOrgStatusFailure = error => ({
  type: POST_ORG_STATUS_FAILURE,
  payload: error || 'ERROR'
});

export const postOrgStatus = orgDetails => dispatch => {
  dispatch(postOrgStatusInProgress());
  axios.post('/api/v1/approve-org', orgDetails)
    .then(
      response => {
        const { updated } = response.data;
        if (updated) {
          dispatch(postOrgStatusSuccess({ updated, ...orgDetails }));
        } else {
          dispatch(postOrgStatusFailure());
        }
      }
    )
    .catch(error => {
      return dispatch(postOrgStatusFailure(error));
    });
};
