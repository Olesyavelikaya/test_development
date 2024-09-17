import React from "react";
import Logo from "./logo";
import NavBar from "./navbar";
import Search from "./search";
import Utilities from "./utilites";

export default function Header() {
  return (
    <header className=" bg-white">
      <div className="flex justify-between m-auto md:w-1440 md:h-86 sm:w-360 sm:h-50">
        <Logo />
        <NavBar />
        <Search />
        <Utilities />
      </div>
    </header>
  );
}
