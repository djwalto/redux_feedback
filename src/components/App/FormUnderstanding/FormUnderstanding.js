import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormUnderstanding extends Component {
  state = {
    understanding: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    //dispatch the customer info!
    //goto the next page!
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state });
    this.props.history.push('/supported');
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>How well are you understanding the content?</h1>

        <div>
          <form>
            <input
              type="text"
              onChange={this.onInputChange('understanding')}
              placeholder="Understanding?"
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

export default connect()(FormUnderstanding);
