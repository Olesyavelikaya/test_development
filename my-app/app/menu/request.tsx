"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

export default function Request() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className="md:hidden flex justify-between items-center md:p-4 p-o pt-2 ">
        <button onClick={() => setIsOpen(!isOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
</svg>
        </button>
        </div>
      <div className={`flex flex-col md:flex md:flex-row gap-2.5 text-18 leading-22 pt-8 pb-12 ${isOpen ? "block" : "hidden"} md:block`}>
      <Select>
        <SelectTrigger className="w-[162px] h-[33px] border-black">
          <SelectValue placeholder="Request a Change" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel></SelectLabel>
            <SelectItem value="apple">Lan</SelectItem>
            <SelectItem value="banana">Name</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[56px] h-[33px] border-current">
          <Image src="/settings.png" width={16} height={16} alt="setting" />
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      </div>
    </>
  );
}
