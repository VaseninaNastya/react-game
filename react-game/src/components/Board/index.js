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
    };
  }
  renderSquare(i, winner) {
    return (
      <Square
        squareIsOpening={this.state.squares[i]}
        shoulBeDisabled ={winner}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  handleClick(i) {
    const winner = calculateWinner(this.state.squares);
    if(!winner){
      const squares = this.state.squares.slice();
      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
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
/*import React from "react";
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
      winner: false,
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
    const winner = calculateWinner(this.state.squares);
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      squareIsOpening: true,
      winner: winner
    });
    console.log("winner",winner);
  }
  render() {
console.log("this.state.winner",this.state.winner);
    let status;
    if (this.state.winner) {
      status = "Выиграл " + this.state.winner;
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
}

export default Board;*/
