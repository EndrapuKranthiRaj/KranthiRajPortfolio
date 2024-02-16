import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    const d = new Date();
    const year = d.getFullYear();
    
  return (
    <footer className={`bg-white rounded-sm shadow dark:bg-gray-800 relative ${window.location.pathname=="/admin"||"/" ? '': 'mt-16'}`}>
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © {year+" "}
      <Link  to="#" className="hover:underline">
        Portfolio™
      </Link >
      . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <Link  to="/about" className="hover:underline me-4 md:me-6">
          About
        </Link >
      </li>
      <li>
        <Link  to="#" className="hover:underline me-4 md:me-6">
          Privacy Policy
        </Link >
      </li>
      <li>
        <Link  to="/admin" className="hover:underline me-4 md:me-6">
          Admin
        </Link >
      </li>
      <li>
        <Link  to="/contact" className="hover:underline">
          Contact
        </Link >
      </li>
    </ul>
  </div>
</footer>

  )
}
