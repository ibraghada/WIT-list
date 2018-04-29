import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import 'react-select/dist/react-select.css';
import './index.css';

import countries from '../../helpers/countries';
import inputsValidator from '../../helpers/inputsValidator';

class SubmitOrg extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      website: '',
      description: '',
      operating: '',
      country: '',
      city: '',
      type: '',
      audience: '',
      funding: '',
      theme: '',
      comments: '',
      reSubmitRequired: {},
      orgTypes: [],
      orgAudience: [],
      orgFunding: [],
      orgThemes: []
    };
  }

  handleInputChange = event => {
    const field = event.target;
    const name = field.name;
    const value = field.value;
    this.setState(
      {
        ...this.state,
        [name]: value
      }
    );
  }

  handleOrgTypeChange = type => {
    this.setState(
      { ...this.state,
        type }
    );
  }

  handleAudienceChange = audience => {
    this.setState(
      { ...this.state,
        audience }
    );
  }

  handleFundingChange = funding => {
    this.setState(
      { ...this.state,
        funding }
    );
  }

  handleThemeChange = theme => {
    this.setState(
      { ...this.state,
        theme }
    );
  }

  handleCountryChange = country => {
    this.setState(
      { ...this.state,
        country }
    );
  }

  handleOperatingChange = operating => {
    this.setState(
      { ...this.state,
        operating }
    );
  }

  handleFailedInputs = arr => {
    const _state = this.state;
    arr.forEach(input => {
      _state.reSubmitRequired[input] = true;
    });
    this.setState({
      ..._state
    });
  }

  handleOrgSubmit = () => {
    const { name, website, description, operating, country,
      city, type, audience, funding, theme, comments } = this.state;

    const orgDetails = {
      name,
      website,
      description,
      operating,
      country,
      city,
      type,
      audience,
      funding,
      theme,
      comments
    };

    const failedInputs = inputsValidator(orgDetails);
    const { postOrg } = this.props;

    !failedInputs.length?
      postOrg(orgDetails)
      :
      this.handleFailedInputs(failedInputs);
  }

  componentDidMount() {
    const { getCats } = this.props;
    getCats();
  }

  render() {
    const {
      type, audience, funding, theme, operating, country,
      orgTypes, orgAudience, orgFunding, orgThemes, reSubmitRequired
    } = this.state;
    const { cats } = this.props;

    if (cats.length !== 0) {
      cats.forEach(cat => {
        switch (cat.parent_cat) {
          case 1:
            return {
              ...this.state,
              orgTypes: orgTypes.push({ value: cat.id, label: cat.title })
            };
          case 2:
            return {
              ...this.state,
              orgAudience: orgAudience.push({ value: cat.id, label: cat.title })
            };
          case 3:
            return {
              ...this.state,
              orgFunding: orgFunding.push({ value: cat.id, label: cat.title })
            };
          case 4:
            return {
              ...this.state,
              orgThemes: orgThemes.push({ value: cat.id, label: cat.title })
            };
          default:
        }
      });
    }

    return (
      <div className='submitOrg__content'>
        <div className='submitOrg__logo'></div>
        <div className='submitOrg'>
          <div>
            <span className='submitOrg__title'>Registration</span>
          </div>
          <div className='submitOrg__container'>
            <div className='submitOrg__question'>
              <span>Organization Name</span>
              <input className={!reSubmitRequired.name? 'submitOrg__input':'submitOrg__input submitOrg__error'} type='text'
                name='name' onChange={this.handleInputChange}/>
            </div>
            <div className='submitOrg__question'>
              <span>Website</span>
              <input className={!reSubmitRequired.website? 'submitOrg__input':'submitOrg__input submitOrg__error'} type='text'
                name='website' onChange={this.handleInputChange}
              />
              {reSubmitRequired.website ?
                (<span style={{ color: 'red', fontSize: '14px' }}>Enter A Valid Website Link!</span>) : null
              }
            </div>
            <div className='submitOrg__question'>
              <span>Description (250 Characters)</span>
              <textarea className={!reSubmitRequired.description? 'submitOrg__input submitOrg__textarea':'submitOrg__textarea submitOrg__input submitOrg__error'}
                name='description' onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className='submitOrg__question'>
              <span>Type of Organization</span>
              <Select className={!reSubmitRequired.type? 'submitOrg__select':'submitOrg__select submitOrg__error'}
                name='type'
                simpleValue
                value={type}
                onChange={this.handleOrgTypeChange}
                multi
                options={orgTypes}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Audience</span>
              <Select className={!reSubmitRequired.audience? 'submitOrg__select':'submitOrg__select submitOrg__error'}
                name='audience'
                value={audience}
                onChange={this.handleAudienceChange}
                simpleValue
                multi
                options={orgAudience}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Subcategory for funding (Optional)</span>
              <Select className='submitOrg__select'
                name='funding'
                value={funding}
                onChange={this.handleFundingChange}
                simpleValue
                multi
                options={orgFunding}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Focus area / theme</span>
              <Select className={!reSubmitRequired.theme? 'submitOrg__select':'submitOrg__select submitOrg__error'}
                name='theme'
                simpleValue
                multi
                value={theme}
                onChange={this.handleThemeChange}
                options={orgThemes}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Operating</span>
              <Select className={!reSubmitRequired.operating? 'submitOrg__select':'submitOrg__select submitOrg__error'}
                name='operating'
                simpleValue
                value={operating}
                onChange={this.handleOperatingChange}
                options={[
                  { value: 'Internationally', label: 'Internationally' },
                  { value: 'Locally', label: 'Locally' }
                ]}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Country</span>
              <Select className={!reSubmitRequired.country? 'submitOrg__select':'submitOrg__select submitOrg__error'}
                name='country'
                simpleValue
                value={country}
                onChange={this.handleCountryChange}
                options={countries}
              />
            </div>
            <div className='submitOrg__question'>
              <span>City</span>
              <input className={!reSubmitRequired.city? 'submitOrg__input':'submitOrg__input submitOrg__error'} type='text'
                name='city' onChange={this.handleInputChange}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Additional Comments (Optional)</span>
              <textarea className='submitOrg__textarea submitOrg__input'
                name='comments' onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className='submitOrg__submit__div'>
              <button className='submitOrg__submit'
                onClick={this.handleOrgSubmit}
              >Submit</button>
            </div>
            {Object.keys(reSubmitRequired).length ?
              (<span style={{ color: 'red', fontSize: '14px' }}>Some Fields Are Required!</span>) : null
            }
          </div>
        </div>
      </div>
    );
  }
}

SubmitOrg.propTypes = {
  postOrg: PropTypes.func,
  getCats: PropTypes.func,
  cats: PropTypes.array
};

export default SubmitOrg;
