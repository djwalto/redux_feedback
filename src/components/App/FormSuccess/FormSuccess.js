import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSuccess extends Component {
  // Build out data for the server
  // Axios it up to the server
  // Then on response, nav to beginning!

  // MAKE AXIOS CALL! - IN THE .THEN, DO THE BELOW!

  render() {
    console.log(this.props);

    return (
      <div>
        <h1>Success Page</h1>

        <div></div>

        <ul></ul>

        <button>Submit</button>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FormSuccess);
