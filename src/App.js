import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from './Layout';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
