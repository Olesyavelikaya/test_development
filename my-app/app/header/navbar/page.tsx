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
        <Link href="/home" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/home')}`}>
          Home
        </Link>  
        <Link href="/my-info" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/my-info')}`}>
          My Info
        </Link>
        <Link href="/people" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/people')}`}>
          People
        </Link> 
        <Link href="/hiring" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/hiring')}`}>
          Hiring
        </Link> 
        <Link href="/reports" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/reports')}`}>
          Reports
        </Link> 
        <Link href="/files" className={`px-4 py-4 w-24 h-14 flex items-center justify-center rounded-t-lg ${linkStyle('/files')}`}>
          Files
        </Link>  
      </nav>
    </>
  );
}