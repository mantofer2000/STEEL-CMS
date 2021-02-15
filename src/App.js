import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import Body from './containers/Body/Body';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Body />
        </Layout>
      </div>
    );
  }
}

export default App;
