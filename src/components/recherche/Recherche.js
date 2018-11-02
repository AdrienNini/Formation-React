import React, { Component } from 'react';

export default class Recherche extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recherche: ""
        };
        this.submitForm = this.submitForm.bind(this);
    }

    submitForm(e) {
        e.preventDefault();
        this.props.onReponse(this.state.recherche);
        this.setState({
            recherche: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input 
                    name="recherche" 
                    onChange={(e) => {
                        this.setState({
                            recherche: e.target.value
                        });
                    }} 
                    placeholder={this.props.search} 
                    value={this.state.recherche} 
                />
                <input type="submit" value="Rechercher" />
            </form>
        );
    }
}

Recherche.defaultProps = {
    onReponse: () => {}
}