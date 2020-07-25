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
              <h5 className="card-title">Supported?</h5>
              <div>
                <form>
                  <input
                    type="text"
                    onChange={this.onInputChange('supported')}
                    required
                  />
                </form>
              </div>
              <br></br>
              <button class="btn btn-primary" onClick={this.onNextClick}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(FormSupported);
