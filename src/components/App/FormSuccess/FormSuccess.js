import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSuccess extends Component {
  onNextClick = (event) => {
    this.props.history.push('/');
  };
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>THANK YOU!</h1>

        <div></div>

        <ul></ul>

        <button onClick={this.onNextClick}>Leave New Feedback</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSuccess);
