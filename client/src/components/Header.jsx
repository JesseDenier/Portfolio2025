import React from "react";

const Header = () => {
  return (
    <header className="bg-darkgreen text-white py-2 px-6 sticky top-0 shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          {/* Inline SVG for Logo with Hover Effect */}
          <a
            href="#Home"
            className="flex items-center gap-2 hover:text-yellow transform hover:scale-105 transition-transform transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 142.9 173.8"
              className="h-6 w-6 fill-current"
            >
              <path d="M80.6,173.8l-15.2,0L0,108.4l0-15.2h35.4c-10.2-9.9-16.6-23.7-16.6-39H34c0,18.9,13.5,34.7,31.4,38.3V0H73 c29.9,0,54.2,24.3,54.2,54.2c0,15.3-6.4,29.1-16.6,39h32.3v15.2H80.6V173.8z M21.5,108.4l44,44v-44H21.5z M80.6,15.9v76.5 C98.5,88.9,112,73.1,112,54.2S98.5,19.5,80.6,15.9z" />
            </svg>
            <h1 className="text-xl font-bold">Jesse Denier</h1>
          </a>
        </div>

        {/* Centered Navigation Links */}
        <nav className="flex-1 flex justify-center gap-6 text-lg items-center">
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
          <a
            href="#About"
            className="hover:text-yellow transform hover:scale-105 transition-transform duration-300"
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
