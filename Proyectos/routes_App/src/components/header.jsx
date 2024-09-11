// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-200 text-black p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold italic">The Simpsons</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/characters" className="hover:text-gray-700">
              Episodios
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
