import React from "react";
import s from "./Board.module.scss";
import Square from "../Square";
import calculateWinner from "../../utils/calculateWinner.utils.js";
import classNames from "classnames";

class Board extends React.Component {
  constructor(props) {
    super(props);
    let squaresArr =Array(9).fill(null)
    let xIsNextRes = true
    if(localStorage.getItem("squares")){
      squaresArr =localStorage.getItem("squares").split(",")
    }
    if(localStorage.getItem("xIsNext")){
      if(localStorage.getItem("xIsNext")==="false"){
        xIsNextRes = false
      }else{
        xIsNextRes = true
      }
    }
    this.state = {
      squares: squaresArr,
      xIsNext: xIsNextRes,
    };
  }
  renderSquare(i, winner) {
    let winnerSquare = false;
    if (winner && winner[1].includes(i)) {
      winnerSquare = true;
    }
    return (
      <Square
        squareIsOpening={this.state.squares[i]}
        winner={winnerSquare}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  handleClick(i) {
    this.props.updateData();
    const winner = calculateWinner(this.state.squares);
    if (!winner) {
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  }
  static getDerivedStateFromProps(props, state) {
    localStorage.setItem("squares", state.squares)
    localStorage.setItem("xIsNext", state.xIsNext)
    let result = null;
    if (!props.reStartGame && !props.startGame){
      console.log("работает");
        localStorage.setItem("squares", state.squares)
        localStorage.setItem("xIsNext", state.xIsNext)
        return       result = {
          squares: state.squares,
          xIsNext: state.xIsNext,
        };
      }
      if (props.reStartGame === true && props.startGame === true){
        localStorage.removeItem("squares")
        localStorage.removeItem("xIsNext")
        return result = {
          squares: Array(9).fill(null),
          xIsNext: true,
        };
      }
    /*if (
      props.startGame === true &&
      !state.squares.every((item) => item === null)
    ) {
      result = {
        squares: state.squares,
        xIsNext: state.xIsNext,
      };
    }*/
    return result;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Выиграл " + winner[0];
    } else if (!this.state.squares.includes(null) && !this.state.squares.includes("")) {
      status = "Ничья!";
    } else {
      status = "Следующий ход: " + (this.state.xIsNext ? "X" : "O");
    }
    let boardStyle = s.board_container;
    if (winner) {
      let winLineStyle = "board_container" + winner[2];
      boardStyle = classNames(s.board_container, s[winLineStyle]);
    }
    return (
      <>
        <h3 className={s.status}>{status}</h3>
        <div className={boardStyle}>
          <div className={s.board_row}>
            {this.renderSquare(0, winner)}
            {this.renderSquare(1, winner)}
            {this.renderSquare(2, winner)}
          </div>
          <div className={s.board_row}>
            {this.renderSquare(3, winner)}
            {this.renderSquare(4, winner)}
            {this.renderSquare(5, winner)}
          </div>
          <div className={s.board_row}>
            {this.renderSquare(6, winner)}
            {this.renderSquare(7, winner)}
            {this.renderSquare(8, winner)}
          </div>
        </div>
      </>
    );
  }
}

export default Board;
