import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Footer from '../footer';

import 'react-select/dist/react-select.css';
import './index.css';

import countries from '../../helpers/countries';
import inputsValidator from '../../helpers/inputsValidator';

const table = {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '100%'
};

const tdTh = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px'
};

const tr = {
  backgroundColor: '#dddddd'
};

class SubmitOrg extends Component {
  constructor() {
    super();
    this.state = {
      orgs: []
    };
  }

  componentDidMount() {
    this.props.getAllOrgs();
  }

  handleClick = (e, org) => {
    const { accepted, id } = org;
    this.props.postOrgStatus({ id, accepted });
  }

  render() {
    const { orgs } = this.props;

    return (
      <div>
        <table style={table}>
          <tr style={tr}>
            <th style={tdTh}>Name</th>
            <th style={tdTh}>Description</th>
            <th style={tdTh}>Country</th>
            <th style={tdTh}>Website</th>
            <th style={tdTh}>Operating</th>
            <th style={tdTh}>Status</th>
          </tr>
          <tbody>
            {
              orgs.length ? orgs.map(org => {
                return (
                  <tr key={`organization_#${org.id}`}>
                    <td style={tdTh}>{org.name}</td>
                    <td style={tdTh}>{org.description}</td>
                    <td style={tdTh}>{org.country}</td>
                    <td style={tdTh}>{org.website}</td>
                    <td style={tdTh}>{org.operating}</td>
                    <td style={tdTh}>
                      {
                        <button onClick={e => this.handleClick(e, org)}>{org.accepted ? 'Pend' : 'Approve'}</button>
                      }
                    </td>
                  </tr>
                );
              })
                : null
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SubmitOrg;
