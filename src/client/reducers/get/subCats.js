import {
  GET_SUB_CATS_IN_PROGRESS,
  GET_SUB_CATS_SUCCESS,
  GET_SUB_CATS_FAILURE
} from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  subCats: [],
  error: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SUB_CATS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true
      };
    case GET_SUB_CATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: {},
        subCats: payload
      };
    case GET_SUB_CATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    default:
      return state;
  }
};
