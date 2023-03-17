import React from "react";
import image from "assets/img/pattern_react.png";

const HeroSection = () => {
  return (
    <header className="relative flex items-center h-screen pt-16 header max-h-860-px">
      <div className="container flex flex-wrap items-center mx-auto">
        <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="pt-32 sm:pt-0">
            <h3 className="text-3xl font-bold text-slate-600 dark:text-sky-500">
              Your Best Choice In Heat Shrinkable Tubing & Electrical Insulation
            </h3>
            <p className="mt-4 text-xl font-semibold leading-relaxed text-slate-400 dark:text-gray-300">
              Stranco Products is the largest distributor of{" "}
              <a
                href="/"
                className="font-semibold text-slate-600 dark:text-sky-500"
                target="_blank"
              >
                Heat Shrinkable Tubing
              </a>{" "}
              &{" "}
              <a
                href="/"
                className="font-semibold text-slate-600 dark:text-sky-500"
                target="_blank"
              >
                Electrical Insulation
              </a>{" "}
              in the Midwest since 1944.
            </p>
            <div className="my-12 text-center sm:flex">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-3 py-2.5 text-center mr-2 mb-2"
              >
                <span className="relative px-5 py-2.5">Product Catalog</span>
              </button>

              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded
-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              >
                <span className="relative inline-flex items-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get Started
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 z-2 b-auto sm:w-6/12 sm:mt-0 max-h-860px"
        src={image}
        alt="..."
      />
    </header>
  );
};

export default HeroSection;
