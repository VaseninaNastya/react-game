import React from "react";
import s from "./Game.module.scss";
//import classNames from "classnames";
import Board from "../Board";

class Game extends React.Component {
  render() {
    return (
      <div className={s.game}>
        <h1 className={s.game_title}>Крестики-нолики</h1>
        <button className={s.button__prime}>
          Начать заново
        </button>
        <div className={s.game_board}>
          <Board />
        </div>

      </div>
    );
  }
}

export default Game;
