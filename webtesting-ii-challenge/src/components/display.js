import React, { Component } from 'react';


export default class Display extends Component {
    state = {
    };

    render() {
        return (
            <div className="display">

            </div>
        );
    }

    greetTeam = () => {
        this.setState({ greeting: 'Hello developers' });
    };
}