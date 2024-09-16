"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => {
    return pathname === path ? 'bg-customBlue' : 'bg-inherit';
  };
  return (
    <>
      <nav className="flex gap-2.5 text-18 leading-22 pt-8 pb-12">
        <Link href="/Home" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/Home')}`}>
          Home
        </Link>  
        <Link href="/my-info" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/my-info')}`}>
          My Info
        </Link>
        <Link href="/People" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/People')}`}>
          People
        </Link> 
        <Link href="/Hiring" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/Hiring')}`}>
          Hiring
        </Link> 
        <Link href="/Reports" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/Reports')}`}>
          Reports
        </Link> 
        <Link href="/Files" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/Files')}`}>
          Files
        </Link>  
      </nav>
    </>
  );
}