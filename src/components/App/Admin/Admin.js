import React, { Component } from 'react';
import { connect } from 'react-redux';
import SurveyList from './SurveyList';
import axios from 'axios';

// Admin page for user to review surveys submitted
class Admin extends Component {
  componentDidMount() {
    this.getAllSurveys();
  }

  // Get for all surveys from db
  getAllSurveys() {
    axios
      .get('/survey')
      .then((response) => {
        this.props.dispatch({
          type: 'SET_SURVEYS',
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Something went wrong!');
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Survey History</h1>
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
