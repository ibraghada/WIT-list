import { combineReducers } from 'redux';

import getOrgs from './get/orgs';
import getAllOrgs from './get/allOrgs';
import getCats from './get/cats';
import getSubCats from './get/subCats';
import getOrgsSubCats from './get/orgsSubCats';
import postOrg from './post/org';
import postOrgStatus from './post/orgStatus';
import filterReducer from './process/filterReducer';

export default combineReducers({
  getOrgs,
  getAllOrgs,
  getCats,
  getSubCats,
  getOrgsSubCats,
  postOrg,
  postOrgStatus,
  filterReducer
});
