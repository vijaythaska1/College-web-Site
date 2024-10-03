import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['Home', 'About', 'Courses', 'Campus Life', 'Contact'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="IPS Gangoh Logo" className="h-12 w-12 object-cover" />
          <h1 className="text-3xl font-bold text-gray-600">I.P.S Collage</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg font-medium">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative">
            <select className="p-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:border-indigo-600 transition duration-300 ease-in-out ml-4">
              <option value="" disabled selected>
                My Account
              </option>
              <option>Student Login</option>
              <option>Staff Login</option>
            </select>
          </div>
        </nav>


        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <span className="material-icons transition duration-300 ease-in-out">
            {isMenuOpen ? <i className="material-symbols-outlined">close</i> : <i className="material-symbols-outlined">menu</i>}
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-600 hover:text-indigo-600 transition duration-300 ease-in-out font-semibold block py-2"
                >
                  {item}
                </Link>
              </li>
            ))}
            <select className="p-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:border-indigo-600 transition duration-300 ease-in-out">
              <option value="" disabled selected>
                My Account
              </option>
              <option>Student Login</option>
              <option>Staff Login</option>
            </select>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
