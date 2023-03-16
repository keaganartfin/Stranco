import React from 'react'

const InformationSection = () => {
  return (
    <>
      <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="px-12 ml-auto mr-auto -mt-32 w-12/12 md:w-6/12 lg:w-4/12 md:px-4">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-lg dark:bg-slate-900">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 block w-full h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="fill-current text-sky-500"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold dark:text-slate-300">
                    Great for your awesome project
                  </h4>
                  <p className="mt-2 font-bold text-md text-slate-500 dark:text-slate-400">
                    Putting together a page has never been easier than matching
                    together pre-made components. From landing pages
                    presentation to login areas, you can easily customise and
                    built your pages.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full px-4 md:w-6/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                        <i className="fas fa-sitemap dark:text-slate-900"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-bold dark:text-slate-300">
                        CSS Components
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                        <i className="fas fa-drafting-compass dark:text-slate-900"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-bold dark:text-slate-300">
                        JavaScript Components
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        We also feature many dynamic components for React,
                        NextJS, Vue and Angular.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                        <i className="fas fa-newspaper dark:text-slate-900"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-bold dark:text-slate-300">
                        Pages
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        This extension also comes with 3 sample pages. They are
                        fully coded so you can start working instantly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="flex-auto px-4 py-5">
                      <div className="inline-flex items-center justify-center w-12 h-12 p-3 mb-5 text-center bg-white rounded-full shadow-lg text-slate-500 dark:bg-slate-300">
                        <i className="fas fa-file-alt dark:text-slate-900"></i>
                      </div>
                      <h6 className="mb-1 text-xl font-bold dark:text-slate-300">
                        Documentation
                      </h6>
                      <p className="mb-4 font-semibold text-slate-500">
                        Built by developers for developers. You will love how
                        easy is to to work with Notus React.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default InformationSection