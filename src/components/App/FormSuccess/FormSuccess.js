import React, { Component } from 'react';
import { connect } from 'react-redux';

// Confirms to user survey was submitted
class FormSuccess extends Component {
  onNextClick = (event) => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="container">
        <div className="card text-center">
          <div class="card border-dark mb-3">
            <div class="card-header">
              <h1>THANK YOU!</h1>
            </div>
            <div class="card-body text-dark">
              <h5 className="card-title">Want to leave new feedback?</h5>
              <div>
                <button class="btn btn-primary" onClick={this.onNextClick}>
                  Return Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSuccess);
