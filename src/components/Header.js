import siteLogo from "../images/logo.svg";
import React from "react";
function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <img className="header__title" src={siteLogo} id="logo" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
