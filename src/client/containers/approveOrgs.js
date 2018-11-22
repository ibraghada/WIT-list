import { connect } from 'react-redux';

import ApproveOrgs from '../components/approveOrgs';

import { getAllOrgs } from '../actions/get/allOrgs';
import { postOrgStatus } from '../actions/post/orgStatus';

const mapStateToProps = state => ({
  orgs: state.getAllOrgs.orgs,
  isFetching: state.postOrgStatus.isFetching,
  updated: state.postOrgStatus.response
});

const mapDispatchToProps = {
  getAllOrgs,
  postOrgStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproveOrgs);
