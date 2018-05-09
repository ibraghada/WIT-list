import {
  GET_CATS_IN_PROGRESS,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  cats: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CATS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_CATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        cats: payload
      };
    case GET_CATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};
