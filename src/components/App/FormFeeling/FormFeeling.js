import React, { Component } from 'react';
import { connect } from 'react-redux';
import './FormFeeling.css';
import Button from 'react-bootstrap/Button';

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
    //dispatch the customer info!
    //goto the next page!
    if (this.state.feeling === '') {
      alert('You forgot to answer!');
      return;
    }
    this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
    this.props.history.push('/understanding');
  };

  addToSurvey = (event) => {
    this.setState(
      {
        survey: Number(this.state.feeling),
      },
      () => {
        this.clear();
      }
    );
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>How are you feeling today?</h1>
            </div>
            <div class="card-body text-dark">
              <h5 className="card-title">Feeling?</h5>
              <div>
                <input type="text" onChange={this.onInputChange('feeling')} />
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
