import React, { Component } from 'react';
import Header from '../commons/Header';
import PropTypes from 'prop-types';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  // static propTypes = {
  //   children: PropTypes.isRequired
  // }
  render() {
    return (
      <div className="container-fluid text-center">
        <Header />
        {/* {this.props.children} */}
      </div>
    );
  }
}
export default App;