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
    if (this.state.understanding === '') {
      alert('You forgot to answer!');
      return;
    }
    this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state });
    this.props.history.push('/supported');
  };

  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>How well are you understanding the content?</h1>
            </div>
            <div class="card-body text-dark">
              <h5 className="card-title">Understanding?</h5>
              <div>
                <form>
                  <input
                    type="text"
                    onChange={this.onInputChange('understanding')}
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

export default connect()(FormUnderstanding);
