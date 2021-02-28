import React from "react";
import s from "./Game.module.scss";
//import classNames from "classnames";
import Board from "../Board"

class Game extends React.Component {
  render() {
    return (
      <div className={s.game}>
      <div className={s.game_board}>
          <Board />
        </div>
        <div className={s.game_info}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
