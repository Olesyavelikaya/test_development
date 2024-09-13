import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <>
        <nav>
         <Link href="/Home">Home</Link>   
         <Link href="/My Info">My Info</Link>
         <Link href="/People">People</Link> 
         <Link href="/Hiring">Hiring</Link> 
         <Link href="/Reports">Reports</Link> 
         <Link href="/Files">Files</Link>  
        </nav>
        
        </>
        
);
  }