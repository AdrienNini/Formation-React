import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Afficheur from '../../components/afficheur/Afficheur'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome nom="adrien" age={ 21 } />
        <Afficheur />
      </div>
    );
  }
}