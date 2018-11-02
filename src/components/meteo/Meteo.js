import React, { Component } from 'react';
import axios from 'axios';
import './Meteo.css';

export default class Meteo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: null
        };
    }

    componentDidMount() {
        this.requestApi(this.props);
    }

    /*
    componentWillReceiveProps(nextProps) {
        this.requestApi(nextProps);
    }
    */

    requestApi(props) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&lang=fr&appid=78d79b0a0845a5c21c35182684f4b852`)
        .then((response) => 
            this.setState({
                weather: response.data
            })
        )
        .catch((e) => {
            console.log(e);
            this.setState({
                weather: null
            });
        })
    }

    render() {
        const {weather} = this.state;  
        const info = weather && weather.weather[0];

        const icon = info ? `https://openweathermap.org/img/w/${info.icon}.png` : "";
        const desc = info ? info.description : 'No data';
        const view = weather && 
            <>
                <p><span className="bold">{weather.name}</span> • {weather.main.temp}°C</p>
                <p>{desc}</p>
            </>
        return (
            <div className="meteo">
                <img className="icon" src={icon} alt={desc} />
                <div>
                    { weather ? view : <p>No Data</p> }
                </div>
            </div>
            
        );
    }
}