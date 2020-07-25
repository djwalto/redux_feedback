import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';

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
    swal('Awesome', 'Thanks for sending us your feedback!', 'success');
    console.log(newSurvey);
    this.postNewSurvey(newSurvey);
    // Build out data for the server
    // Axios it up to the server
    // Then on response, nav to beginning!
  };

  onBackClick = (event) => {
    this.props.history.push('/comments');
  };

  postNewSurvey(newSurvey) {
    axios
      .post('/survey', newSurvey)
      .then((response) => {
        console.log('server post:', response.data);
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

  // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!

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
                  Understanding:{' '}
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
