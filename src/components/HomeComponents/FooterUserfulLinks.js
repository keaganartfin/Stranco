import React from "react";

const FooterUsefulLinks = () => {
  return (
    <div className="w-full lg:w-4/12 px-4 ml-auto">
      <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
        Useful Links
      </span>
      <ul className="list-none">
        <li>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block py-1 text-sm"
            href="/about"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block py-1 text-sm"
            href="/contact"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block py-1 text-sm"
            href="/services"
          >
            Services
          </a>
        </li>
        <li>
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block py-1 text-sm"
            href="/products"
          >
            Products
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterUsefulLinks;
