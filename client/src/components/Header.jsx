// Imports React library
import React from "react";

const Header = () => {
  return (
    <header className="bg-darkgreen text-white py-4 px-6 sticky top-0 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-2xl font-bold">Jesse Denier</h1>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-lg items-center">
          <a
            href="#Projects"
            className="hover:text-yellow transition-colors duration-300"
          >
            Projects
          </a>
          <a
            href="#Marketing"
            className="hover:text-yellow transition-colors duration-300"
          >
            Marketing
          </a>
          <a
            href="#About"
            className="hover:text-yellow transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#Contact"
            className="relative inline-block px-4 py-2 font-bold text-white border border-white rounded-md overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 bg-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span className="relative z-10 group-hover:text-darkgreen">
              Contact Me
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
