import React, { Component } from 'react';
import './Horloge.css';

export default class Horloge extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            date: new Date()
        }

        setInterval(() => {
            this.setState({ date: new Date() });
        }, 100)

    }

    formatTime(t, w) {
        return `${t} ${w + (t > 1 ? 's': '')}`;
    }
    
    render() {
        const {date} = this.state;
        const h = this.formatTime(date.getHours(), 'heure');
        const m = this.formatTime(date.getMinutes(), 'minute');
        const s = this.formatTime(date.getSeconds(), 'seconde');
        return (
            <div className="Horloge">
                <p>Il est { h } { m } et { s }</p>
            </div>
        );
    }
}