import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-slate-300 dark:bg-[#182030] pt-8 pb-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-300 dark:text-[#182030] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl dark:text-slate-300 font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg font-semibold mt-0 mb-2 text-slate-600 dark:text-slate-400">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white dark:bg-slate-900 text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white dark:bg-slate-900 text-sky-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white dark:bg-slate-900 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
                    Company
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Quality Assurance
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Suppliers
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Industries We Serve
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Quality Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
                        href="/"
                      >
                        Site Map
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300 dark:border-sky-500" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "} | Made With &#10084; By: &#160;
                <a
                  href="/"
                  className="text-sky-400 dark:text-sky-300 hover:text-sky-600 dark:hover:text-white text-sm font-semibold py-1"
                >
                  Think Logical
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
