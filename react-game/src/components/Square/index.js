
import React from "react";
import s from "./Square.module.scss";
import classNames from "classnames";

class Square extends React.Component{
 /* constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }*/
  render() {
    const classes = this.props.squareIsOpening
    ? classNames(s.square, s.square__increasedFontSize)
    : classNames(s.square);
    return (
      <button className={classes} onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
};

export default Square;

/*
const Header = ({ children, colorTheme }) => {
  const classes = colorTheme
    ? classNames(s.underline, s.underline__white)
    : classNames(s.underline, s.underline_gray);
  return (
    <>
      <div className={s.header}>
        <div className={classes}>{children}</div>
      </div>
    </>
  );
};*/