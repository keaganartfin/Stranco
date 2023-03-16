/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

import ProductsDropdown from "components/Dropdowns/ProductsDropdown";
import Switcher from "contexts/Switcher";
import { MinStrancoLogo } from "assets/img/Index";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-slate-700 dark:text-slate-300 whitespace-nowrap"
            >
              <div className="hidden sm:flex sm:items-center">
                <MinStrancoLogo /> Stranco Products
                </div>
                <div className="flex items-center sm:hidden">
                <MinStrancoLogo />
                </div>
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
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
            <ul className="flex flex-col list-none lg:flex-row lg:ml-auto">
            <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/"
                  target="_blank"
                >
                  <span className="inline-block ml-2">Home</span>
                </a>
              </li>
              <li className="flex items-center">
                <ProductsDropdown />
                {/* Services */}
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/"
                  target="_blank"
                >
                  <span className="inline-block ml-2">Products</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/"
                  target="_blank"
                >
                  <span className="inline-block ml-2">About</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 text-xs font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/"
                  target="_blank"
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
