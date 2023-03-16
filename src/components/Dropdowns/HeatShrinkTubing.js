import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const HeatShrinkTubing = () => {
  return (
    <>
      <li className="rounded-sm relative px-3 py-1 ">
        <Link
          to="/product-details/1"
          className=" py-2 px-4 text-left flex items-center outline-none focus:outline-none w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold dropDownMenu"
        >
          <button className="w-full text-left flex items-center outline-none focus:outline-none">
            <span className="pr-1 flex-1">Heat Shrink Tubing</span>
            <span className="mr-auto">
            <svg
              className="fill-current h-5 w-5
            transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
            </span>
          </button>
        </Link>
        <ul
          className="bg-white dark:bg-slate-800 text-base rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
        >
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="/product-details/8"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Single Wall
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="/product-details/9"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Dual Wall
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="/product-details/10"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Heavy Duty
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="/product-details/11"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Special Purpose
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default HeatShrinkTubing;
