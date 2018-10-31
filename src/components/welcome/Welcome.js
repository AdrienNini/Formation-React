import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    capitalize() {
        const name = this.props.nom.toLowerCase();
        const [first, ...rest] = name;
        return [first.toUpperCase(), ...rest];
    }

    render() {
        const name = this.capitalize();
        return (
            <div>
                <h1>Bienvenu { name } sur l'application React !</h1>
                <p>Vous avez { this.props.age } ans !</p>
            </div>
        );
    }
}

Welcome.defaultProps = {
    age: 18
}

Welcome.propTypes = {
    nom: PropTypes.string,
    age: PropTypes.number
}