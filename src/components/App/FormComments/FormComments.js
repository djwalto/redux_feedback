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
      <div>
        <h1>Any comments you want to leave?</h1>

        <div>
          <form>
            <input
              type="text box"
              onChange={this.onInputChange('comments')}
              placeholder="Comments?"
            />
          </form>
        </div>
        <br></br>
        <button onClick={this.onNextClick}>Next</button>
      </div>
    );
  }
}

export default connect()(FormComments);
