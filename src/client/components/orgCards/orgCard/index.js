import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.css';

class OrgCard extends Component {
  render() {
    const { org, orgSubCats } = this.props;
    const { name, website, description, country, city, operating } = org;
    return (
      <div className='OrgCard__card'>
        <div className='OrgCard__visible'>
          <div className='OrgCard__info'>
            <h2>{name}</h2>
            <div className='OrgCard_divider'></div>
            <p>{description.slice(0, 125)}...</p>
          </div>
        </div>
        <div className='OrgCard__hidden'>
          <div className='OrgCard__info'>
            <h2>{name}</h2>
            <h4>{city}, {country}</h4>
            <h4>Operating {operating}</h4>
            <h3>Filters:</h3>
            <p>
              {
                orgSubCats.map(
                  (subCat, index) => {
                    return index < 4 ?
                      `${subCat.title}, `
                      :
                      null;
                  }
                ).join('').slice(0, -2)
              }...
            </p>
          </div>
          <a href={website} target='_blank' rel='noopener noreferrer'>WEBSITE</a>
        </div>
      </div>
    );
  }
}

OrgCard.propTypes = {
  org: PropTypes.object,
  orgSubCats: PropTypes.array
};

export default OrgCard;
