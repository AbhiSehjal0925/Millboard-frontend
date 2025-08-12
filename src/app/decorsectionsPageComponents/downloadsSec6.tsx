import React from "react";
import Link from "next/link";

export default function DownloadsSection() {
  const downloads = [
    { href: "/downloads/wind-resistance-report.pdf", label: "Wind Resistance Report" },
    { href: "/downloads/wind-resistance-report-2.pdf", label: "Wind Resistance Report 2" },
  ];

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-gray-900 font-medium text-[clamp(24px,4vw,52px)] mb-12">
          Downloads
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {downloads.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              download
              className="flex items-center gap-3 border-[5px] border-[#F5D8B5] bg-white text-black font-semibold py-1 pr-10 pl-1 rounded-full hover:bg-[#F3E0CE] transition-colors"
            >
              <div className="w-[70px] h-[70px] bg-[#EFCFAC] rounded-full flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  className="w-[34px] h-[34px]"
                >
                  <rect
                    x="1.58194"
                    y="0.861242"
                    width="29.0156"
                    height="29.0156"
                    stroke="#EFCFAC"
                    strokeWidth="1.26155"
                  />
                  <path
                    d="M24.9204 11.5849H19.8743V4.01562H12.305V11.5849H7.25879L16.0896 20.4157L24.9204 11.5849ZM7.25879 22.9388V25.4619H24.9204V22.9388H7.25879Z"
                    fill="black"
                  />
                </svg>
              </div>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
