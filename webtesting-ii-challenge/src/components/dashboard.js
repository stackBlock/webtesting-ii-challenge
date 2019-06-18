import React, { Component } from 'react';


export default class Dashboard extends Component {
    state = {
        greeting: 'Hello World',
    };

    render() {
        return (
            <div className="dashboard">

            </div>
        );
    }

    greetTeam = () => {
        this.setState({ greeting: 'Hello developers' });
    };
}