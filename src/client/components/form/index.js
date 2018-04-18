import React, { Component } from 'react';

import './index.css';

class Form extends Component {
  render() {
    return (
      <div className='form__content'>
        <div className='form__logo'></div>
        <div className='form'>
          <div>
            <span className='form__title'>Registration</span>
          </div>
          <div className='form__container'>
            <div className='form__question'>
              <span>Organization Name</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Website</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Description (250 Characters)</span>
              <textarea className='form__input form__textarea'></textarea>
            </div>
            <div className='form__question'>
              <span>Type of Organization</span>
              <select className='form__select'>
                <option value='select-option'>Please select...</option>
                <option value='org.'>Option 1</option>
                <option value='org.'>Option 2</option>
              </select>
            </div>
            <div className='form__question'>
              <span>Audience</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Subcategory for funding (Optional)</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Focus area / theme</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Operating</span>
              <select className='form__select'>
                <option value='select-option'>Please select...</option>
                <option value='locally'>Locally</option>
                <option value='internationally'>Internationally</option>
              </select>
            </div>
            <div className='form__question'>
              <span>Country</span>
              <select className='form__select'>
                <option value='select-option'>Please select...</option>
                <option value='option'>Country</option>
                <option value='option'>Country</option>
              </select>
            </div>
            <div className='form__question'>
              <span>City</span>
              <input className='form__input' type='text'/>
            </div>
            <div className='form__question'>
              <span>Additional Comments (Optional)</span>
              <textarea className='form__input form__textarea'></textarea>
            </div>
            <div className='form__submit__div'>
              <button className='form__submit'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
