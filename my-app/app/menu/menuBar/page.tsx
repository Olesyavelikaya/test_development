"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function MenuBar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => {
    return pathname === path ? "bg-white" : "bg-customBlue";
  };

  return (
    <>
      <nav className="flex justify-between gap-4 font-medium text-sm leading-22 pt-8 pb-12">
        <Link
          href="/Personal"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Personal"
          )}`}
        >
          Personal
        </Link>
        <Link
          href="/Job"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Job"
          )}`}
        >
          Job
        </Link>
        <Link
          href="/TimeOff"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/TimeOff"
          )}`}
        >
          Time Off
        </Link>
        <Link
          href="/Emergency"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Emergency"
          )}`}
        >
          Emergency
        </Link>
        <Link
          href="/Documents"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Documents"
          )}`}
        >
          Documents
        </Link>
        <Link
          href="/Notes"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Notes"
          )}`}
        >
          Notes
        </Link>
        <Link
          href="/Benefits"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Benefits"
          )}`}
        >
          Benefits
        </Link>
        <Link
          href="/Training"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Training"
          )}`}
        >
          Training
        </Link>
        <Link
          href="/Assets"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/Assets"
          )}`}
        >
          Assets
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-[90px] h-12 px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </>
  );
}
