import { combineReducers } from 'redux';

import getCats from './get/categories';
import postOrg from './post/org';

export default combineReducers({
  getCats,
  postOrg
});
