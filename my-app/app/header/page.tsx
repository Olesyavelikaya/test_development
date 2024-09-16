import React from "react";
import Logo from "./logo/page";
import NavBar from "./navbar/page";
import Search from "./search/page";
import Utilities from "./utilities/page";


export default function Header() {
    return (
        <header className="flex justify-between m-auto md:w-1440 md:h-86 sm:w-360 sm:h-50">
         <Logo />  
         <NavBar />
        <Search />
        <Utilities />    
        </header>
    )
}