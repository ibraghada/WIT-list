import React, { Component } from 'react';

import OrgCard from './orgCard';

import './index.css';

class OrgCards extends Component {
  render() {
    return (
      <div className='OrgCards__container'>
        <OrgCard />
        <OrgCard />
        <OrgCard />
        <OrgCard />
        <OrgCard />
        <OrgCard />
      </div>
    );
  }
}

export default OrgCards;
