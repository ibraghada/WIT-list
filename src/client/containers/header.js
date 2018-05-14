import { connect } from 'react-redux';

import Header from '../components/header';
import { filter } from '../actions/process/filterAction';

const mapStateToProps = state => ({
  subCats: state.getSubCats.subCats,
  orgs: state.getOrgs.orgs,
  orgsSubCats: state.getOrgsSubCats.orgsSubCats,
  filters: state.filterReducer.filters
});

const mapDispatchToProps = {
  filter
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
