import React, { Component } from 'react';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import './index.css';

class SubmitOrg extends Component {
  constructor() {
    super();
    this.state = {
      orgType: '',
      audience: '',
      funding: '',
      theme: ''
    };
  }

  handleOrgTypeChange = orgType => {
    this.setState(
      { ...this.state,
        orgType }
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

  render() {
    const { orgType, audience, funding, theme } = this.state;
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
              <input className='submitOrg__input' type='text'/>
            </div>
            <div className='submitOrg__question'>
              <span>Website</span>
              <input className='submitOrg__input' type='text'/>
            </div>
            <div className='submitOrg__question'>
              <span>Description (250 Characters)</span>
              <textarea className='submitOrg__input submitOrg__textarea'></textarea>
            </div>
            <div className='submitOrg__question'>
              <span>Type of Organization</span>
              <Select
                name='orgType'
                simpleValue
                value={orgType}
                onChange={this.handleOrgTypeChange}
                multi
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
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
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
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
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
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
                options={[
                  { value: 'one', label: 'One' },
                  { value: 'two', label: 'Two' }
                ]}
              />
            </div>
            <div className='submitOrg__question'>
              <span>Operating</span>
              <select className='submitOrg__select'>
                <option value='select-option'>Please select...</option>
                <option value='locally'>Locally</option>
                <option value='internationally'>Internationally</option>
              </select>
            </div>
            <div className='submitOrg__question'>
              <span>Country</span>
              <select className='submitOrg__select'>
                <option value='select-option'>Please select...</option>
                <option value='option'>Country</option>
                <option value='option'>Country</option>
              </select>
            </div>
            <div className='submitOrg__question'>
              <span>City</span>
              <input className='submitOrg__input' type='text'/>
            </div>
            <div className='submitOrg__question'>
              <span>Additional Comments (Optional)</span>
              <textarea className='submitOrg__input submitOrg__textarea'></textarea>
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
