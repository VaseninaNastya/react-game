import React from "react";
import s from "./Square.module.scss";
import classNames from "classnames";

class Square extends React.Component {
  render() {
    console.log("this.props.winner",this.props.winner);
    let baseClass;
    if (
      this.props.winner  &&
        this.props.value === this.props.squareIsOpening &&
        this.props.value
    ) {
      baseClass = classNames(
        s.square_button,
        s.square__increasedFontSize,
        s.square__winner
      );
    } else if (this.props.winner && !this.props.value) {
      baseClass = classNames(
        s.square_button,
        s.square__increasedFontSize,
        s.square__disabled
      );
    } else if (this.props.squareIsOpening && this.props.value) {
      baseClass = classNames(s.square_button, s.square__increasedFontSize);
    } else {
      baseClass = classNames(s.square_button);
    }
    return (
      <button className={baseClass} onClick={() => this.props.onClick()}>
        <div className={s.square}>
        {this.props.value}
        </div>
      </button>
    );
  }
}

export default Square;
