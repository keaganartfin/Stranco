/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import Switcher from "contexts/Switcher";
import IndexDropdown from "components/Dropdowns/IndexDropdown";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white dark:bg-gray-900 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-slate-700 dark:text-slate-300  font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Stranco Products
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white dark:max-lg:bg-slate-800 lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <a
                  className="hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center  uppercase font-bold"
                  href="/"
                  
                >
                  <span className="inline-block ml-2">Home</span>
                </a>
              </li>
              <li className="flex items-center">
                <IndexDropdown  /> 
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center  uppercase font-bold"
                  href="/services"
                  
                >
                  <span className="inline-block ml-2">Services</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center  uppercase font-bold"
                  href="/about"
                  
                >
                  <span className="inline-block ml-2">About</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 px-3 py-4 lg:py-2 flex items-center  uppercase font-bold"
                  href="/"
                  
                >
                  <span className="inline-block ml-2">Contact</span>
                </a>
              </li>
              <li className="flex items-center"> 
              <Switcher />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
