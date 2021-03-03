import React from "react";
import s from "./Footer.module.scss";
import classNames from "classnames";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/VaseninaNastya">Nastya Vasenina</a>
        <span>2021</span>
        <a href="https://rs.school/js/">
          <img src="https://rs.school/images/rs_school_js.svg"/>
        </a>
      </footer>
    );
  }
}

export default Footer;
