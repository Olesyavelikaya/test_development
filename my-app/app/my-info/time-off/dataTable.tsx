import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { datas } from "./data";

export default function DataTable() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="">
          <Select>
            <SelectTrigger className=" w-full h-[33px] md:w-[256px] relative border-gray rounded-lg">
              <SelectValue placeholder="Sick" />
              <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
            </SelectTrigger>
            <SelectContent className="border-gray bg-white">
              <SelectItem value="light">Sick</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-6 w-full justify-between">
          <Select>
            <SelectTrigger className="w-full md:w-[96px] w-[112px] h-[33px] relative border-gray rounded-lg">
              <SelectValue placeholder="All" />
              <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
            </SelectTrigger>
            <SelectContent className="border-gray bg-white">
              <SelectItem value="light">Sick</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full w-[176px] h-[33px] relative border-gray rounded-lg">
              <SelectValue placeholder="Balance History" />
              <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
            </SelectTrigger>
            <SelectContent className="border-gray bg-white">
              <SelectItem value="light">Sick</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="mt-4 mb-16">
        <TableHeader className="bg-customBlue pb-4">
          <TableRow style={{ borderBottom: 'none' }}>
            <TableHead className="w-[100px] whitespace-nowrap">Date</TableHead>
            <TableHead className="pl-12 whitespace-nowrap">Description</TableHead>
            <TableHead className="whitespace-nowrap">Used Days (-)</TableHead>
            <TableHead className="whitespace-nowrap">Earned Days (+)</TableHead>
            <TableHead className="whitespace-nowrap">Balace</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <TableRow key={data.date} className="border-gray border-b-2">
              <TableCell className="font-medium text-sm px-2 py-2 whitespace-nowrap">{data.date}</TableCell>
              <TableCell className="font-medium text-sm pr-2 pl-12 py-2 whitespace-nowrap">{data.description}</TableCell>
              <TableCell className="font-medium text-sm px-2 py-2 whitespace-nowrap">{data.usedDay}</TableCell>
              <TableCell className="font-medium text-sm px-2 py-2 whitespace-nowrap">{data.earnedDay}</TableCell>
              <TableCell className="font-medium text-sm px-2 py-2 whitespace-nowrap">{data.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}