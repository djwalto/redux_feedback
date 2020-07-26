import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyList from './SurveyList';
import axios from 'axios';

class Admin extends Component {
  componentDidMount() {
    this.getAllSurveys();
  }

  // TODO - GET Book List from server
  getAllSurveys() {
    axios
      .get('/survey')
      .then((response) => {
        console.log(response);
        this.props.dispatch({
          type: 'SET_SURVEYS',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Something went terribly wrong!!!');
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Surveys!</h1>
        </header>
        <main>
          <SurveyList />
        </main>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Admin);
