import React from "react";
import s from "./Game.module.scss";
import fullscreen from "../../utils/fullscreen.utils.js";
import Board from "../Board";
import classNames from "classnames";

class Game extends React.Component {
  constructor(props) {
    super(props);
    let colorThemeRes = true
    if((localStorage.getItem("colorTheme")==="false")){
      colorThemeRes = false
    }
    this.state = {
      startGame: true,
      reStartGame: false,
      colorTheme: colorThemeRes
    };
  }
  handleClick() {
    this.setState({ startGame: true, reStartGame: true });
  }
  handleMakeFullScreen() {
    fullscreen("root");
  }
  handleChangeColors(){
    this.setState({ colorTheme: !this.state.colorTheme });
    localStorage.setItem("colorTheme",!this.state.colorTheme)
  }
  updateData = () => {
    this.setState({ startGame: false });
  };
  render() {
    let colorTheme = this.state.colorTheme
    let gameClassname
    if(colorTheme){
      gameClassname = classNames(
        s.game,
        s.game__green
      );
    } else {
      gameClassname = classNames(
        s.game,
        s.game__orange
      );
    }
    return (
      <div className={gameClassname}>
        <h1 className={s.game_title}>Крестики-нолики</h1>
  
          <button className={s.button__prime} onClick={() => this.handleClick()}>
            Начать заново
          </button>

        <div className={s.game_board}>
          <Board
            updateData={this.updateData}
            reStartGame={this.state.reStartGame}
            startGame={this.state.startGame}
          />
        </div>
        
        <button
          className={s.button__prime}
          onClick={() => this.handleMakeFullScreen()}
        >
          Развернуть на весь экран
        </button>
        <button
          className={s.button__prime}
          onClick={() => this.handleChangeColors()}
        >
          Изменить цветовую гамму
        </button>
      </div>
    );
  }
}

export default Game;
