import React from "react";
import TestimonialsCard from "../subComponents/TestimonialsCard";

const Section5th: React.FC = () => {
  return (
    <section className="flex justify-center items-center px-4 py-10 sm:py-14 relative">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-8 relative">
        {/* Heading */}
        <h2 className="font-[Mansfield] font-medium text-[1.8rem] sm:text-[2.25rem] text-[#1E1E1E] capitalize text-center mt-5 leading-snug">
          Our trusted supporters
        </h2>

        {/* Cards Wrapper */}
        <div className="relative w-full flex justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Cards Row */}
          <div className="flex flex-wrap justify-center items-center gap-6 w-full">
            <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-[26px] shadow-[0px_4px_15px_0px_#00000033] flex flex-col items-center justify-center p-5">
              <TestimonialsCard />
            </div>
            <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-[26px] shadow-[0px_4px_15px_0px_#00000033] flex flex-col items-center justify-center p-5">
              <TestimonialsCard />
            </div>
            <div className="w-full sm:w-[300px] md:w-[350px] bg-white rounded-[26px] shadow-[0px_4px_15px_0px_#00000033] flex flex-col items-center justify-center p-5">
              <TestimonialsCard />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section5th;
