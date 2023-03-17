import React from 'react';
import { Link } from 'react-router-dom';
import HeatShrinkTubing from './HeatShrinkTubing';

const IndexDropdown = () => {
  const products = [
    { id: 'all', name: 'All Products', path: '/products/' },
    { id: '1', name: 'Non-Heat Shrink Tubing', path: '/products/product-details/1' },
    { id: '2', name: 'Wire and Cable', path: '/products/product-details/2' },
    { id: '3', name: 'Marking Systems', path: '/products/product-details/3' },
    { id: '7', name: 'Heat Shrink Molded Parts', path: '/products/product-details/7' },
    { id: '8', name: 'Solder Sleeves and Devices', path: '/products/product-details/8' },
    { id: '9', name: 'Cable Ties', path: '/products/product-details/9' },
    { id: '10', name: 'Adhesive Systems', path: '/products/product-details/10' },
  ];

  const linkClasses = `block w-full py-2 px-4 whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold`;

  return (
    <div className="relative inline-block group z-10">
      <button
        type="button"
        className="py-2 pl-4 flex items-center w-full outline-none whitespace-nowrap bg-transparent dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 font-semibold uppercase focus:outline-none"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <span className="pr-1 ml-1 font-bold flex-1">Products</span>
        <span>
          <svg
            className="fill-current h-5 w-5 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </button>
      <ul
        className="bg-white dark:bg-slate-800 shadow-lg rounded transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        {products.map((product) => (
          <li key={product.id} className="rounded-sm px-3 py-1">
            <Link to={product.path} className={linkClasses}>
              {product.name}
            </Link>
          </li>
        ))}
        <HeatShrinkTubing />
      </ul>
    </div>
  );
};

export default IndexDropdown;
