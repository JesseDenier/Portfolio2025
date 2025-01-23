// Imports React library
import React from "react";

const Header = () => {
  return (
    <header className="bg-darkgreen text-white py-2 px-6 sticky top-0 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo or Name */}
        <div className="flex items-center gap-2">
          {/* Favicon */}
          <img src="/logo.svg" alt="Logo" className="h-6 w-6" />
          <h1 className="text-xl font-bold">Jesse Denier</h1>
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex-1 flex justify-center gap-6 text-lg items-center">
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
        </nav>

        {/* "Contact Me" on the right */}
        <div className="flex items-center">
          <a
            href="#Contact"
            className="relative inline-block px-4 py-1 font-bold text-white border border-white rounded-md overflow-hidden group transition-all duration-400"
          >
            <span className="absolute inset-0 bg-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
            <span className="relative z-10 group-hover:text-darkgreen">
              Contact Me
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
