import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

// Displays summary of answers to user for submissions
// Consolidates all inputs from reducers to POST to db
class FormSummary extends Component {
  confirmSurvey = (event) => {
    const newSurvey = {
      feeling: this.props.store.feelingReducer.feeling,
      understanding: this.props.store.understandingReducer.understanding,
      support: this.props.store.supportedReducer.supported,
      comments: this.props.store.commentsReducer.comments,
    };
    swal('Awesome', 'Thanks for sending us your feedback!', 'success');
    this.postNewSurvey(newSurvey);
  };

  onBackClick = (event) => {
    this.props.history.push('/comments');
  };

  postNewSurvey(newSurvey) {
    axios
      .post('/survey', newSurvey)
      .then((response) => {
        this.props.dispatch({ type: 'CLEAR_FEELING' });
        this.props.dispatch({ type: 'CLEAR_UNDERSTANDING' });
        this.props.dispatch({ type: 'CLEAR_SUPPORTED' });
        this.props.dispatch({ type: 'CLEAR_COMMENTS' });
        this.props.history.push('/success');
      })
      .catch((err) => {
        console.log(err);
        alert('Could not save the new survey. Sorry :(');
      });
  }

  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>Ready to submit?</h1>
            </div>
            <div class="card-body text-dark">
              <div className="summary">
                <p>Feeling: {this.props.store.feelingReducer.feeling}</p>
                <p>
                  Understanding:
                  {this.props.store.understandingReducer.understanding}
                </p>
                <p>Support: {this.props.store.supportedReducer.supported}</p>
                <p>Comments: {this.props.store.commentsReducer.comments}</p>
              </div>
              <Button variant="primary" onClick={this.onBackClick}>
                Back
              </Button>
              <Button variant="primary" onClick={this.confirmSurvey}>
                SUBMIT
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSummary);
