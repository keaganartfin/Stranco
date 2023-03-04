/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Contact from "components/HomeComponents/Contact";
import Brands from "components/HomeComponents/Brands";
import FAQ from "components/HomeComponents/FAQ";
import ProductCategories from "components/HomeComponents/ProductCategories";
import ContactDrawer from "components/HomeComponents/ContactDrawer";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <ContactDrawer />
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-bold text-4xl text-slate-600 dark:text-sky-500">
                React - A beautiful extension for Tailwind CSS.
              </h2>
              <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-400 dark:text-gray-300">
                React is Free and Open Source. It does not change any of the CSS
                from{" "}
                <a
                  href="/"
                  className="text-slate-600 dark:text-sky-500 font-semibold"
                  target="_blank"
                >
                  Tailwind CSS 
                </a>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                ullam, saepe eaque quis quasi deleniti.
              </p>
              <div className="mt-12">
                <a
                  href=""
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-sky-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href=""
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute z-2 top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/img/pattern_react.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100 dark:bg-[#182030]">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-12/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-slate-900 w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-sky-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold dark:text-slate-300">
                    Great for your awesome project
                  </h4>
                  <p className="text-md font-bold mt-2 text-slate-500 dark:text-slate-400">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white dark:bg-slate-300">
                        <i className="fas fa-sitemap dark:text-slate-900"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-bold dark:text-slate-300">
                        CSS Components
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white dark:bg-slate-300">
                        <i className="fas fa-drafting-compass dark:text-slate-900"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-bold dark:text-slate-300">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white dark:bg-slate-300">
                        <i className="fas fa-newspaper dark:text-slate-900"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-bold dark:text-slate-300">
                        Pages
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white dark:bg-slate-300">
                        <i className="fas fa-file-alt dark:text-slate-900"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-bold dark:text-slate-300">
                        Documentation
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Brands />

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-slate-300">
                <i className="fas fa-sitemap text-xl dark:text-slate-900"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal dark:text-slate-300">
                CSS Components
              </h3>
              <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-slate-600 dark:text-slate-400">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                have different colours.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="font-bold text-slate-700 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-200 ease-linear transition-all duration-150"
              >
                View All{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed "></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("../assets/img/component-btn.png")}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src={require("../assets/img/component-profile-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src={require("../assets/img/component-info-card.png")}
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src={require("../assets/img/component-info-2.png")}
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("../assets/img/component-menu.png")}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("../assets/img/component-btn-pink.png")}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="pt-16 mt-32 sm:mt-0">
          <ProductCategories />
          </div>

          <div className="flex flex-wrap items-center pt-0">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a href="/" target="_blank">
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        Svelte
                      </p>
                    </div>
                  </a>
                  <a href="/" target="_blank">
                    <div className="bg-sky-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        ReactJS
                      </p>
                    </div>
                  </a>
                  <a href="/" target="_blank">
                    <div className="bg-slate-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        NextJS
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a href="/" target="_blank">
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        JavaScript
                      </p>
                    </div>
                  </a>
                  <a href="/" target="_blank">
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        Angular
                      </p>
                    </div>
                  </a>
                  <a href="/" target="_blank">
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white dark:bg-slate-300"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-bold">
                        Vue.js
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-slate-300">
                <i className="fas fa-drafting-compass text-xl dark:text-slate-900"></i>
              </div>
              <h3 className="text-3xl mb-2 font-bold leading-normal dark:text-slate-300">
                Javascript Components
              </h3>
              <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-slate-600 dark:text-slate-400">
                In order to create a great User Experience some components
                require JavaScript. In this way you can manipulate the elements
                on the page and give more options to your users.
              </p>
              <p className="text-lg font-bold leading-relaxed mt-4 mb-4 text-slate-600 dark:text-slate-400">
                We created a set of Components that are dynamic and come to help
                you.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 dark:text-slate-800 bg-white dark:bg-sky-500  last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="font-bold text-slate-700 dark:text-slate-400 hover:text-slate-500 dark:hover:text-slate-200 ease-linear transition-all duration-150"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <FAQ />

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-slate-300">
                  <i className="fas fa-file-alt text-xl dark:text-slate-900"></i>
                </div>
                <h3 className="text-3xl font-bold dark:text-slate-300">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                  This extension comes a lot of fully coded examples that help
                  you get started faster. You can adjust the colors and also the
                  programming language. You can change the text and images and
                  you're good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400 mr-3">
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
                        <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400 mr-3">
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
                        <span className="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400 mr-3">
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

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
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
          </div>
        </div>
      </section>

      <Contact />

      <section className="py-20 bg-slate-600 dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-slate-500 dark:text-slate-900 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white dark:bg-slate-300">
                <i className="fas fa-code-branch text-xl dark:text-slate-900"></i>
              </div>
              <h3 className="text-3xl mb-2 font-bold leading-normal text-white dark:text-slate-300">
                Open Source
              </h3>
              <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-slate-400">
                Since{" "}
                <a href="/" className="text-slate-300" target="_blank">
                  Tailwind CSS
                </a>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                dolorem veniam, laboriosam consequuntur a optio, molestiae
                voluptates hic alias quod voluptatum placeat! Accusamus optio,
                numquam id sint eaque earum odio!
              </p>
              <p className="text-lg font-semibold leading-relaxed mt-0 mb-4 text-slate-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                distinctio vitae laborum cupiditate unde laboriosam.
              </p>
              <a
                href="/"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-slate-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-slate-200 dark:bg-[#182030] relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
          <div className="flex flex-wrap justify-center bg-white dark:bg-slate-800 shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-bold text-3xl dark:text-slate-300">
                Lorem ipsum dolor sit.
              </h3>
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-lg leading-relaxed mt-4 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quis eligendi quia error minima nisi qui quasi
                molestiae sunt consequuntur, quae reprehenderit, doloribus
                itaque sequi cupiditate ullam? Vitae, cumque sit!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-sky-500 active:bg-sky-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="/"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600  uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Drop a Line</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
