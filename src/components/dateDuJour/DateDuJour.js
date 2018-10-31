import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fr';

export default class DateDuJour extends Component {
    render() {
        const date = moment().format('dddd D MMMM YYYY');
        return (
            <p>Nous sommes le { date } </p>
        );
    }
 }