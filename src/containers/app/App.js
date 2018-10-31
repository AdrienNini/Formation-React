import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Horloge from '../../components/horloge/Horloge';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome nom="adrien" age={ 21 } />
        <Horloge />
      </div>
    );
  }
}