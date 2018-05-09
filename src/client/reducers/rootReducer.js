import { combineReducers } from 'redux';

import getOrgs from './get/orgs';
import getCats from './get/cats';
import getSubCats from './get/subCats';
import getOrgsSubCats from './get/orgsSubCats';
import postOrg from './post/org';
import filterReducer from './process/filterReducer';

export default combineReducers({
  getOrgs,
  getCats,
  getSubCats,
  getOrgsSubCats,
  postOrg,
  filterReducer
});
