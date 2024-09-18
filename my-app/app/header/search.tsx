import React from "react";
import { Input } from "@/components/ui/input";

export default function Search() {
  return (
    <div className="md:pt-8 pt-px md:pr-6 pr-0 relative">
      <Input
        type="Search"
        placeholder="Search"
        className="md:pl-10 md:pr-4 md:py-2 w-full md:w-365 md:h-38 w-[48px] h-[32px] py-2 pl-8 pr-4 border-black rounded-xl "
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6 absolute left-3 md:top-[50px] top-[16px]  md:left-2 transform -translate-y-1/2 w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
}