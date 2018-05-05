import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrgCard from './orgCard';

import './index.css';

class OrgCards extends Component {
  render() {
    const { orgsSubCats, orgs } = this.props;
    return (
      <div className='OrgCards__container'>
        {orgs.map(
          org => {
            const orgSubCats = [];
            orgsSubCats.map(item => {
              item.org_id === org.id ?
                orgSubCats.push(item)
                :
                null;
            });
            return <OrgCard key={org.id} org={org} orgSubCats={orgSubCats}/>;
          }
        )}
      </div>
    );
  }
}

OrgCards.propTypes = {
  orgsSubCats: PropTypes.array,
  orgs: PropTypes.array
};

export default OrgCards;
