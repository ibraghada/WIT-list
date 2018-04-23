import {
  POST_ORG_IN_PROGRESS,
  POST_ORG_SUCCESS,
  POST_ORG_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isPosting: false,
  response: {},
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_ORG_IN_PROGRESS:
      return {
        ...state,
        isPosting: true
      };
    case POST_ORG_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: {},
        response: payload
      };
    case POST_ORG_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: payload
      };
    default:
      return state;
  }
};
