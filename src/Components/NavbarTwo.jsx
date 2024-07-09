import React from "react";
import "./Style.css";

const NavbarTwo = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="#">Discount</a>
        </li>
        <li>
          <a href="#">Top brands</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Clearance sales</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarTwo;
