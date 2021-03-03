import React from "react";
import  "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a href="https://github.com/VaseninaNastya">Nastya Vasenina</a>
        <span>2021</span>
        <a href="https://rs.school/js/">
          <img src="https://rs.school/images/rs_school_js.svg" alt="logo"/>
        </a>
      </footer>
    );
  }
}

export default Footer;
