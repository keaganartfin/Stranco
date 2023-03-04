import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import HeatShrinkTubing from "./SubDropdowns/HeatShrinkTubing";

const ProductsDropdown = () => {
  return (
    <>
      <div className="group inline-block productDropDown z-9999">
        <button
          className=" py-2 pl-4 flex flex-row items-center w-full outline-none whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold uppercase focus:outline-none"
        >
          <span className="pr-1 font-bold flex-1">Products</span>
          <span>
            <svg
              className="fill-current h-5 w-5 transform group-hover:-rotate-180
              transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
          
        </button>
        <ul
          className="bg-white dark:bg-slate-800 shadow-lg rounded transform scale-0 group-hover:scale-100 absolute 
          transition duration-150 ease-in-out origin-top min-w-32"
        >
          <li className="rounded-sm px-3 py-1">
            <span
              className={
                " pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-slate-700 dark:text-sky-200"
              }
            >
              <Link to="/admin/dashboard">Products Catalog</Link>
            </span>
          </li>
            <div className="h-0 mx-4 my-2 border border-solid border-slate-200 dark:border-sky-500" />
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="/products"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              All Products
            </Link>
          </li>
          <HeatShrinkTubing />
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/7"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Heat Shrink Molded Parts
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/1"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Non-Heat Shrink Tubing
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/2"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Wire and Cable
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/8"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Solder Sleeves and Devices
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/9"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Cable Ties
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/3"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Marking Systems
            </Link>
          </li>
          <li className="rounded-sm px-3 py-1 ">
            <Link
              to="product-details/10"
              className=" py-2 px-4  block w-full whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold"
            >
              Adhesive Systems
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProductsDropdown;
