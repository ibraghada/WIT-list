import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Footer from '../footer';

import 'react-select/dist/react-select.css';
import './index.css';

import { countries } from '../../helpers/countries';
import inputsValidator from '../../helpers/inputsValidator';

class SubmitOrg extends Component {
  state = {
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

  handleSelectChange = e => {
    const { name, value } = e.target;
    this.setState(
      { ...this.state,
        [name]: value }
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

    Object.keys(_state.reSubmitRequired).length ?
      this.setState({
        ..._state
      })
      :
      null;
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
    const { getSubCats } = this.props;
    getSubCats();
  }

  render() {
    const {
      type, audience, funding, theme, operating, country,
      orgTypes, orgAudience, orgFunding, orgThemes, reSubmitRequired
    } = this.state;
    const { subCats, isPostingOrg, response, history } = this.props;

    if (subCats.length !== 0) {
      subCats.forEach(subCat => {
        switch (subCat.parent_cat) {
          case 1:
            return {
              ...this.state,
              orgTypes: orgTypes.push({ value: subCat.id, label: subCat.title })
            };
          case 2:
            return {
              ...this.state,
              orgAudience: orgAudience.push({ value: subCat.id, label: subCat.title })
            };
          case 3:
            return {
              ...this.state,
              orgFunding: orgFunding.push({ value: subCat.id, label: subCat.title })
            };
          case 4:
            return {
              ...this.state,
              orgThemes: orgThemes.push({ value: subCat.id, label: subCat.title })
            };
          default:
        }
      });
    }

    const countriesList = Object.keys(countries);

    return (
      <div>
        {response
          ?
          (
            <div className='submitOrg__error-div'>
              <div className='submitOrg__logo'
                onClick={() => this.props.history.push('/')}></div>
              <div className='submitOrg__error-img'></div>
              <h2>Woohoo! Your Request Was Sent Successfuly! :)</h2>
            </div>
          )
          :
          (
            <div className='submitOrg__content'>
              <Link to={'/'}><div className='submitOrg__logo'></div></Link>
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
                        { value: 'Locally', label: 'Locally' },
                        { value: 'Regionally', label: 'Regionally' }
                      ]}
                    />
                  </div>
                  <div className='submitOrg__question'>
                    <span>Country</span>
                    <select
                      name='country'
                      id='countries-list'
                      onChange={e => this.handleSelectChange(e)}
                      className={`form-control m-input ${!reSubmitRequired.operating ? 'submitOrg__select' : 'submitOrg__select submitOrg__error'}`}
                    >
                      {countriesList.map((country, index) => {
                        return (
                          <option
                            key={`country#${index + 1}`}
                            value={country}>
                            {country}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className='submitOrg__question'>
                    <span>City</span>
                    <select
                      name='city'
                      onChange={e => this.handleSelectChange(e)}
                      className={`form-control m-input ${!reSubmitRequired.operating ? 'submitOrg__select' : 'submitOrg__select submitOrg__error'}`}
                    >
                      <option value={''}>Select city</option>
                      {countriesList.map((_country, index) => {
                        if (_country.toLowerCase() === country.toLowerCase()) {
                          return countries[_country].map((city, index) => {
                            return (
                              <option
                                key={`city#${index}`}
                                value={city}>
                                {city}
                              </option>
                            );
                          });
                        }
                      })}
                    </select>
                  </div>
                  <div className='submitOrg__question'>
                    <span>Additional Comments (Optional)</span>
                    <textarea className='submitOrg__textarea submitOrg__input'
                      name='comments' onChange={this.handleInputChange}
                    ></textarea>
                  </div>
                  <div className='submitOrg__submit__div'>
                    {isPostingOrg ?
                      (<button className='submitOrg__submit submitOrg__btn-disabled' disabled>
                        <div className='submitOrg__loader'></div>
                      </button>)
                      :
                      (<button className='submitOrg__submit'
                        onClick={this.handleOrgSubmit}
                      >Submit</button>)
                    }
                  </div>
                  {Object.keys(reSubmitRequired).length ?
                    (<span style={{ color: 'red', fontSize: '14px' }}>Some Fields Are Required!</span>) : null
                  }
                </div>
              </div>
            </div>
          )

        }
        <Footer />
      </div>
    );
  }
}

SubmitOrg.propTypes = {
  postOrg: PropTypes.func,
  getSubCats: PropTypes.func,
  subCats: PropTypes.array,
  isPostingOrg: PropTypes.bool,
  response: PropTypes.bool,
  history: PropTypes.object,
  push: PropTypes.func,
  failedKeys: PropTypes.array
};

export default SubmitOrg;
