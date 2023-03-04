/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white dark:bg-gray-800 text-gray-400 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-slate-600 dark:text-sky-500 mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0"
            to="/"
          >
            Stranco Products
          </Link>
          {/* Toggler */}
          <button
            className="cursor-pointer text-black dark:text-sky-300 opacity-50 dark:opacity-100 md:hidden px-3 py-1 text-2xl leading-none bg-transparent rounded border border-solid border-transparent"
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
            <div className="md:min-w-full md:hidden block pb-4 mb-4 ">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-slate-600 dark:text-sky-500 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Stranco Products
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black dark:text-sky-300 opacity-50 dark:opacity-100 md:hidden px-3 py-1 text-2xl leading-none bg-transparent rounded border border-solid border-transparent"
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
            <h6 className="md:min-w-full text-slate-500 dark:text-sky-300  text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Navigation
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
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

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-xs uppercase py-3 font-bold block"
                  to="/about"
                >
                  <i className="fas fa-fingerprint text-slate-400 mr-2 text-sm"></i>{" "}
                  Services
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-xs uppercase py-3 font-bold block"
                  to="/about"
                >
                  <i className="fas fa-fingerprint text-slate-400 mr-2 text-sm"></i>{" "}
                  Admin Login
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-xs uppercase py-3 font-bold block"
                  to="/about"
                >
                  <i className="fas fa-fingerprint text-slate-400 mr-2 text-sm"></i>{" "}
                  about
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-xs uppercase py-3 font-bold block"
                  to="/contact"
                >
                  <i className="fas fa-clipboard-list text-slate-300 mr-2 text-sm"></i>{" "}
                  contact
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 dark:text-sky-300  text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Product Categories
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-slate-300 text-base"></i>
                  All
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-slate-300 text-base"></i>
                  Heat Shrink Tubing
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-angular mr-2 text-slate-300 text-base"></i>
                  Heat Shrink Molded Parts
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-slate-300 text-base"></i>
                  Non-Heat Shrink Tubing
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  Wire and Cable
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-slate-300 text-base"></i>
                  Solder Sleeves & Devices
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-slate-300 text-base"></i>
                  Cable Ties
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  Marking Systems
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  Adhesive Systems
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-slate-700 hover:text-sky-500 dark:text-gray-200  text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-slate-300 text-base"></i>
                  Braided Sleeving
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
