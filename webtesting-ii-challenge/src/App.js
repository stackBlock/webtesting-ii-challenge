import React, { Component } from 'react';
import './App.css';
import Display from './components/display.js';
import Dashboard from './components/dashboard.js';


class App extends Component {
  state = {
    greeting: 'Hello World',
  };

  render() {
    return (
      <div className="App">
        <h2>{this.state.greeting}</h2>
        <button onClick={this.greetTeam}>Greet</button>
        <Display />
        <Dashboard />
      </div>
    );
  }

  greetTeam = () => {
    this.setState({ greeting: 'Hello developers' });
  };
}

export default App;