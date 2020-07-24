import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FormFeeling from './FormFeeling/FormFeeling';
import FormUnderstanding from './FormUnderstanding/FormUnderstanding';
import FormSupported from './FormSupported/FormSupported';
import FormSummary from './FormSummary/FormSummary';
import FormSuccess from './FormSuccess/FormSuccess';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path="/" component={FormFeeling} />
          <Route exact path="/understanding" component={FormUnderstanding} />
          <Route exact path="/supported" component={FormSupported} />
          <Route exact path="/summary" component={FormSummary} />
          <Route exact path="/success" component={FormSuccess} />
        </div>
      </Router>
    );
  }
}

export default App;
