import { connect } from 'react-redux';

import SubmitOrg from '../components/submitOrg';

import { getSubCats } from '../actions/get/subCats';
import { postOrg } from '../actions/post/org';

const mapStateToProps = state => ({
  isFetchingCats: state.getSubCats.isFetching,
  errorFetchingCats: state.getSubCats.error,
  subCats: state.getSubCats.subCats,
  isPostingOrg: state.postOrg.isPosting,
  errorPostingOrg: state.postOrg.error,
  response: state.postOrg.response,
  failedKeys: state.postOrg.failedKeys
});

const mapDispatchToProps = {
  getSubCats,
  postOrg
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrg);
