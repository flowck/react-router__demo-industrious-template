import React from "react";
import { Link } from "react-router-dom";

const Header = ({ openMenu }) => {
  return (
    <header id="header">
      <Link className="logo" to="/">
        Industrious
      </Link>
      <nav>
        <a href="#menu" onClick={openMenu}>
          Menu
        </a>
      </nav>
    </header>
  );
};

export default Header;
