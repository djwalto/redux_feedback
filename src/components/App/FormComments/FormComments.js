import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

// Captures input and dispatches to reducer
class FormComments extends Component {
  state = {
    comments: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onBackClick = (event) => {
    this.props.history.push('/supported');
  };

  onNextClick = (event) => {
    this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state });
    this.props.history.push('/summary');
  };

  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>Any comments you want to leave?</h1>
            </div>
            <div class="card-body text-dark">
              <h5 className="card-title">Comments?</h5>
              <div>
                <form>
                  <input
                    type="inputbox"
                    onChange={this.onInputChange('comments')}
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

export default connect()(FormComments);
