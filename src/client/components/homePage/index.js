import React, { Component } from 'react';

import Header from '../header';
import Search from '../search';

import './index.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default HomePage;
