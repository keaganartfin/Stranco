import React from "react";
import PropTypes from "prop-types";

const FooterLink = ({ href, children }) => (
  <a
    className="text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-semibold block pb-2 text-sm"
    href={href}
  >
    {children}
  </a>
);

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const FooterCompanyLinks = () => (
  <div className="w-full lg:w-4/12 px-4 ml-auto">
    <span className="block uppercase text-sky-500 dark:text-slate-300 text-sm font-semibold mb-2">
      Company
    </span>
    <ul className="list-unstyled">
      <li>
        <FooterLink href="/">Quality Assurance</FooterLink>
      </li>
      <li>
        <FooterLink href="/">Suppliers</FooterLink>
      </li>
      <li>
        <FooterLink href="/">Industries We Serve</FooterLink>
      </li>
    </ul>
  </div>
);

export default FooterCompanyLinks;
