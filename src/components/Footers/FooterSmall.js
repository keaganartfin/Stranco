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
          <hr className="mb-6 border-b-1 border-slate-600" />
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
            <div className="w-full px-4">
              <div className="flex justify-center py-1 text-sm font-semibold text-center text-slate-500 md:text-left">
                Copyright © {new Date().getFullYear()} | Made With &#10084; By:
                &#160;
                <a
                  href="/"
                  className="text-sm font-semibold text-white dark:text-sky-300 hover:text-slate-300 dark:hover:text-white"
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
