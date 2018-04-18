import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'material-components-web/dist/material-components-web.css';

import './app.css';
import Header from './header';
import Form from './form';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/home' component={Header} />
            <Route exact path='/registration' component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
