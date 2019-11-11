import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";

class Welcome extends Component {
  state = {};

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.setState({
      playerOneName: data.get("playerOneName"),
      playerTwoName: data.get("playerTwoName")
    }, () => {
        this.props.history.push("/game", this.state);
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to Song Association</h1>
        <h3>What are your names?</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group>
              <Form.Label>First name</Form.Label>
              <Form.Control
                name="playerOneName"
                placeholder="Player 1"
                required
                type="text"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Form.Label>Last name</Form.Label>
              <Form.Control
                name="playerTwoName"
                placeholder="Player 2"
                required
                type="text"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button type="submit">Let's play!</Button>
          </Form.Row>
        </Form>
      </>
    );
  }
}

export default withRouter(Welcome);
