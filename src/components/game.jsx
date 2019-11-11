import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Player from "./player";
import { getShuffledWords } from "../operations";

class Game extends Component {
  state = {
    players: [
      { id: 1, value: 0, name: this.props.location.state.playerOneName },
      { id: 2, value: 0, name: this.props.location.state.playerTwoName }
    ],
    words: getShuffledWords(),
    gameOver: false
  };

  handleIncrement = (player, word) => {
    const players = [...this.state.players];
    const playerToUpdate = players.find(p => p.id === player.id);
    playerToUpdate.value = player.value + 1;
    const words = this.state.words.filter(w => w !== word);

    let gameOver = this.state.gameOver;
    if (words.length === 0) {
      gameOver = true;
    }
    this.setState({ players, words, gameOver });
  };

  render() {
    return (
      <>
        <h1>{this.state.words[0]}</h1>
        {this.state.players.map(player => (
          <Player
            key={player.id}
            onIncrement={this.handleIncrement}
            player={player}
            word={this.state.words[0]}
            disabled={this.state.gameOver}
          />
        ))}
        {this.state.gameOver && <h1>game over!</h1>}
      </>
    );
  }
}

export default Game;
