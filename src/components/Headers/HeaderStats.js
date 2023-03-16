import React from "react";

// components

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative pt-12 pb-32 bg-sky-600 dark:bg-black dark:bg-opacity-20 md:pt-32">
        <div className="w-full px-4 mx-auto md:px-10">
          <div className="flex flex-row justify-center w-full mb-5 text-center text-gray-700 dark:text-sky-300">
            <p>
              ** These information blocks below can be swapped out for your
              google analytics or any other <br /> information you'd like to
              display for potential clientele **
            </p>
          </div>
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </div>
    </>
  );
}
