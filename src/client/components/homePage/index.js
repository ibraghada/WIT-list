import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Search from '../../containers/search';
import OrgCards from '../../containers/orgCards';

import './index.css';

class HomePage extends Component {
  componentDidMount() {
    const { getOrgsSubCats, getOrgs } = this.props;
    getOrgsSubCats();
    getOrgs();
  }

  render() {
    const { orgsSubCats, orgs } = this.props;
    return (
      <div>
        <Header />
        <Search />
        <OrgCards orgs={orgs} orgsSubCats={orgsSubCats}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  getOrgs: PropTypes.func,
  getOrgsSubCats: PropTypes.func,
  orgsSubCats: PropTypes.array,
  orgs: PropTypes.array
};

export default HomePage;
