import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormComments extends Component {
  state = {
    comments: '',
  };

  onInputChange = (input) => (event) => {
    this.setState({
      [input]: event.target.value,
    });
  };

  onNextClick = (event) => {
    //dispatch the customer info!
    //goto the next page!
    this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state });
    this.props.history.push('/summary');
  };

  render() {
    console.log(this.props);

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
                    type="textbox"
                    onChange={this.onInputChange('comments')}
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

export default connect()(FormComments);
