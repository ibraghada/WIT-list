import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import typeWriter from '../../helpers/typeWriter';

import './index.css';

class Header extends Component {
  componentDidMount() {
    typeWriter();
  }

  state = {
    filtersApplied: []
  }

  handleSubFilterClick = e => {
    const { orgsSubCats, orgs, filter, filters } = this.props;
    const filterValue = parseInt(e.target.id);
    filter(orgsSubCats, orgs, filterValue);
    this.setState({
      ...this.state,
      filters
    });
  }

  render() {
    const { subCats, filters } = this.props;

    return (
      <div className='header'>
        <div className='header__navbar'>
          <div className='header__navbar__logo'
            onClick={() => this.props.history.push('/')}></div>
          <div className='header__navbar__submit'>
            <button type='button'
              onClick={() => this.props.history.push('/submit-org')}>
              Submit Your Organization
            </button>
          </div>
        </div>
        <div className='header__container'>
          <div className='header__content'>
            <p className='header__content__paragraph ml12'>
              SO LONG AS WOMEN NOT FREE
              THE PEOPLE ARE NOT FREE
            </p>
            <p className='header__content__description'>
              Where women techies are more searchable, easy to find and visible
            </p>
          </div>
          <div className='header__content__taps'>
            {
              subCats.map(
                (subCat, index) => {
                  if (index > 5) return;
                  return (<div key={subCat.id} id={subCat.id}
                    className={
                      `header__box ${filters.includes(subCat.id) ? 'header__box-selected':''}`
                    }
                    onClick={this.handleSubFilterClick}>{subCat.title}</div>);
                }
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  subCats: PropTypes.array,
  orgsSubCats: PropTypes.array,
  orgs: PropTypes.array,
  filters: PropTypes.array,
  history: PropTypes.object,
  push: PropTypes.func,
  filter: PropTypes.func
};

export default Header;
