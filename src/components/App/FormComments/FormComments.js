import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormComments extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Comments </h1>

        <div></div>

        <ul></ul>

        <button>Next</button>
      </div>
    );
  }
}

export default connect()(FormComments);
