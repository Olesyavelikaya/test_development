import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from 'next/image';
 
export default function Request() {
  return (
    <>
    <Select>
      <SelectTrigger className="w-[162px] h-[33px] border-black">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Request a Change</SelectLabel>
          <SelectItem value="apple">Lan</SelectItem>
          <SelectItem value="banana">Name</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>

    <Select>
    <SelectTrigger className="w-[56px] h-[33px] border-current">
    <Image 
    src='/settings.png'
    width={16}
    height={16}
    alt="setting"
    />
      <SelectValue placeholder="" />
    </SelectTrigger>
    <SelectContent>
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
    </>
    
  )
}

