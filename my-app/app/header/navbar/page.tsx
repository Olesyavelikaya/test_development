import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <>
        <nav className="gap-2.5 text-18 leading-22 py-12 px-16">
         <Link href="/Home" className="px-4 py-4 ">Home</Link>   
         <Link href="/My Info" className="px-4 py-4 ">My Info</Link>
         <Link href="/People" className="px-4 py-4 ">People</Link> 
         <Link href="/Hiring" className=" px-4 py-4 ">Hiring</Link> 
         <Link href="/Reports" className=" px-4 py-4 ">Reports</Link> 
         <Link href="/Files" className="px-4 py-4 ">Files</Link>  
        </nav>
        
        </>
        
);
  }