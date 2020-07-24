import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormFeeling extends Component {
  state = {
    feeling: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    //dispatch the customer info!
    //goto the next page!
    this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
    this.props.history.push('/understanding');
  };

  addToSurvey = (event) => {
    this.setState(
      {
        survey: [...this.state.survey, this.state.feeling],
      },
      () => {
        this.clear();
      }
    );
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>How are you feeling today?</h1>

        <div>
          <form>
            <input
              type="text"
              onChange={this.onInputChange('feeling')}
              placeholder="Feeling?"
              required
            />
          </form>
        </div>
        <br></br>
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(FormFeeling);
