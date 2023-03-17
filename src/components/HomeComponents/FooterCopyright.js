import React from "react";

const FooterCopyright = () => {
  return (
    <>
      <hr className="my-6 border-slate-300 dark:border-sky-500" />
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="w-full px-4 mx-auto text-center md:text-left">
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-slate-500 font-semibold py-1">
            <p>
              Stranco Products Inc. Copyright © 1944 -
              {new Date().getFullYear()}
            </p>
            <p>
              Made With &#10084; By: &#160;
              <a
                href="/"
                className="text-sky-400 dark:text-sky-300 hover:text-sky-600 dark:hover:text-white font-semibold py-1"
              >
                Think Logical
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCopyright;
