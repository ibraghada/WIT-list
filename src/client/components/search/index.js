import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Search extends Component {
  componentDidMount() {
    const { getSubCats, getCats } = this.props;
    getCats();
    getSubCats();
  }

  render() {
    const { subCats, cats } = this.props;
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
            {
              cats.map(
                cat => {
                  return <button
                    key={cat.id} className='search__main-filters-btn'>
                    {cat.title}
                  </button>;
                }
              )
            }
          </div>
          <div className='search__sub-filters'>
            {
              subCats.map(
                subCat => {
                  return <button
                    key={subCat.id} className='search__sub-filters-btn'>
                    {subCat.title}
                  </button>;
                }
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  getSubCats: PropTypes.func,
  getCats: PropTypes.func,
  subCats: PropTypes.array,
  cats: PropTypes.array,
  orgFilter: PropTypes.func
};

export default Search;
