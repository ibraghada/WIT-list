import { connect } from 'react-redux';

import homePage from '../components/homePage';

import { getOrgsSubCats } from '../actions/get/orgsSubCats';
import { getOrgs } from '../actions/get/orgs';

const mapStateToProps = state => ({
  isFetchingCats: state.getOrgsSubCats.isFetching,
  errorFetchingCats: state.getOrgsSubCats.error,
  orgsSubCats: state.getOrgsSubCats.orgsSubCats,
  isFetchingOrgs: state.getOrgs.isFetching,
  errorFetchingOrgs: state.getOrgs.error,
  orgs: state.getOrgs.orgs
});

const mapDispatchToProps = {
  getOrgsSubCats,
  getOrgs
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
