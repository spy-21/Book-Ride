import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-neutral-950 text-white p-4 px-6 md:px-10 flex justify-between items-center relative">
      <Link to="/">
        <img
          src="https://e7.pngegg.com/pngimages/230/701/png-clipart-ride-kit-meets-covington-ytv-amazon-com-book-rides-television-text.png"
          alt="logo"
          className="w-14 h-10 md:w-28 rounded-xl shadow-lg"
        />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-8 mb-2">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
        <Link to="/booking">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
            Book ride
          </button>
        </Link>
      </nav>

      {/* Mobile toggle button */}
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile nav menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-neutral-950 text-white flex flex-col items-start px-6 py-4 md:hidden space-y-4 z-50">
          <Link to="/" className="hover:text-gray-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link to="/booking" onClick={toggleMenu}>
            <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
              Book ride
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
