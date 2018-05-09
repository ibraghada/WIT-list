import { connect } from 'react-redux';

import orgCards from '../components/orgCards';

import { filterAction } from '../actions/process/filterAction';

const mapStateToProps = state => ({
  orgs: state.getOrgs.orgs,
  filteredOrgs: state.filterReducer.orgs,
  filters: state.filterReducer.filters
});

const mapDispatchToProps = {
  filterAction
};

export default connect(mapStateToProps, mapDispatchToProps)(orgCards);
