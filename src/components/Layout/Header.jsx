import React from "react";
import CartButton from "../Buttons/CartButton";

import "./Header.module.css";

const Header = ({ onClick }) => {
  return (
    <header>
      <h1>E-commerce</h1>
      <CartButton onClick={onClick} />
    </header>
  );
};

export default Header;
