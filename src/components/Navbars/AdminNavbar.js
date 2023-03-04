import Switcher from "contexts/Switcher";
import React, { useState } from "react";

export default function Navbar() {
  const [headerTitle, setHeaderTitle] = useState("All Products");
  return ( 
    <>
      {/* Navbar */}
      <nav className="absolute top-0 right-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-end md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white dark:text-sky-300 text-xl uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            
            {headerTitle}
          </a>
          <div><Switcher /></div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
