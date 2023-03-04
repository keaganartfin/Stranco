import React, { useState } from "react";

const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* :SMALL BURGER ICON */}
      <button
        className="mx-8 w-16 h-16 overflow-hidden text-green-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative block w-full h-full">
          {/* ::Svg definition */}
          <svg className="absolute w-16 h-16">
            <defs>
              <filter id="gooeyness">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2.2"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                  result="gooeyness"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="gooeyness"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
          {/* ::Burger */}
          <svg
            className="absolute w-16 h-16 stroke-current"
            filter="url(#gooeyness)"
            version="1.1"
            viewBox="0 0 100 100"
          >
            {/* Path 1 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "1 40" : "40 40"}`}
              strokeDashoffset={`${isOpen ? "-33px" : "0px"}`}
              d="M 30,35 H 70 "
            />
            {/* Path 2 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "5 39" : "21 39"}`}
              strokeDashoffset={`${isOpen ? "-37px" : "0px"}`}
              d="M 50,50 H 30 L 34,32"
            />
            {/* Path 3 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "5 39" : "21 39"}`}
              strokeDashoffset={`${isOpen ? "-37px" : "0px"}`}
              d="M 50,50 H 70 L 66,68"
            />
            {/* Path 4 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "1 40" : "40 40"}`}
              strokeDashoffset={`${isOpen ? "-33px" : "0px"}`}
              d="M 30,65 H 70 "
            />
          </svg>
          {/* ::Cross X */}
          <svg
            className="absolute w-16 h-16 stroke-current transition-all delay-50 duration-300"
            style={{ transform: `${isOpen ? "scale(1)" : "scale(0)"}` }}
            version="1.1"
            viewBox="0 0 100 100"
          >
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-200"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"
                }`,
              }}
              d="M 34,32 L 66,68"
            />
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-200"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"
                }`,
              }}
              d="M 66,32 L 34,68"
            />
          </svg>
        </span>
      </button>

      {/* :BIG BURGER ICON */}
      <button
        className="mx-8 w-24 h-24 overflow-hidden text-yellow-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="relative block w-full h-full">
          {/* ::Svg definition */}
          <svg className="absolute w-24 h-24">
            <defs>
              <filter id="gooeyness">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2.2"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                  result="gooeyness"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="gooeyness"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>
          {/* ::Burger */}
          <svg
            className="absolute w-24 h-24 stroke-current"
            filter="url(#gooeyness)"
            version="1.1"
            viewBox="0 0 100 100"
          >
            {/* Path 1 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "1 40" : "40 40"}`}
              strokeDashoffset={`${isOpen ? "-33px" : "0px"}`}
              d="M 30,35 H 70 "
            />
            {/* Path 2 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "5 39" : "21 39"}`}
              strokeDashoffset={`${isOpen ? "-37px" : "0px"}`}
              d="M 50,50 H 30 L 34,32"
            />
            {/* Path 3 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "5 39" : "21 39"}`}
              strokeDashoffset={`${isOpen ? "-37px" : "0px"}`}
              d="M 50,50 H 70 L 66,68"
            />
            {/* Path 4 */}
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-100"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 400ms 100ms, stroke-dashoffset 400ms 100ms"
                }`,
              }}
              strokeDasharray={`${isOpen ? "1 40" : "40 40"}`}
              strokeDashoffset={`${isOpen ? "-33px" : "0px"}`}
              d="M 30,65 H 70 "
            />
          </svg>
          {/* ::Cross X */}
          <svg
            className="absolute w-24 h-24 stroke-current transition-all delay-50 duration-300"
            style={{ transform: `${isOpen ? "scale(1)" : "scale(0)"}` }}
            version="1.1"
            viewBox="0 0 100 100"
          >
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-200"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"
                }`,
              }}
              d="M 34,32 L 66,68"
            />
            <path
              className={`stroke-current stroke-6 transition-transform duration-300 ${
                isOpen ? "" : "delay-200"
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transformOrigin: "50%",
                transition: `${
                  isOpen
                    ? "stroke-dasharray 400ms, stroke-dashoffset 400ms"
                    : "stroke-dasharray 300ms 200ms, stroke-dashoffset 300ms 200ms"
                }`,
              }}
              d="M 66,32 L 34,68"
            />
          </svg>
        </span>
      </button>
    </>
  );
};

export default BurgerIcon;
