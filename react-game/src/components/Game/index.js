import React from "react";
import s from "./Game.module.scss";
//import classNames from "classnames";
import Board from "../Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
    };
  }
  handleClick() {
    console.log("работает");
    this.setState({ startGame: true });
  }
  updateData = () => {
    this.setState({ startGame: false });
 }
  render() {
    console.log(">>>>>>>state",this.state.startGame );
    return (
      <div className={s.game}>
        <h1 className={s.game_title}>Крестики-нолики</h1>
        <button className={s.button__prime} onClick={() => this.handleClick()}>
          Начать заново
        </button>
        <div className={s.game_board}>
          <Board updateData={this.updateData} startGame = {this.state.startGame}/>
        </div>
      </div>
    );
  }
}

export default Game;
