import React from "react";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faUser,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="/images/icon.png" alt="" />
      <div className="search">
        <input type="search" placeholder="I am shopping for" />
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
      </div>
      <Link to="/cart">
        <i className="shop">
          <FontAwesomeIcon icon={faShoppingCart} />
        </i>
      </Link>
      <div>
        <i>
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faAngleDown} />
        </i>
      </div>
    </div>
  );
};

export default Navbar;
