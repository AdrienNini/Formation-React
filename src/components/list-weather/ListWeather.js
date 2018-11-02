import React, { Component } from 'react';
import Meteo from '../../components/meteo/Meteo';
import './list.css';

export default class ListWeather extends Component {

    render() {
        const cities = this.props.cities;

        const element = cities.map((city) => {
            return <li key={city} ><Meteo city={city} /></li>
        });

        return (
            <ul id="MeteoList">
                {element}
            </ul>
        );
    }
}

ListWeather.defaultProps = {
    cities : []
};