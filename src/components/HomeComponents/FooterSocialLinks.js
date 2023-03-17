import React from 'react'
import { FaDribbble, FaFacebookSquare, FaGithub, FaTwitter } from 'react-icons/fa';

function FooterSocialLinks() {
  return (
    <div className="flex justify-center lg:justify-start">
      <button
        className="bg-white dark:bg-slate-900 text-sky-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <FaTwitter />
      </button>
      <button
        className="bg-white dark:bg-slate-900 text-sky-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <FaFacebookSquare />
      </button>
      <button
        className="bg-white dark:bg-slate-900 text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <FaDribbble />
      </button>
      <button
        className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
        type="button"
      >
        <FaGithub />
      </button>
    </div>
  );
}

export default FooterSocialLinks