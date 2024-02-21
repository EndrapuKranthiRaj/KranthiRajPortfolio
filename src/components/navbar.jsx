import React, { useState } from 'react'
import { DiAptana } from "react-icons/di";
import {Link} from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div >
      {/* nav bar start ********************************************/}

    <nav className="z-10 border-gray-200 bg-gray-900 fixed w-full top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* Assuming DiAptana is an icon */}
          <DiAptana color="white" size={25} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Portfolio
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`md:block w-full  md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                onClick={toggleMenu}
                to="/"
                className={`block py-2 px-3 text-white  ${window.location.pathname=="/" ? 'md:text-blue-500 bg-blue-700':''} rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-whitedark:text-blue-50`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/about"
                className={`block py-2 px-3 text-white  ${window.location.pathname=="/about" ? 'md:text-blue-500 bg-blue-700':''} rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-whitedark:text-blue-50`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/projects"
                className={`block py-2 px-3 text-white  ${window.location.pathname=="/projects" ? 'md:text-blue-500 bg-blue-700':''} rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-whitedark:text-blue-50`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                onClick={toggleMenu}
                to="/contact"
                className={`block py-2 px-3 text-white  ${window.location.pathname=="/contact" ? 'md:text-blue-500 bg-blue-700':''} rounded md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-whitedark:text-blue-50`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

      {/* nav bar end **********************************************/}
    </div>
  )
}
