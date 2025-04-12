import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral-950 text-white p-4  px-10 flex justify-between items-center">
      <Link to="/">
        <img
          src="https://e7.pngegg.com/pngimages/230/701/png-clipart-ride-kit-meets-covington-ytv-amazon-com-book-rides-television-text.png"
          alt=""
          className="w-24 h-auto rounded-xl shadow-lg"
        />
      </Link>
      <nav className="flex items-center space-x-8">
        <ul className="flex space-x-8 mb-2 ">
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
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition duration-300">
            Book ride
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
