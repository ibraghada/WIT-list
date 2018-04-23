import { connect } from 'react-redux';

import SubmitOrg from '../components/submitOrg';

import { getCats } from '../actions/get/categories';

const mapStateToProps = state => ({
  isFetching: state.getCats.isFetching,
  cats: state.getCats.cats,
  error: state.getCats.error
});

const mapDispatchToProps = {
  getCats
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrg);
