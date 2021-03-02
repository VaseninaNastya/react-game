
import React from "react";
import s from "./Square.module.scss";


class Square extends React.Component{

  render() {
    return (
      <button className={s.square} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
};

export default Square;
