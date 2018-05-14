import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrgCard from './orgCard';

import './index.css';

class OrgCards extends Component {
  render() {
    const { orgsSubCats, filters, filteredOrgs, orgs } = this.props;
    let orgsToDisplay = [];

    filters.length > 0 ?
      orgsToDisplay = filteredOrgs
      :
      (
        (filteredOrgs.length > 0 && filters.length === 0) ?
          orgsToDisplay = filteredOrgs || orgs
          :
          orgsToDisplay = orgs
      );

    return (
      <div className='OrgCards__container'>
        {
          orgsToDisplay.length ?
            (
              orgsToDisplay.map(
                org => {
                  const orgSubCats = [];
                  orgsSubCats.map
                  (
                    item => {
                      item.org_id === org.id
                        ?
                        orgSubCats.push(item)
                        :
                        null;
                    }
                  );
                  return <OrgCard key={org.id} org={org} orgSubCats={orgSubCats}/>;
                }
              )
            )
            :
            <div className='orgCards__error-div'>
              <div className='orgCards__error-img'></div>
              <h2>We Are Sorry, We Couldn't Find Anything That Matches Your Search Options! :(</h2>
            </div>
        }
      </div>
    );
  }
}

OrgCards.propTypes = {
  orgsSubCats: PropTypes.array,
  orgs: PropTypes.array,
  filters: PropTypes.array,
  filteredOrgs: PropTypes.array
};

export default OrgCards;
