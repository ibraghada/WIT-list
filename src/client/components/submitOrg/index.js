import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './index.css';

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
    console.log(this.state);
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

  componentDidMount() {
    const { getCats } = this.props;
    getCats();
  }

  render() {
    const { type, audience, funding, theme, operating, country } = this.state;
    const { cats } = this.props;
    const { orgTypes, orgAudience, orgFunding, orgThemes } = this.state;
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
    console.log(this.state);
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
              <input className='submitOrg__input' type='text'
                name='name' onChange={this.handleInputChange}/>
            </div>
            <div className='submitOrg__question'>
              <span>Website</span>
              <input className='submitOrg__input' type='text'
                name='website' onChange={this.handleInputChange}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Description (250 Characters)</span>
              <textarea className='submitOrg__input submitOrg__textarea'
                name='description' onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className='submitOrg__question'>
              <span>Type of Organization</span>
              <Select className='submitOrg__select'
                name='orgType'
                simpleValue
                value={type}
                onChange={this.handleOrgTypeChange}
                multi
                options={orgTypes}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Audience</span>
              <Select className='submitOrg__select'
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
              <Select className='submitOrg__select'
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
              <Select className='submitOrg__select'
                name='operating'
                simpleValue
                value={operating}
                onChange={this.handleOperatingChange}
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Country</span>
              <Select className='submitOrg__select'
                name='country'
                simpleValue
                value={country}
                onChange={this.handleCountryChange}
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
              />
            </div>
            <div className='submitOrg__question'>
              <span>City</span>
              <input className='submitOrg__input' type='text'
                name='city' onChange={this.handleInputChange}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Additional Comments (Optional)</span>
              <textarea className='submitOrg__input submitOrg__textarea'
                name='comments' onChange={this.handleInputChange}
              ></textarea>
            </div>
            <div className='submitOrg__submit__div'>
              <button className='submitOrg__submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubmitOrg;
