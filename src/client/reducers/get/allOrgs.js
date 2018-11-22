import {
  GET_ALL_ORGS_IN_PROGRESS,
  POST_ORG_STATUS_SUCCESS,
  GET_ALL_ORGS_SUCCESS,
  GET_ALL_ORGS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  orgs: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ORGS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };

    case GET_ALL_ORGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        orgs: payload
      };

    case POST_ORG_STATUS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        orgs: state.orgs.reduce((accum, org) => {
          if (org.id === payload.id && payload.updated) {
            accum.push({
              ...org,
              accepted: !payload.accepted
            });
          } else {
            accum.push(org);
          }
          return accum;
        }, [])
      };

    case GET_ALL_ORGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    default:
      return state;
  }
};
