import {
  FILTER_ACTION,
  ADD_FILTER,
  DROP_FILTER,
  DROP_ALL_FILTERS
} from '../../constants/actionTypes';

import filterHelper from '../../helpers/applyFilter';

const addFilter = filters => ({
  type: ADD_FILTER,
  payload: filters
});

const dropFilter = filters => ({
  type: DROP_FILTER,
  payload: filters
});

const dropAllFilter = () => ({
  type: DROP_ALL_FILTERS
});

const filterAction = filteredOrgs => ({
  type: FILTER_ACTION,
  payload: filteredOrgs
});

export const filter = (orgSubCats, orgs, filterValue) => (dispatch, getState) => {
  const { filters } = getState().filterReducer;
  let newFilters = [];

  if (!filterValue) {

    dispatch(dropAllFilter());
  } else if (filters.length === 0) {
    newFilters.push(filterValue);

    dispatch(addFilter(newFilters));
  } else if (filters.includes(filterValue)) {
    filters.map(
      _filter => {
        _filter === filterValue ?
          null
          :
          newFilters.push(_filter);
      }
    );

    dispatch(dropFilter(newFilters));
  } else {
    newFilters = filters;
    newFilters.push(filterValue);

    dispatch(addFilter(newFilters));
  }

  const filteredOrgs = filterHelper(orgSubCats, orgs, newFilters);
  return dispatch(filterAction(filteredOrgs));
};
