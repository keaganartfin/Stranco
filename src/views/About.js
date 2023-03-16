import Footer from "components/Footers/Footer";
import React from "react";
import IndexNavbar from 'components/Navbars/IndexNavbar'

const About = () => {
  return (
    <div>
      <IndexNavbar />

      <div className="max-w-screen-lg mx-auto">
        {/* <!-- header --> */}
        <header className="flex items-center justify-between py-2">
          <a href="/" className="px-2 lg:px-0 font-bold capitalize">
            Tech Blog
          </a>
          <button className="block md:hidden px-2 text-3xl">
            <i className="bx bx-menu"></i>
          </button>
          <ul className="hidden md:inline-flex items-center">
            <li className="px-2 md:px-4">
              <a
                href="/"
                className="text-green-800 font-semibold hover:text-green-600"
              >
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href="/"
                className="text-gray-500 font-semibold hover:text-green-600"
              >
                {" "}
                About{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href="/"
                className="text-gray-500 font-semibold hover:text-green-600"
              >
                {" "}
                Press{" "}
              </a>
            </li>
            <li className="px-2 md:px-4">
              <a
                href="/"
                className="text-gray-500 font-semibold hover:text-green-600"
              >
                {" "}
                Contact{" "}
              </a>
            </li>
            <li className="px-2 md:px-4 hidden md:block">
              <a
                href="/"
                className="text-gray-500 font-semibold hover:text-green-600"
              >
                {" "}
                Login{" "}
              </a>
            </li>
            <li className="px-2 md:px-4 hidden md:block">
              <a
                href="/"
                className="text-gray-500 font-semibold hover:text-green-600"
              >
                {" "}
                Register{" "}
              </a>
            </li>
          </ul>
        </header>
        {/* <!-- header ends here --> */}

        <main className="mt-12">
          {/* <!-- featured section --> */}
          <div className="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* <!-- main post --> */}
            <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
              <img
                src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded-md object-cover w-full h-64"
              />
              <span className="text-green-700 text-sm hidden md:block mt-4">
                {" "}
                Technology{" "}
              </span>
              <h1 className="text-gray-800 dark:text-gray-300 text-4xl font-bold mt-2 mb-2 leading-tight">
                Ignorant branched humanity led now marianne too.
              </h1>
              <p className="text-gray-600 mb-4">
                Necessary ye contented newspaper zealously breakfast he
                prevailed. Melancholy middletons yet understood decisively boy
                law she. Answer him easily are its barton little. Oh no though
                mother be things simple itself. Oh be me, sure wise sons, no.
                Piqued ye of am spirit regret. Stimulated discretion impossible
                admiration in particular conviction up.
              </p>
              <a
                href="./blog.html"
                className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100"
              >
                Read more
              </a>
            </div>

            {/* <!-- sub-main posts --> */}
            <div className="w-full md:w-4/7">
              
            </div>
          </div>
          {/* <!-- end featured section --> */}

          {/* <!-- recent posts --> */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Latest news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 dark:text-gray-300 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300 dark:text-gray-300">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end recent posts --> */}

          {/* <!-- subscribe --> */}
          <div className="rounded flex md:shadow mt-12">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              className="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div className="px-4 py-2">
              <h3 className="text-3xl text-gray-800 dark:text-gray-300 font-bold">
                Subscribe to newsletter
              </h3>
              <p className="text-xl text-gray-700 dark:text-gray-400">
                We sent latest news and posts once in every week, fresh from the
                oven
              </p>
              <form className="mt-4 mb-10">
                <input
                  type="email"
                  className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="john@tech.com"
                />
                <button className="px-4 py-2 rounded bg-green-800 text-gray-100">
                  Subscribe
                  <i className="bx bx-right-arrow-alt"></i>
                </button>
                <p className="text-green-900 dark:text-blue-500 opacity-50 text-sm mt-1">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>
          {/* <!-- ens subscribe section --> */}

          {/* <!-- popular posts --> */}
          <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 className="font-bold text-3xl">Popular news</h2>
            <a className="bg-gray-200 hover:bg-green-200 text-gray-800 dark:text-gray-300 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div className="block space-x-0 lg:flex lg:space-x-6">
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                className="rounded"
                alt="technology"
              />
              <div className="p-4 pl-0">
                <h2 className="font-bold text-2xl text-gray-800 dark:text-gray-300">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p className="text-gray-700 dark:text-gray-400 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="/"
                  className="inline-block py-2 rounded text-green-900 dark:text-blue-500 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end popular posts --> */}
        </main>
        {/* <!-- main ends here --> */}
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-gray-300 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full h-full"
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-gray-300 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-gray-300 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-gray-300 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-gray-300 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 dark:text-gray-300 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
