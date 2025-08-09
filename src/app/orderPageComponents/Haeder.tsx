import React, { useEffect, useState } from "react";
import { useFilter } from "@/context/FilterContext";
import { woods as section1Woods } from "./Section1";
import { woods as section2Woods } from "./Section2";
import { woods as section3Woods } from "./Section3";
import { woods as section4Woods } from "./Section4";
import { woods as section7Woods } from "./Section7";

const Header = () => {
  const {
    isCladdingChecked,
    setIsCladdingChecked,
    isDeckingChecked,
    setIsDeckingChecked,
  } = useFilter();

  const deckingSampleCount =
    section1Woods.length +
    section2Woods.length +
    section3Woods.length +
    section4Woods.length;
  const claddingSampleCount = section7Woods.length;

  const visibleDeckingSamples = isDeckingChecked ? deckingSampleCount : 0;
  const visibleCladdingSamples = isCladdingChecked ? claddingSampleCount : 0;

  const showNoSelectionMessage = !isDeckingChecked && !isCladdingChecked;

  const [screenSize, setScreenSize] = useState("large");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) setScreenSize("small");
      else if (width <= 1024) setScreenSize("medium");
      else setScreenSize("large");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`bg-[#efcfac] flex items-center justify-center relative ${
        screenSize === "small" ? "min-h-[60vh]" : "min-h-[70vh]"
      }`}
    >
      {/* Breadcrumb */}
      <div
        className={`absolute text-black flex flex-wrap gap-1 ${
          screenSize === "small"
            ? "top-2 left-2 text-[12px]"
            : "top-5 left-5 text-[14px]"
        }`}
      >
        <a href="" className="text-black">
          Home
        </a>{" "}
        /{" "}
        <a href="" className="text-black">
          Start a product
        </a>{" "}
        /{" "}
        <a href="" className="text-black">
          Planning
        </a>{" "}
        /{" "}
        <a href="" className="text-black">
          Order free sample
        </a>
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col items-center justify-center text-black z-20 ${
          screenSize === "small"
            ? "pt-[60px] px-2 pb-5"
            : screenSize === "medium"
            ? "py-[100px] px-5"
            : "py-[120px]"
        }`}
      >
        <h1
          className={`font-medium text-center mb-2 ${
            screenSize === "small"
              ? "text-[28px]"
              : screenSize === "medium"
              ? "text-[36px]"
              : "text-[48px]"
          }`}
        >
          Order Free Decking & Cladding Samples
        </h1>
        <p
          className={`leading-relaxed text-center mb-2 ${
            screenSize === "small"
              ? "text-[14px] max-w-[90%]"
              : screenSize === "medium"
              ? "text-[16px] max-w-[800px]"
              : "text-[18px] max-w-[800px]"
          }`}
        >
          Get up to 3 free samples of Millboard composite decking or cladding.
          All sample packs are delivered free of charge with a complimentary
          Millboard brochure if requested.
        </p>
        <p
          className={`text-center font-semibold mb-5 ${
            screenSize === "small"
              ? "text-[14px] font-medium"
              : screenSize === "medium"
              ? "text-[16px]"
              : "text-[18px]"
          }`}
        >
          Simply Select the samples you would like by clicking on them.
        </p>

        {/* Filters */}
        <div
          className={`w-full bg-[#d3a069] flex items-center justify-center text-center flex-wrap ${
            screenSize === "small"
              ? "gap-[10px] p-[10px]"
              : screenSize === "medium"
              ? "gap-[20px] p-[15px]"
              : "gap-[20px] py-[30px] px-2"
          }`}
        >
          <span
            className={`font-bold text-white ${
              screenSize === "small"
                ? "text-[16px]"
                : screenSize === "medium"
                ? "text-[20px]"
                : "text-[24px]"
            }`}
          >
            Filters:
          </span>

          {/* Cladding */}
          <label
            htmlFor="cladding"
            className={`font-bold text-white flex items-center gap-2 cursor-pointer ${
              screenSize === "small"
                ? "text-[16px]"
                : screenSize === "medium"
                ? "text-[20px]"
                : "text-[24px]"
            }`}
          >
            <span
              className={`bg-[#5c4a36] flex items-center justify-center ${
                screenSize === "small" ? "w-6 h-6" : "w-[30px] h-[30px]"
              }`}
            >
              {isCladdingChecked && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            CLADDING
            <input
              id="cladding"
              type="checkbox"
              checked={isCladdingChecked}
              onChange={() => setIsCladdingChecked(!isCladdingChecked)}
              className="absolute opacity-0"
            />
          </label>

          {/* Decking */}
          <label
            htmlFor="decking"
            className={`font-bold text-white flex items-center gap-2 cursor-pointer ${
              screenSize === "small"
                ? "text-[16px]"
                : screenSize === "medium"
                ? "text-[20px]"
                : "text-[24px]"
            }`}
          >
            <span
              className={`bg-[#5c4a36] flex items-center justify-center ${
                screenSize === "small" ? "w-6 h-6" : "w-[30px] h-[30px]"
              }`}
            >
              {isDeckingChecked && (
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            DECKING
            <input
              id="decking"
              type="checkbox"
              checked={isDeckingChecked}
              onChange={() => setIsDeckingChecked(!isDeckingChecked)}
              className="absolute opacity-0"
            />
          </label>
        </div>

        {/* Sample count */}
        <p
          className={`text-center mt-4 mb-2 ${
            screenSize === "small" ? "text-[14px]" : "text-[16px]"
          }`}
        >
          Showing {visibleDeckingSamples} Decking Samples and{" "}
          {visibleCladdingSamples} Cladding Samples
        </p>

        <p
          className={`font-semibold text-center mb-5 ${
            screenSize === "small"
              ? "text-[20px]"
              : screenSize === "medium"
              ? "text-[28px]"
              : "text-[32px]"
          }`}
        >
          Select 3 Samples
        </p>

        {showNoSelectionMessage && (
          <div className="text-[14px] text-center text-black p-2">
            Please select at least one category (Decking or Cladding) to view
            samples.
          </div>
        )}
      </div>

      {/* Decorative SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 w-full h-auto block z-[1]"
      >
        <path
          className="fill-black"
          d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,192C672,160,768,96,864,64C960,32,1056,32,1152,64C1248,96,1344,160,1392,192L1440,224L1440,320L0,320Z"
        />
        <path
          className="fill-white drop-shadow-md"
          d="M0,150L48,160.7C96,171,192,193,288,203.3C384,214,480,214,576,182C672,150,768,86,864,54C960,22,1056,22,1152,54C1248,86,1344,150,1392,182L1440,214L1440,320L0,320Z"
        />
      </svg>
    </header>
  );
};

export default Header;
