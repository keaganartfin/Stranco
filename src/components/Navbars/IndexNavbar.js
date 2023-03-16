/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

import Switcher from "contexts/Switcher";
import IndexDropdown from "components/Dropdowns/IndexDropdown";
import { MinStrancoLogo, ContactIcon } from "assets/img/Index";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [handleDrawer, setHandleDrawer] = useState(true);
  const hide = " translate-x-full -mr-3 mb-0 lg:mb-32 transition-transform";

  return (
    <>
      <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <div className="flex flex-row">
              <Link
                to="/"
                className="inline-block py-2 mr-4 font-bold leading-relaxed uppercase text-slate-700 dark:text-slate-300 whitespace-nowrap"
              >
                <div className="hidden sm:flex sm:items-center">
                  <MinStrancoLogo /> Stranco Products
                </div>
                <div className="flex items-center sm:hidden">
                  <MinStrancoLogo />
                </div>
              </Link>
              <div className="flex lg:hidden">
                <Switcher />
              </div>
            </div>
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
                  className="flex items-center px-3 py-4 font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/"
                >
                  <span className="inline-block ml-2">Home</span>
                </a>
              </li>
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/admin/all-products"
                >
                  <span className="inline-block ml-2">Catalog</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/services"
                >
                  <span className="inline-block ml-2">Services</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 font-bold uppercase hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  href="/about"
                >
                  <span className="inline-block ml-2">About</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="flex items-center px-3 py-4 font-bold uppercase cursor-pointer hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 lg:py-2"
                  onClick={() => {
                    setHandleDrawer(!handleDrawer);
                  }}
                >
                  <span className="inline-block ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <Switcher />
          </div>
        </div>
        <div className="z-3">
          {/* <!-- drawer init and show --> */}
          <div>
            <button
              className="fixed bottom-0 right-0 p-2 m-2 bg-blue-600 rounded-full cursor-pointer lg:m-5"
              onClick={() => {
                setHandleDrawer(!handleDrawer);
              }}
            >
              <ContactIcon fill="#ffffff" />
            </button>
          </div>

          {/* <!-- drawer component --> */}
          <div
            id="drawer-contact"
            className={
              "fixed bottom-0 right-0 z-40 p-4 mb-0 lg:mb-32 overflow-y-auto rounded-2xl bg-white w-80 dark:bg-gray-800 transition-transform ease-in-out" +
              (handleDrawer ? hide : null)
            }
            tabIndex="-1"
            aria-labelledby="drawer-contact-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Contact us
            </h5>
            <button
              type="button"
              onClick={() => {
                setHandleDrawer(!handleDrawer);
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <form action="/" className="mb-6">
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="(000) 000-0000"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
              >
                Send message
              </button>
            </form>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:underline">
                info@company.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="/" className="hover:underline">
                212-456-7890
              </a>
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
