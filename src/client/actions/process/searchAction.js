import {
  SEARCH_ACTION,
  SEARCH_FAILED
} from '../../constants/actionTypes';

import searchHelper from '../../helpers/search';

const searchAction = filteredOrgs => ({
  type: SEARCH_ACTION,
  payload: filteredOrgs
});

const searchFailed = () => ({
  type: SEARCH_FAILED
});

export const search = (orgs, searchWord) => dispatch => {
  const filteredOrgs = searchHelper(orgs, searchWord);

  filteredOrgs.length > 0
    ?
    dispatch(searchAction(filteredOrgs))
    :
    dispatch(searchFailed());
};
