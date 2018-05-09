import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrgCard from './orgCard';

import './index.css';

class OrgCards extends Component {
  render() {
    const { orgsSubCats, filters, filteredOrgs, orgs } = this.props;
    let orgsToDisplay = [];

    filters.length > 0 ?
      (orgs.map(org => {
        filteredOrgs.map(orgId => {
          org.id === orgId ?
            orgsToDisplay.push(org)
            : null;
        });
      }))
      :
      (
        (filteredOrgs.length > 0 && filters.length === 0) ?
          orgsToDisplay = filteredOrgs || orgs : orgsToDisplay = orgs
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
                      item.org_id === org.id ?
                        orgSubCats.push(item)
                        :
                        null;
                    }
                  );
                  return <OrgCard key={org.id} org={org} orgSubCats={orgSubCats}/>;
                })
            )
            :
            <h2>Empty</h2>
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
