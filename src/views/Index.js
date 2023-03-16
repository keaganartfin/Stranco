/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Contact from "components/HomeComponents/Contact";
import Brands from "components/HomeComponents/Brands";
import FAQ from "components/HomeComponents/FAQ";
import ProductCategories from "components/HomeComponents/ProductCategories";
import InformationSection from "components/HomeComponents/InformationSection";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="relative flex items-center h-screen pt-16 header max-h-860-px">
        <div className="container flex flex-wrap items-center mx-auto">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-4xl font-bold text-slate-600 dark:text-sky-500">
                React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-400 dark:text-gray-300">
                React is Free and Open Source. It does not change any of the CSS
                from{" "}
                <a
                  href="/"
                  className="font-semibold text-slate-600 dark:text-sky-500"
                  target="_blank"
                >
                  Tailwind CSS
                </a>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                ullam, saepe eaque quis quasi deleniti.
              </p>
              <div className="mt-12">
                <a
                  href=""
                  target="_blank"
                  className="px-4 py-2 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none get-started sm:px-6 sm:py-4 focus:outline-none bg-sky-500 active:bg-sky-600 hover:shadow-lg"
                >
                  Get started
                </a>
                <a
                  href=""
                  className="px-4 py-2 mb-1 ml-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none github-star sm:px-6 sm:py-4 focus:outline-none bg-slate-700 active:bg-slate-600 hover:shadow-lg"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 right-0 w-10/12 pt-16 -mt-48 z-2 b-auto sm:w-6/12 sm:mt-0 max-h-860px"
          src={require("../assets/img/pattern_react.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 relative bg-slate-100 dark:bg-[#182030]">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
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
              className="text-slate-100 dark:text-[#182030] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <InformationSection />
        <Brands />
      </section>

      <section className="py-20 overflow-hidden bg-slate-600 dark:bg-slate-900">
        <div className="container pb-64 mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="container px-4 pt-48 pb-32 mx-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-full px-12 ml-auto md:w-5/12 md:px-4 z-2">
                  <div className="md:pr-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                      <i className="text-xl fas fa-file-alt dark:text-slate-900"></i>
                    </div>
                    <h3 className="text-3xl font-bold dark:text-slate-300">
                      Complex Documentation
                    </h3>
                    <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                      This extension comes a lot of fully coded examples that
                      help you get started faster. You can adjust the colors and
                      also the programming language. You can change the text and
                      images and you're good to go.
                    </p>
                    <ul className="mt-6 list-none">
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                              <i className="fas fa-fingerprint dark:text-slate-900"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 dark:text-slate-400">
                              Built by Developers for Developers
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                              <i className="fab fa-html5 dark:text-slate-900"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 dark:text-slate-400">
                              Carefully crafted code for Components
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="flex items-center">
                          <div>
                            <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                              <i className="far fa-paper-plane dark:text-slate-900"></i>
                            </span>
                          </div>
                          <div>
                            <h4 className="text-slate-500 dark:text-slate-400">
                              Dynamic Javascript Components
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0 z-2">
                  <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-xl"
                    style={{
                      transform:
                        "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                    }}
                    src={require("../assets/img/documentation.png")}
                  />
                </div>
                <div className="relative w-full px-4 mt-32 ml-auto mr-auto md:w-4/12">
                  <i className="absolute left-auto fab fa-github text-slate-700 -top-[750px] -right-100 opacity-80 text-55"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-slate-200 dark:bg-[#182030] relative pt-32">
        <div
          className="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
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
              className="text-slate-200 dark:text-[#182030] fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="relative z-10 flex flex-wrap justify-center px-12 -mt-64 bg-white rounded-lg shadow-xl dark:bg-slate-800">
            <div className="mt-32 sm:mt-0">
              <ProductCategories />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
