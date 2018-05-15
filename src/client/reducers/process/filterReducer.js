import {
  ADD_FILTER,
  DROP_FILTER,
  DROP_ALL_FILTERS,
  FILTER_ACTION,
  SEARCH_ACTION,
  SEARCH_FAILED
} from '../../constants/actionTypes';

const initialState = {
  orgs: [],
  filters: [],
  searchFailed: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FILTER:
      return {
        ...state,
        filters: payload
      };

    case DROP_FILTER:
      return {
        ...state,
        filters: payload
      };

    case DROP_ALL_FILTERS:
      return {
        ...state,
        filters: [],
        orgs: []
      };

    case FILTER_ACTION:
      return {
        ...state,
        orgs: payload
      };

    case SEARCH_ACTION:
      return {
        ...state,
        orgs: payload,
        searchFailed: false
      };

    case SEARCH_FAILED:
      return {
        ...state,
        orgs: [],
        searchFailed: true
      };

    default:
      return state;
  }
};
