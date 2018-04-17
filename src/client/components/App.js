import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'material-components-web/dist/material-components-web.css';

import './app.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/home' component={Header} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
