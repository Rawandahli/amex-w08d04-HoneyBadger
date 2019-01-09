import React, { Component } from "react";
import Character from "../character.png";

class Moves extends Component {
  constructor() {
    super();
    // track the moves
    this.state = {
      moves: []
    };
  }

  newPosition(max, currPos, move) {
    let newPos;
    // remove the px and convert the string into Number
    currPos = Number(currPos.slice(0, currPos.indexOf("p")));

    if (move === "R" || move === "D") {
      // steps size = 100
      newPos = currPos > max ? currPos - 100 : currPos;
    } else {
      // steps size = 50
      newPos = currPos < max ? currPos + 50 : currPos;
    }

    // is it a valid move
    if (newPos != currPos) {
      // if there is a chane then it is a valid move
      this.setState({ moves: this.state.moves.concat(move) });
    }

    return newPos + "px";
  }
  handleKeyDown(e) {
    const left = 37,
      up = 38,
      right = 39,
      down = 40;

    // select Character
    const character = document.querySelector(".character");

    // handel events and move the Character!!
    switch (e.keyCode) {
      case left:
        character.style.right = this.newPosition(
          750,
          character.style.right,
          "L"
        );
        break;
      case up:
        character.style.bottom = this.newPosition(
          300,
          character.style.bottom,
          "U"
        );
        break;
      case right:
        character.style.right = this.newPosition(
          50,
          character.style.right,
          "R"
        );
        break;
      case down:
        character.style.bottom = this.newPosition(
          50,
          character.style.bottom,
          "D"
        );
        break;
    }
  }

  render() {
    return (
      <div className="container">
        <div className="move-area">
          <img className="character" src={Character} />;
        </div>
        <div className="moves">
          <span>Moves: </span> <span> {this.state.moves.toString()} </span>
        </div>
        <button className="btn btn-dark"> Step Back </button>
      </div>
    );
  }
  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }
}

export default Moves;
