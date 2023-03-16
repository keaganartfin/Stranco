/*eslint-disable*/
import { ContactIcon } from "assets/img/Index";
import { MinStrancoLogo } from "assets/img/Index";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [handleDrawer, setHandleDrawer] = useState(true);
  const hide = " translate-x-full -mr-3 mb-0 lg:mb-32 transition-transform";
  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 text-gray-400 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden dark:bg-gray-800 md:w-64">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
          {/* Brand */}
          <Link
            className="inline-block p-4 px-0 mr-0 text-lg font-bold text-left uppercase md:block md:pb-2 text-slate-600 dark:text-sky-500 whitespace-nowrap"
            to="/"
          >
            <div className="hidden sm:flex sm:items-center">
                <MinStrancoLogo /> Stranco Products
                </div>
                <div className="flex items-center sm:hidden">
                <MinStrancoLogo />
                </div>
          </Link>
          {/* Toggler */}
          <button
            className="px-3 py-1 text-2xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer dark:text-sky-300 dark:opacity-100 md:hidden"
            type="button"
            onClick={() =>
              setCollapseShow("bg-white m-2 py-3 px-6 dark:bg-gray-800")
            }
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="block pb-4 mb-4 md:min-w-full md:hidden ">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-slate-600 dark:text-sky-500 whitespace-nowrap"
                    to="/"
                  >
                    Stranco Products
                  </Link>
                </div>
                <div className="flex justify-end w-6/12">
                  <button
                    type="button"
                    className="px-3 py-1 text-2xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer dark:text-sky-300 dark:opacity-100 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-slate-500 dark:text-sky-300">
              Navigation
            </h6>
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-sky-700 hover:text-slate-500 dark:text-gray-200 ")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-slate-300")
                    }
                  ></i>{" "}
                  All Products
                </Link>
              </li>

              <li className="items-center"></li>
            </ul>

            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
            <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-sky-500 dark:text-gray-200"
                  to="/"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-slate-400"></i>{" "}
                  Home
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-sky-500 dark:text-gray-200"
                  to="/about"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-slate-400"></i>{" "}
                  Services
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-sky-500 dark:text-gray-200"
                  to="/about"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-slate-400"></i>{" "}
                  Admin Login
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-sky-500 dark:text-gray-200"
                  to="/about"
                >
                  <i className="mr-2 text-sm fas fa-fingerprint text-slate-400"></i>{" "}
                  about
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="block py-3 text-xs font-bold uppercase text-slate-700 hover:text-sky-500 dark:text-gray-200"
                  to="/contact"
                >
                  <i className="mr-2 text-sm fas fa-clipboard-list text-slate-300"></i>{" "}
                  contact
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="block pt-1 pb-4 text-xs font-bold no-underline uppercase md:min-w-full text-slate-500 dark:text-sky-300">
              Product Categories
            </h6>
            {/* Navigation */}
            <ul className="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fas fa-paint-brush text-slate-300"></i>
                  All
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-css3-alt text-slate-300"></i>
                  Heat Shrink Tubing
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-angular text-slate-300"></i>
                  Heat Shrink Molded Parts
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-js-square text-slate-300"></i>
                  Non-Heat Shrink Tubing
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-react text-slate-300"></i>
                  Wire and Cable
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-react text-slate-300"></i>
                  Solder Sleeves & Devices
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fas fa-link text-slate-300"></i>
                  Cable Ties
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-vuejs text-slate-300"></i>
                  Marking Systems
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-vuejs text-slate-300"></i>
                  Adhesive Systems
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="block mb-4 text-sm font-semibold no-underline text-slate-700 hover:text-sky-500 dark:text-gray-200"
                >
                  <i className="mr-2 text-base fab fa-vuejs text-slate-300"></i>
                  Braided Sleeving
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="z-3">
          {/* <!-- drawer init and show --> */}
          <div>
            <button
              className="fixed bottom-0 right-0 p-2 m-2 bg-blue-600 rounded-full cursor-pointer lg:m-10"
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
