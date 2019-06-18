import React, { Component } from 'react';
import './App.css';
import Display from './components/display.js';
import Dashboard from './components/dashboard.js';


class App extends Component {
  state = {
    greeting: 'Hello World',
    strike: 0,
    ball: 0,
    foul: 0,
    hit: 0,
  };

  render() {
    const { strike, ball, foul, hit } = this.state;
    return (
      <div className="App">
        <h1>Baseball</h1>
        <button onClick={this.reset}>
          Reset
          </button>
        <Display
          strike={strike}
          ball={ball}
          foul={foul}
          hit={hit}
        />
        <Dashboard
          strikeBall={this.strikeBall}
          ballBall={this.ballBall}
          foulBall={this.foulBall}
          hitBall={this.hitBall}
        />
      </div>
    );
  }

  strikeBall = () => {
    if (this.state.strike < 2) {
      this.setState(({ strike }) => ({
        strike: strike + 1
      }));
    } else {
      this.setState(({ strike, ball, foul }) => ({
        strike: 0,
        ball: 0,
        foul: 0
      }));
    }
  }

  ballBall = () => {
    if (this.state.ball < 3) {
      this.setState(({ ball }) => ({
        ball: ball + 1
      }));
    } else {
      this.setState(({ ball, strike, foul }) => ({
        ball: 0,
        strike: 0,
        foul: 0,
      }));
    }
  }

  foulBall = () => {
    if (this.state.strike < 2) {
      this.setState(({ foul, strike }) => ({
        foul: foul + 1,
        strike: strike + 1
      }));
    } else if (this.state.foul < 3) {
      this.setState(({ foul }) => ({
        foul: foul + 1
      }))
    }
  }

  hitBall = () => {

    this.setState(({ hit, ball, foul, strike }) => ({
      hit: hit + 1,
      ball: 0,
      foul: 0,
      strike: 0,
    }));

  }

  reset = () => {
    this.setState(({ hit, ball, foul, strike }) => ({
      hit: 0,
      ball: 0,
      foul: 0,
      strike: 0,
    }));
  };
}

export default App;