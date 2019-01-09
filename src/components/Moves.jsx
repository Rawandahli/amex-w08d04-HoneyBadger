import React, { Component } from "react";
import Character from "../character.png";

class Moves extends Component {
  constructor() {
    super();
    // track the moves
    this.state = {};
  }

  handleKeyDown() {
    // select Character
    const character = document.querySelector(".character");
    // get current positions
    const currBotPos = Number(character.style.bottom.slice(0, 3));
    const currRiPos = Number(character.style.right.slice(0, 3));

    // handel events and move the Character!!
  }

  render() {
    return (
      <div className="container">
        <div className="move-area">
          <img className="character" src={Character} />;
        </div>
        <div className="moves">
          <span>Moves: </span>
        </div>
        <button className="btn btn-dark"> Step Back </button>
      </div>
    );
  }
  componentWillMount() {}

  componentWillUnmount() {}
}

export default Moves;
