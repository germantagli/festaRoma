// Dependencies
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <RaisedButton label="Default" />
      </div>
    );
  }
}

export default Home;