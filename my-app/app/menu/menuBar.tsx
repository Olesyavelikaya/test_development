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
          href="/my-info/personal"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/personal",
          )}`}
        >
          Personal
        </Link>
        <Link
          href="/my-info/job"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/job",
          )}`}
        >
          Job
        </Link>
        <Link
          href="/my-info/time-off"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/my-info/time-off",
          )}`}
        >
          Time Off
        </Link>
        <Link
          href="/my-info/emergency"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/emergency",
          )}`}
        >
          Emergency
        </Link>
        <Link
          href="/my-info/documents"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/documents",
          )}`}
        >
          Documents
        </Link>
        <Link
          href="/my-info/notes"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/notes",
          )}`}
        >
          Notes
        </Link>
        <Link
          href="/my-info/benefits"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/benefits",
          )}`}
        >
          Benefits
        </Link>
        <Link
          href="/my-info/training"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/training",
          )}`}
        >
          Training
        </Link>
        <Link
          href="/my-info/assets"
          className={`px-4 py-4 w-[90px] h-12 flex items-center justify-center rounded-t-lg ${linkStyle(
            "/assets",
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
