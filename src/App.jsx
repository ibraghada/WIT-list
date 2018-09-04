import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginContainer from './components/Login/index.jsx';

class App extends React.Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
