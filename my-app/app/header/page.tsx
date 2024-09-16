import React from "react";
import Logo from "./logo/page";
import NavBar from "./navbar/page";
import Search from "./search/page";
import Utilities from "./utilities/page";


export default function Header() {
    return (
        <header className="flex justify-between">
            <div className="py-8 pl-7">
             <Logo />   
            </div>
        
        <div className="flex">
         <NavBar />
        <Search />
        <Utilities />    
        </div>
       
        </header>
    )
}