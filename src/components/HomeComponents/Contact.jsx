import React from "react";

const Contact = () => {
  return (
    <section className="block relative z-1 bg-slate-600 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="justify-center flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4  -mt-24">
            <div className="flex flex-wrap justify-center">
              <div className="bg-white dark:bg-slate-800 shadow-xl rounded-3xl">
                <div className="justify-center text-center flex flex-wrap mt-24 ">
                  <div className="w-full px-12 md:px-4">
                    <h2 className="font-bold text-4xl dark:text-slate-300">
                      Contact Us
                    </h2>
                    <p className="text-lg font-semibold leading-relaxed mt-4 mb-4 text-slate-500 dark:text-slate-400">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus totam, culpa voluptate laborum officiis repellendus deserunt!
                    </p>
                  </div>
                </div>
                <section className="text-gray-700 body-font relative">
                  <div className="container px-2 py-6 mx-auto">
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                      <div className="flex flex-wrap justify-center -m-2">
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label
                              htmlFor="name"
                              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
                            >
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className="w-full bg-gray-100 dark:bg-slate-900 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-1/2">
                          <div className="relative">
                            <label
                              htmlFor="email"
                              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className="w-full bg-gray-100 rounded border dark:bg-slate-900 border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <div className="relative">
                            <label
                              htmlFor="message"
                              className="leading-7 text-sm text-gray-600 dark:text-gray-300"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              className="w-full bg-gray-100 rounded border dark:bg-slate-900 border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 dark:text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                          </div>
                        </div>
                        <div className="p-2 w-full">
                          <button className="flex mx-auto text-white bg-blue-700 dark:bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Send Message
                          </button>
                        </div>
                        <div className="p-2 w-9/12 pt-8 mt-8 border-t border-gray-200 dark:border-gray-100 text-center">
                          <a href="/" className="text-blue-700 dark:text-sky-300">
                            example@email.com
                          </a>
                          <p className="leading-normal my-5">
                            49 Smith St.
                            <br />
                            Saint Cloud, MN 56301
                          </p>
                          <span className="inline-flex">
                            <a href="/" className="text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                              </svg>
                            </a>
                            <a href="/" className="ml-4 text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                              </svg>
                            </a>
                            <a href="/" className="ml-4 text-gray-500">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <rect
                                  width="20"
                                  height="20"
                                  x="2"
                                  y="2"
                                  rx="5"
                                  ry="5"
                                ></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                              </svg>
                            </a>
                            <a href="/" className="ml-4 text-gray-500">
                              <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                              >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
