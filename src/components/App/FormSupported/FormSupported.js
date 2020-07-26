import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// Captures input and dispatches to reducer
class FormSupported extends Component {
  state = {
    supported: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onBackClick = (event) => {
    this.props.history.push('/understanding');
  };

  onNextClick = (event) => {
    if (this.state.supported === '') {
      alert('You forgot to answer!');
      return;
    }
    this.props.dispatch({ type: 'SET_SUPPORTED', payload: this.state });
    this.props.history.push('/comments');
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>How well are you being supported?</h1>
            </div>
            <div class="card-body text-dark">
              <h5 className="card-title">*With 10 being the best</h5>
              <div>
                <form>
                  <input
                    type="number"
                    onChange={this.onInputChange('supported')}
                  />
                </form>
              </div>
              <br></br>
              <Button variant="primary" onClick={this.onBackClick}>
                Back
              </Button>
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
export default connect()(FormSupported);
