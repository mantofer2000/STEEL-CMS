import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import classes from './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <p>Carrousel 1</p>
          <p> Body 1</p>
          <p>Carrousel 2</p>
          <p>Body 2</p>
          <p>Schedule</p>
          <p>Contact Me</p>
        </Layout>
      </div>
    );
  }
}

export default App;
