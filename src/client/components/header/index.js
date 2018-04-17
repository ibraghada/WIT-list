import React, { Component } from 'react';

import './index.css';
import typeWriter from '../../helpers/typeWriter';

class Header extends Component {
  componentDidMount() {
    typeWriter();
  }

  render() {
    return (
      <div className='header'>
        <div className='header__navbar'>
          <div className='header__navbar__logo'></div>
          <div className='header__navbar__submit'>
            <button type='button'>Submit Your Organization</button>
          </div>
        </div>
        <div className='container'>
          <div className='header__content'>
            <p className='header__content__paragraph ml12'>SO LONG AS WOMEN NOT FREE
              THE PEOPLE ARE NOT FREE</p>
            <p className='header__content__description'>Where women techies are more searchable, easy to find and visible</p>
          </div>
          <div className='header__content__taps'>
            <div className='box'>NON-Profit</div>
            <div className='box'>Community</div>
            <div className='box'>Education <br/> Academia</div>
            <div className='box'>NON-Profit</div>
            <div className='box'>Community</div>
            <div className='box'>Education <br/> Academia</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
