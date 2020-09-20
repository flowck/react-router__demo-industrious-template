import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ closeMenu, menuStatus }) => {
  return (
    <nav id="menu" className={menuStatus ? "menu menu--active" : "menu"}>
      <ul className="links">
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/elements" onClick={closeMenu}>
            Elements
          </Link>
        </li>
        <li>
          <Link to="/generic" onClick={closeMenu}>
            Generic
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
