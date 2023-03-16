import React from "react";

export default function FooterSmall(props) {
  return (
    <>
      <footer
        className={
          (props.absolute
            ? "absolute w-full bottom-0 bg-slate-800"
            : "relative") + " pt-6 pb-6"
        }
      >
        <div className="container px-4 mx-auto">
          <hr className="mb-6 w-5/6 mx-auto border-b-1 border-slate-600" />
          <div className="flex flex-col items-center justify-center md:justify-between">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center list-none">
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block px-3 py-1 text-sm font-semibold text-white hover:text-slate-300"
                  >
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-9/12 px-4 mt-4">
            <div className="flex flex-col gap-4 sm:mt-12 sm:flex-row sm:justify-between text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                <p>
                  Stranco Products Inc. Copyright © 1944 -{" "}
                  {new Date().getFullYear()}{" "}
                </p>
                <p>
                  Made With &#10084; By: &#160;
                  <a
                    href="/"
                    className="text-sky-400 dark:text-sky-300 hover:text-sky-600 dark:hover:text-white text-sm font-semibold py-1"
                  >
                    Think Logical
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


