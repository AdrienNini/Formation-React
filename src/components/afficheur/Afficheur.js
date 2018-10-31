import React, { Component } from 'react';
import Horloge from '../horloge/Horloge';
import DateDuJour from '../dateDuJour/DateDuJour';
import './Afficheur.css';

export default class Afficheur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heureDate: true
        }
    }

    render() {
        return (
            <div className="Afficheur" onClick={ () => this.setState((oldState) => ({ heureDate: !oldState.heureDate })) }>
                { this.state.heureDate ?  <Horloge /> : <DateDuJour /> }
            </div>
        );
    }
}
