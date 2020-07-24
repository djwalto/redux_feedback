import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSupported extends Component {
  state = {
    supported: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    //dispatch the customer info!
    //goto the next page!
    this.props.dispatch({ type: 'SET_SUPPORTED', payload: this.state });
    this.props.history.push('/comments');
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>How well are you being supported?</h1>

        <div>
          <form>
            <input
              type="text"
              onChange={this.onInputChange('supported')}
              placeholder="Support?"
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
export default connect()(FormSupported);
