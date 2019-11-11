import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class Player extends Component {
  render() {
    return (
      <>
        <Button
          className="btn-primary btn-sm m-2"
          disabled={this.props.disabled}
          onClick={() =>
            this.props.onIncrement(this.props.player, this.props.word)
          }
        >
          {this.props.player.name}
        </Button>
        <h2>{this.props.player.value}</h2>
      </>
    );
  }
}

export default Player;
