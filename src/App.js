import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <header className={classes.header}>
          <h1 className={classes.title}>Welcome to React</h1>
        </header>
        <p className={classes.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
