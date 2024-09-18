"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const linkStyle = (path: string) => {
    return pathname.startsWith(path) ? "bg-customBlue" : "bg-inherit";
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center md:p-4 p-o pt-2 ">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`flex flex-col md:flex md:flex-row gap-2.5 text-18 leading-22 pt-8 pb-12 ${isOpen ? "block" : "hidden"} md:block`}
      >
        <Link
          href="/home"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/home")}`}
        >
          Home
        </Link>
        <Link
          href="/my-info"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/my-info")}`}
        >
          My Info
        </Link>
        <Link
          href="/people"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/people")}`}
        >
          People
        </Link>
        <Link
          href="/hiring"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/hiring")}`}
        >
          Hiring
        </Link>
        <Link
          href="/reports"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/reports")}`}
        >
          Reports
        </Link>
        <Link
          href="/files"
          className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle("/files")}`}
        >
          Files
        </Link>
      </nav>
    </>
  );
}
