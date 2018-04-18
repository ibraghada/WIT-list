import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './homePage';
import Form from './submitOrg';

import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/registration' component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
