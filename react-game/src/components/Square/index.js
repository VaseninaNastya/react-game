/*class Square extends React.Component {
    render() {
      return (
        <button className="square">
        </button>
      );
    }
  }*/

import React from "react";
import s from "./Square.module.scss";
//import classNames from "classnames";

class Square extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <button className={s.square} onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
};

export default Square;
