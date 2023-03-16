import { AveryDennison, HP, Steinel, FederalMogul, TE } from "assets/img/Index";
import React from "react";

const Brands = () => {
  return (
    <div className="flex justify-center flex-col">
      <hr className=" mx-auto px-4 md:px-8 my-12 w-5/6 border-gray-200 dark:border-sky-700" />
      <div className="my-24 px-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h3 className="font-semibold text-lg text-gray-600 dark:text-sky-600 text-center uppercase">
            TRUSTED BY brands FROM AROUND THE WORLD
          </h3>
          <div className="mt-6">
            <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
              {/* LOGO 1 */}
              <li>
                <TE />
              </li>
              <li>
                <AveryDennison />
              </li>
              <li>
                <FederalMogul />
              </li>
              <li>
                <HP />
              </li>
              <li>
                <Steinel />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
