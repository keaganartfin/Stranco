import React, { useState } from "react";
import "./CategoryPage.css";
import { SpecificProductInfo } from "data/SpecificProductInfo";

const CategoryPage = () => {
  const [showCards, setShowCards] = useState(false);
  const [handleButton, setHandleButton] = useState();

  const dataP = { SpecificProductInfo };
  const ProductData = dataP.SpecificProductInfo;

  return (
    <div>
      <section className="dark:bg-black dark:bg-opacity-20 dark:text-gray-100">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="products/product-details/1"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="https://source.unsplash.com/random/480x360"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {ProductData[0].name}
              </h3>
              <span className="text-xs dark:text-gray-400">
                February 19, 2021
              </span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a
              rel="noopener noreferrer"
              href="products/product-details/0"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?1"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[0].name}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 21, 2021
                </span>
                <p className="paragraph">{ProductData[0].description.paragraph1}</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="products/product-details/1"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?2"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[1].name}{" "}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 22, 2021
                </span>
                <p className="paragraph">{ProductData[1].description.paragraph1}</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="products/product-details/2"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?3"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[2].name}{" "}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 23, 2021
                </span>
                <p className="paragraph">{ProductData[2].description.paragraph1}</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="products/product-details/3"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?4"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[3].name}{" "}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 24, 2021
                </span>
                <p className="paragraph">{ProductData[3].description.paragraph1}</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="products/product-details/4"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?5"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[4].name}{" "}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 25, 2021
                </span>
                <p className="paragraph">{ProductData[4].description.paragraph1}</p>
              </div>
            </a>
            <a
              rel="noopener noreferrer"
              href="products/product-details/5"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
            >
              <img
                alt="Product Category"
                className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                src="https://source.unsplash.com/random/480x360?6"
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {ProductData[5].name}
                </h3>
                <span className="text-xs dark:text-gray-400">
                  January 26, 2021
                </span>
                <p className="paragraph">{ProductData[5].description.paragraph1}</p>
              </div>
            </a>
            {showCards ? <ProductCards /> : null}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className={
                "px-6 py-3 text-md rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400 z-2 drop-shadow-xl " +
                handleButton
              }
              onClick={() => {
                setShowCards(true);
                setHandleButton("invisible");
              }}
            >
              View More...
            </button>
            <span
              className={
                "relative flex h-3 w-3 -ml-2 -mt-1 z-3 " + handleButton
              }
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCards = () => {
  const dataP = { SpecificProductInfo };
  const ProductData = dataP.SpecificProductInfo;
  return (
    <>
      <a
        rel="noopener noreferrer"
        href="products/product-details/6"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[6].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[6].description.paragraph1}</p>
        </div>
      </a>
      <a
        rel="noopener noreferrer"
        href="products/product-details/7"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[7].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[7].description.paragraph1}</p>
        </div>
      </a>
      <a
        rel="noopener noreferrer"
        href="products/product-details/8"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[8].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[8].description.paragraph1}</p>
        </div>
      </a>
      <a
        rel="noopener noreferrer"
        href="products/product-details/9"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[9].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[9].description.paragraph1}</p>
        </div>
      </a>
      <a
        rel="noopener noreferrer"
        href="products/product-details/10"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[10].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[10].description.paragraph1}</p>
        </div>
      </a>
      <a
        rel="noopener noreferrer"
        href="products/product-details/11"
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 overflow-hidden hidden sm:block"
      >
        <img
          alt="Product Category"
          className="object-cover w-full rounded h-44 dark:bg-gray-500 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="https://source.unsplash.com/random/480x360?6"
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {ProductData[11].name}
          </h3>
          <span className="text-xs dark:text-gray-400">January 26, 2021</span>
          <p className="paragraph">{ProductData[11].description.paragraph1}</p>
        </div>
      </a>
    </>
  );
};

export default CategoryPage;
