import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// Captures input and dispatches to reducer
class FormFeeling extends Component {
  state = {
    feeling: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: Number(event.target.value),
    });
  };

  onNextClick = (event) => {
    if (this.state.feeling === '') {
      alert('You forgot to answer!');
      return;
    }
    this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
    this.props.history.push('/understanding');
  };

  addToSurvey = (event) => {
    this.setState({
      survey: Number(this.state.feeling),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div className="card border-dark mb-3">
            <div className="card-header">
              <h1>How are you feeling today?</h1>
            </div>
            <div className="card-body text-dark">
              <h5 className="card-title">Feeling?</h5>
              <div>
                <input type="number" onChange={this.onInputChange('feeling')} />
              </div>
              <br></br>
              <Button variant="primary" onClick={this.onNextClick}>
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(FormFeeling);
