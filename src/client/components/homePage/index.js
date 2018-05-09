import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';
import OrgCards from '../orgCards';

import './index.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
        <OrgCards />
      </div>
    );
  }
}

export default HomePage;
