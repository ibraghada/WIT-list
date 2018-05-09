import { connect } from 'react-redux';

import Search from '../components/search';

import { getSubCats } from '../actions/get/subCats';
import { getCats } from '../actions/get/cats';
import { filter } from '../actions/process/filterAction';
import { search } from '../actions/process/searchAction';

const mapStateToProps = state => ({
  isFetchingSubCats: state.getSubCats.isFetching,
  errorFetchingSubCats: state.getSubCats.error,
  subCats: state.getSubCats.subCats,
  isFetchingCats: state.getCats.isFetching,
  errorFetchingCats: state.getCats.error,
  cats: state.getCats.cats,
  orgs: state.getOrgs.orgs,
  filteredOrgs: state.filterReducer.orgs,
  searchFailed: state.filterReducer.searchFailed,
  filters: state.filterReducer.filters,
  orgsSubCats: state.getOrgsSubCats.orgsSubCats
});

const mapDispatchToProps = {
  getSubCats,
  getCats,
  filter,
  search
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
