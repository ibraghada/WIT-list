import React, { Component } from 'react';

import './index.css';

class OrgCard extends Component {
  render() {
    return (
      <div className='OrgCard__card'>
        <div className='OrgCard__visible'>
          <div className='OrgCard__info'>
            <h2>ASTIA</h2>
            <div className='OrgCard_divider'></div>
            <p>A not-for-profit organization that offers paid, week-long programs to help female entrepreneurs in technology.</p>
          </div>
        </div>
        <div className='OrgCard__hidden'>
          <div className='OrgCard__info'>
            <h2>ASTIA</h2>
            <h4>California, U.S.</h4>
            <h3>Filters:</h3>
            <p>Not For Profit, Education</p>
          </div>
          <a href='http://google.com' target='_blank' rel='noopener noreferrer'>WEBSITE</a>
        </div>
      </div>
    );
  }
}

export default OrgCard;
