import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class Search extends Component {
  state = {
    catFilter: 0,
    showFilters: false
  }

  componentDidMount() {
    const { getSubCats, getCats } = this.props;
    getCats();
    getSubCats();
  }

  handleFilterClick = e => {
    const catId = parseInt(e.target.id);
    this.setState({
      ...this.state,
      catFilter: catId
    });
  }

  handleSubFilterClick = e => {
    const { orgsSubCats, orgs, filter } = this.props;
    const filterValue = parseInt(e.target.id);
    filter(orgsSubCats, orgs, filterValue);
  }

  handleClearFiltersClick = () => {
    const { filter } = this.props;
    filter([], [], 0);
  }

  handleShowFiltersClick = () => {
    const { showFilters } = this.state;
    this.setState(
      {
        ...this.state,
        showFilters: !showFilters
      }
    );
  }

  handleSearchInput = e => {
    const searchValue = e.target.value;
    const { search, orgs } = this.props;
    search(orgs, searchValue);
  }

  render() {
    const { subCats, cats, filters, searchFailed } = this.props;
    const { catFilter, showFilters } = this.state;

    return (
      <section className='search__container'>
        <div className='search__search-area'>
          <div className='search__box-field'>
            <input
              className='search__search-field'
              type='text'
              name='searchInput'
              placeholder='Search for an organization by name, city, interest or action...'
              defaultValue=''
              onChange={this.handleSearchInput}
            />
            {
              searchFailed &&
              (<div className='search__info-msg'>
                This organization wasn't found on our database, can you
                <a href='/submit-org'> tell us about it?!</a>
              </div>)
            }
          </div>
        </div>
        <div className='search__filters-controllers'>
          <div className='search__controllers-left search__icon-btn'
            onClick={this.handleShowFiltersClick}>Filters</div>
          <div className='search__controllers-right search__icon-btn'
            onClick={this.handleClearFiltersClick}>Clear</div>
        </div>
        <div className='search__filters'>
          {
            showFilters ?
              (
                <div className='search__main-filters'>
                  {
                    cats.map(
                      cat => {
                        return <button
                          key={cat.id} id={cat.id}
                          className={`search__main-filters-btn
                            ${catFilter === cat.id ? 'search__selected-filter':null}`}
                          onClick={this.handleFilterClick}>
                          {cat.title}
                        </button>;
                      }
                    )
                  }
                </div>
              )
              :
              null
          }
          {
            catFilter && showFilters ?
              (
                <div className='search__sub-filters'>
                  {
                    subCats.map(
                      subCat => {
                        if (subCat.parent_cat === catFilter) {
                          return (
                            <button
                              key={subCat.id} id={subCat.id}
                              className={`search__sub-filters-btn
                                ${filters.includes(subCat.id) ? 'search__selected-filter':null}`}
                              onClick={this.handleSubFilterClick}>
                              {subCat.title}
                            </button>
                          );
                        }
                      }
                    )
                  }
                </div>
              )
              :
              null
          }
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
  orgFilter: PropTypes.func,
  orgs: PropTypes.array,
  orgsSubCats: PropTypes.array,
  filteredOrgs: PropTypes.array,
  filters: PropTypes.array,
  filter: PropTypes.func,
  search: PropTypes.func,
  searchFailed: PropTypes.bool
};

export default Search;
