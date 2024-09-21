"use client";

import React from "react";
import ApolloClientProvider from '../apollo/apolloProvider';
import { useAuthStore } from "../store/userAuthStore";
import Logo from "./logo";
import NavBar from "./navbar";
import Search from "./search";
import Utilities from "./utilites";


export default function Header() {
   const access_token = useAuthStore((state) => state.access_token)
   console.log(access_token)
  return (
    <>
      {access_token && (
        <ApolloClientProvider>
        <header className=" bg-white">
          <div className="flex justify-between md:m-auto md:w-1440 md:h-86 w-360 h-50 py-1.5 px-6 md:py-0 ">
            <Logo />
            <div className="flex flex-row sm:space-x-4 md:gap-10 gap-8">
              <div className="sm:order-2 order-1">
                <Search />
              </div>
              <div className="order-2 sm:order-1">
                <NavBar />
              </div>
            </div>
            <Utilities />
          </div>
        </header>
        </ApolloClientProvider>
      )}
    </>
  );
}
