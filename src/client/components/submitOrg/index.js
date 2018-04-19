import React, { Component } from 'react';

import './index.css';

class SubmitOrg extends Component {
  render() {
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
              <select className='submitOrg__select'>
                <option value='select-option'>Please select...</option>
                <option value='org.'>Option 1</option>
                <option value='org.'>Option 2</option>
              </select>
            </div>
            <div className='submitOrg__question'>
              <span>Audience</span>
              <input className='submitOrg__input' type='text'/>
            </div>
            <div className='submitOrg__question'>
              <span>Subcategory for funding (Optional)</span>
              <input className='submitOrg__input' type='text'/>
            </div>
            <div className='submitOrg__question'>
              <span>Focus area / theme</span>
              <input className='submitOrg__input' type='text'/>
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
