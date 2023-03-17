import React from "react";
import documentationImage from "assets/img/documentation.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFingerprint, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const ProductCatalogSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-slate-600 dark:bg-slate-900">
      <div className="container pb-64 mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="container px-4 pt-48 pb-32 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-12 ml-auto md:w-5/12 md:px-4 z-2">
                <div className="md:pr-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                    <FontAwesomeIcon icon={faFileAlt} className="text-xl dark:text-slate-900" />
                  </div>
                  <h3 className="text-3xl font-bold dark:text-slate-300">
                    Our Product Catalog
                  </h3>
                  <p className="mt-4 text-lg font-semibold leading-relaxed text-slate-500 dark:text-slate-400">
                    Discover the most reliable and innovative heat shrink tubing
                    and electrical insulation products on the market. Browse our
                    catalog now and experience the Stranco Products difference.
                  </p>
                  <ul className="mt-6 list-none">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                            <FontAwesomeIcon icon={faFingerprint} className="dark:text-slate-900" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500 dark:text-slate-400">
                            Built by Developers for Developers
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                            <FontAwesomeIcon className="dark:text-slate-900" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500 dark:text-slate-400">
                            Carefully crafted code for Components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="inline-block px-2 py-1 mr-3 text-xs font-bold uppercase rounded-full text-slate-500 bg-slate-50 dark:bg-sky-500 dark:text-slate-400">
                            <FontAwesomeIcon icon={faPaperPlane} className="dark:text-slate-900" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-slate-500 dark:text-slate-400">
                            Dynamic Javascript Components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-full px-4 pt-24 mr-auto md:w-6/12 md:pt-0 z-2">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-xl"
                  style={{
                    transform:
                      "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                  }}
                  src={documentationImage}
                />
              </div>
              <div className="relative w-full px-4 mt-32 ml-auto mr-auto md:w-4/12">
                <i className="absolute left-auto fab fa-github text-slate-700 -top-[750px] -right-100 opacity-80 text-55"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalogSection;
