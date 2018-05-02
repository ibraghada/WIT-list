import { connect } from 'react-redux';

import SubmitOrg from '../components/submitOrg';

import { getCats } from '../actions/get/categories';
import { postOrg } from '../actions/post/org';

const mapStateToProps = state => ({
  isFetchingCats: state.getCats.isFetching,
  errorFetchingCats: state.getCats.error,
  cats: state.getCats.cats,
  isPostingOrg: state.postOrg.isPosting,
  errorPostingOrg: state.postOrg.error,
  response: state.postOrg.response,
  failedKeys: state.postOrg.failedKeys
});

const mapDispatchToProps = {
  getCats,
  postOrg
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrg);
