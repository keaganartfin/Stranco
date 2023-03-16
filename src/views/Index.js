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
              <h3 className="text-3xl font-bold text-slate-600 dark:text-sky-500">
                Your Best Choice In Heat Shrinkable Tubing & Electrical Insulation
              </h3>
              <p className="mt-4 text-xl font-semibold leading-relaxed text-slate-400 dark:text-gray-300">
                Stranco Products is the largest distributor of  {" "}
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

                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
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
                      Our Product Catalog
                    </h3>
                    <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                    Discover the most reliable and innovative heat shrink tubing and electrical insulation products on the market. Browse our catalog now and experience the Stranco Products difference.
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
