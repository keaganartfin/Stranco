import React from "react";

const FooterOtherResources = () => {
  return (
    <div className="w-full lg:w-4/12 px-4">
      <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
        Other Resources
      </span>
      <ul className="list-none">
        <li className="py-2">
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block text-sm"
            href="/quality-policy"
          >
            Quality Policy
          </a>
        </li>
        <li className="py-2">
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block text-sm"
            href="/terms-conditions"
          >
            Terms &amp; Conditions
          </a>
        </li>
        <li className="py-2">
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block text-sm"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
        </li>
        <li className="py-2">
          <a
            className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block text-sm"
            href="/site-map"
          >
            Site Map
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterOtherResources;
