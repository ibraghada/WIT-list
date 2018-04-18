// HARD CODED

import React, { Component } from 'react';

import './index.css';

class Search extends Component {
  render() {
    return (
      <section className='search__container'>
        <div className='search__search-area'>
          <div>
            <input
              className='search__search-field'
              type='text'
              name='searchInput'
              placeholder='Search for an organization by name, city, interest or action...'
              defaultValue=''
            />
          </div>
        </div>
        <div className='search__filters-controllers'>
          <div className='search__controllers-left search__icon-btn'>Filters</div>
          <div className='search__controllers-right search__icon-btn'>Clear</div>
        </div>
        <div className='search__filters'>
          <div className='search__main-filters'>
            <button className='search__main-filters-btn'>Org. Type</button>
            <button className='search__main-filters-btn'>Audience</button>
            <button className='search__main-filters-btn'>Funding</button>
            <button className='search__main-filters-btn'>Focus Area</button>
          </div>
          <div className='search__sub-filters'>
            <button className='search__sub-filters-btn'>NON-Frofit</button>
            <button className='search__sub-filters-btn'>Community</button>
            <button className='search__sub-filters-btn'>Education</button>
            <button className='search__sub-filters-btn'>Events</button>
            <button className='search__sub-filters-btn'>Accelerator</button>
            <button className='search__sub-filters-btn'>Media</button>
            <button className='search__sub-filters-btn'>Investment</button>
            <button className='search__sub-filters-btn'>Business</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
