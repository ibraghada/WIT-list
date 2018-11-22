import {
  POST_ORG_STATUS_IN_PROGRESS,
  POST_ORG_STATUS_SUCCESS,
  POST_ORG_STATUS_BAD,
  POST_ORG_STATUS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isPosting: false,
  response: false,
  failedKeys: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_ORG_STATUS_IN_PROGRESS:
      return {
        ...state,
        isPosting: true
      };

    case POST_ORG_STATUS_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: {},
        response: payload
      };

    case POST_ORG_STATUS_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: payload
      };

    default:
      return state;
  }
};
