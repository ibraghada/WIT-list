import {
  GET_ORGS_IN_PROGRESS,
  GET_ORGS_SUCCESS,
  GET_ORGS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  orgs: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ORGS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };

    case GET_ORGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        orgs: payload
      };

    case GET_ORGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    default:
      return state;
  }
};
