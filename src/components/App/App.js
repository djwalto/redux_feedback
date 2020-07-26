import React, { Component } from 'react';
import './App.css';
import Admin from './Admin/Admin';
import AppLayout from '../App/AppLayout/AppLayout';
import FormFeeling from './FormFeeling/FormFeeling';
import FormUnderstanding from './FormUnderstanding/FormUnderstanding';
import FormSupported from './FormSupported/FormSupported';
import FormComments from './FormComments/FormComments';
import FormSummary from './FormSummary/FormSummary';
import FormSuccess from './FormSuccess/FormSuccess';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">Feedback</h1>
              <p class="lead">Don't forget it!</p>
            </div>
          </div>
          <br />
          <Route exact path="/" component={FormFeeling} />
          <Route exact path="/understanding" component={FormUnderstanding} />
          <Route exact path="/supported" component={FormSupported} />
          <Route exact path="/comments" component={FormComments} />

          <Route exact path="/summary" component={FormSummary} />
          <Route exact path="/success" component={FormSuccess} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
