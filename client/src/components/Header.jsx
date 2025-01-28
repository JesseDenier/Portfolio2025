import React from "react";

import { PersonalLogo } from "./Logos";

const Header = () => {
  return (
    <header className="bg-darkgreen text-white py-2 px-4 sticky top-0 shadow-md z-50">
      <div className="flex flex-wrap justify-between items-center gap-4">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          {/* Inline SVG for Logo with Hover Effect */}
          <a
            href="#About"
            className="flex items-center gap-2 hover:text-yellow transform hover:scale-105 transition-transform duration-300"
          >
            <PersonalLogo className="h-6 w-6 fill-current group-hover:scale-105 transition-transform duration-300" />
            <h1 className="text-xl font-bold">Jesse Denier</h1>
          </a>
        </div>

        {/* Centered Navigation Links */}
        <nav className="hidden sm:flex flex-1 justify-center gap-4 text-base lg:text-lg items-center">
          <a
            href="#About"
            className="hover:text-yellow transform hover:scale-105 transition-transform duration-300"
          >
            About
          </a>
          <a
            href="#Projects"
            className="hover:text-yellow transform hover:scale-105 transition-transform duration-300"
          >
            Projects
          </a>
          <a
            href="#Marketing"
            className="hover:text-yellow transform hover:scale-105 transition-transform duration-300"
          >
            Marketing
          </a>
        </nav>

        {/* "Contact Me" on the right */}
        <div className="flex items-center">
          <a
            href="mailto:jessecdenier@gmail.com"
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
