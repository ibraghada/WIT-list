import { connect } from 'react-redux';

import Search from '../components/search';

import { getSubCats } from '../actions/get/subCats';
import { getCats } from '../actions/get/cats';

const mapStateToProps = state => ({
  isFetchingSubCats: state.getSubCats.isFetching,
  errorFetchingSubCats: state.getSubCats.error,
  subCats: state.getSubCats.subCats,
  isFetchingCats: state.getCats.isFetching,
  errorFetchingCats: state.getCats.error,
  cats: state.getCats.cats
});

const mapDispatchToProps = {
  getSubCats,
  getCats
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
