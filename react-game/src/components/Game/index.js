import React from "react";
import s from "./Game.module.scss";
import fullscreen from "../../utils/fullscreen.utils.js";
import Board from "../Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: true,
    };
  }
  handleClick() {
    this.setState({ startGame: true });
  }
  handleMakeFullScreen(){
    fullscreen("root")
  }
  updateData = () => {
    this.setState({ startGame: false });
 }
  render() {
    console.log(">>>>>>>state",this.state.startGame );
    return (
      <div className={s.game}>
        <h1 className={s.game_title}>Крестики-нолики</h1>
        <button className="button__prime" onClick={() => this.handleClick()}>
          Начать заново
        </button>
        <div className={s.game_board}>
          <Board updateData={this.updateData} startGame = {this.state.startGame}/>
        </div>
        <button className="button__prime button__makefullscreen" onClick={() => this.handleMakeFullScreen()}>Развернуть на весь экран</button>
      </div>
    );
  }
}

export default Game;
