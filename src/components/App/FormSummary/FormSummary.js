import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSummary extends Component {
  // Build out data for the server
  // Axios it up to the server
  // Then on response, nav to beginning!

  // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!
  confirmOrder = (event) => {
    // Build out data for the server
    // Axios it up to the server
    // Then on response, nav to beginning!

    const dataForServer = {
      feeling: this.props.store.feelingReducer,
      understanding: this.props.store.understandingReducer,
      support: this.props.store.supportedReducer,
      comments: this.props.store.commentsReducer,
    };

    console.log(dataForServer);

    // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!

    this.props.dispatch({ type: 'CLEAR_FEELING' });
    this.props.dispatch({ type: 'CLEAR_UNDERSTANDING' });
    this.props.dispatch({ type: 'CLEAR_SUPPORTED' });
    this.props.dispatch({ type: 'CLEAR_COMMENTS' });

    this.props.history.push('/');
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Summary Page</h1>

        <div>
          <h5>{this.props.store.feelingReducer.feeling}</h5>
          <p>{this.props.store.understandingReducer.understanding}</p>
          <p>{this.props.store.supportedReducer.supported}</p>
          <p>{this.props.store.commentsReducer.comments}</p>
        </div>

        <ul></ul>

        <button onClick={this.confirmSurvey}>SUBMIT</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSummary);
