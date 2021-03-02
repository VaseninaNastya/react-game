import React from "react";
import s from "./Board.module.scss";
import Square from "../Square";
import calculateWinner from "../../utils/calculateWinner.utils.js";


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      squareIsOpening: null,
    };
  }
  renderSquare(i) {
    return (
      <Square
        squareIsOpening={this.state.squares[i]}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      squareIsOpening: true,
    });
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Выиграл " + winner;
    } else if (!this.state.squares.includes(null)){
      status = "Ничья!";
    } else {
      status = "Следующий ход: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <>
        <h3 className={s.status}>{status}</h3>
        <div className={s.board_container}>
          <div className={s.board_row}>
              {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className={s.board_row}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className={s.board_row}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </>
    );
  }
  /*componentDidUpdate(prevProps, prevState, snapshot){
    if(prevState.squareIsOpening = true){

console.log("работает");
    }
  }*/
}

export default Board;
