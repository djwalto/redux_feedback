import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FormSummary extends Component {
  // Build out data for the server
  // Axios it up to the server
  // Then on response, nav to beginning!
  // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!
  confirmSurvey = (event) => {
    const newSurvey = {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportedReducer.supported,
      comments: this.props.store.commentsReducer.comments,
    };
    console.log(newSurvey);
    this.postNewSurvey(newSurvey);
    // Build out data for the server
    // Axios it up to the server
    // Then on response, nav to beginning!
  };

  postNewSurvey(newSurvey) {
    axios
      .post('/survey', newSurvey)
      .then((response) => {
        console.log('server post:', response.data);
        // call to GET
        this.props.dispatch({ type: 'CLEAR_FEELING' });
        this.props.dispatch({ type: 'CLEAR_UNDERSTANDING' });
        this.props.dispatch({ type: 'CLEAR_SUPPORTED' });
        this.props.dispatch({ type: 'CLEAR_COMMENTS' });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
        alert('Could not save the new survey. Sorry :(');
      });
  }

  // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!

  render() {
    return (
      <div>
        <h1>Summary Page</h1>

        <div>
          <p>Feeling: {this.props.store.feelingReducer.feeling}</p>
          <p>
            Understanding: {this.props.store.understandingReducer.understanding}
          </p>
          <p>Support: {this.props.store.supportedReducer.supported}</p>
          <p>Comments: {this.props.store.commentsReducer.comments}</p>
        </div>

        <button onClick={this.confirmSurvey}>SUBMIT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSummary);
