import React, { Component } from 'react';
import Welcome from '../../components/welcome/Welcome';
import Afficheur from '../../components/afficheur/Afficheur'
import './App.css';
import Recherche from '../../components/recherche/Recherche';
import ListWeather from '../../components/list-weather/ListWeather';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.getCity = this.getCity.bind(this);
    this.state = {
      cities: []
    }
  }

  getCity(city) {
    if (this.state.cities.includes(city)) return;
    this.setState((oldState) => ({
      cities : [city, ...oldState.cities]
    }));
  }

  render() {
    return (
      <div className="App">
        <Welcome nom="adrien" age={ 21 } />
        <hr />
        <Afficheur />
        <hr />
        <Recherche search="Rechercher" onReponse={this.getCity} />
        <ListWeather cities={this.state.cities} />
        <hr />
      </div>
    );
  }
}