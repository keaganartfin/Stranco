
import { useParams } from "react-router-dom";
import { SpecificProductInfo, SubProductInfo } from "data/SpecificProductInfo";

const ProductCategories = () => {
  // math.random to get random other products (but not the parent one)
  const dataP = { SpecificProductInfo };
  const ProductData = dataP.SpecificProductInfo;
  return (
    <section className="py-6 sm:py-12 pt-16">
      <div className="container p-6 mx-auto space-y-8 w-full px-4 mr-auto ml-auto mb-0">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-600 dark:text-sky-500">Check Out Our Products...</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col bg-gray-200 dark:bg-slate-800 dark:text-gray-100 rounded-xl">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-xl"
                src="https://source.unsplash.com/200x200/?fashion?1"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs tracking-wider uppercase hover:underline text-sky-500 dark:text-violet-400"
              >
                Stranco Products
              </a>
              <h3 className="flex-1 py-2 text-xl font-semibold leading-snug">
                {ProductData[6].name}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 1, 2020</span>
                <span>2.1K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-200 dark:bg-slate-800 dark:text-gray-100 rounded-xl">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-xl"
                src="https://source.unsplash.com/200x200/?fashion?2"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs tracking-wider uppercase hover:underline text-sky-500 dark:text-violet-400"
              >
                Stranco Products
              </a>
              <h3 className="flex-1 py-2 text-xl font-semibold leading-snug">
                {ProductData[7].name}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 2, 2020</span>
                <span>2.2K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-200 dark:bg-slate-800 dark:text-gray-100 rounded-xl">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-xl"
                src="https://source.unsplash.com/200x200/?fashion?3"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs tracking-wider uppercase hover:underline text-sky-500 dark:text-violet-400"
              >
                Stranco Products
              </a>
              <h3 className="flex-1 py-2 text-xl font-semibold leading-snug">
                {ProductData[2].name}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 3, 2020</span>
                <span>2.3K views</span>
              </div>
            </div>
          </article>
          <article className="flex flex-col bg-gray-200 dark:bg-slate-800 dark:text-gray-100 rounded-xl">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                className="object-cover w-full h-52 dark:bg-gray-500 rounded-t-xl"
                src="https://source.unsplash.com/200x200/?fashion?4"
              />
            </a>
            <div className="flex flex-col flex-1 p-6">
              
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs tracking-wider uppercase hover:underline text-sky-500 dark:text-violet-400"
              >
                Stranco Products
              </a>
              <h3 className="flex-1 py-2 text-xl font-semibold leading-snug overflow-hidden paragraph">
                {ProductData[11].name}
              </h3>
              <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                <span>June 4, 2020</span>
                <span>2.4K views</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
