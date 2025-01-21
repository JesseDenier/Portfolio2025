// Imports React library
import React from "react";
import { useLocation, Link } from "react-router-dom";

//! Build the header component.

// Functional component for the Header
const Header = () => {
  const location = useLocation();

  return (
    <header>
      <p>Header</p>
    </header>
  );
};

export default Header;
