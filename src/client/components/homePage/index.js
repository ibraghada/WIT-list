import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../../containers/header';
import Search from '../../containers/search';
import OrgCards from '../../containers/orgCards';
import Footer from '../footer';

import './index.css';

class HomePage extends Component {
  componentDidMount() {
    const { getOrgsSubCats, getOrgs } = this.props;
    getOrgsSubCats();
    getOrgs();
  }

  render() {
    const { orgsSubCats, isFetchingOrgs, orgs } = this.props;
    return (
      <div>
        {isFetchingOrgs ?
          (
            <div className='homePage__loader'>
              <div className='loader'></div>
            </div>
          )
          :
          (
            <div>
              <Header />
              <Search />
              <OrgCards orgs={orgs} orgsSubCats={orgsSubCats}/>
              <Footer />
            </div>
          )}
      </div>
    );
  }
}

HomePage.propTypes = {
  getOrgs: PropTypes.func,
  getOrgsSubCats: PropTypes.func,
  orgsSubCats: PropTypes.array,
  isFetchingOrgs: PropTypes.bool,
  orgs: PropTypes.array
};

export default HomePage;
