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
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-slate-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-slate-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "} | Made With &#10084; By: &#160;
                <a
                  href="/"
                  className="text-white dark:text-sky-300 hover:text-slate-300 dark:hover:text-white text-sm font-semibold py-1"
                >
                  Think Logical
                </a>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-white hover:text-slate-300 text-sm font-semibold block py-1 px-3"
                  >
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
