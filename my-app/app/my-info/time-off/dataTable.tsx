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
    <div className="flex justify-between">
    <div className="flex gap-6">
      <Select>
      <SelectTrigger className="w-[256px] h-[33px] relative border-gray rounded-lg">
    <SelectValue placeholder="Sick" />
    <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
        </SelectTrigger>
        <SelectContent  className="border-gray bg-white">
          <SelectItem value="light">Sick</SelectItem>
        </SelectContent>
      </Select>
      <Select>
      <SelectTrigger className="w-[96px] h-[33px] relative border-gray rounded-lg">
    <SelectValue placeholder="All" />
    <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
        </SelectTrigger>
        <SelectContent className="border-gray bg-white">
          <SelectItem value="light">Sick</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Select>
      <SelectTrigger className="w-[176px] h-[33px] relative border-gray rounded-lg ml-auto">
    <SelectValue placeholder="Balance History" />
    <div className="absolute right-0 top-0 h-full w-10 bg-customBlue rounded-r-lg"></div>
        </SelectTrigger>
        <SelectContent  className="border-gray bg-white">
          <SelectItem value="light">Sick</SelectItem>
        </SelectContent>
      </Select>
    </div>
    <Table className="mt-4 mb-16">
  <TableHeader className=" bg-customBlue pb-4">
    <TableRow style={{ borderBottom: 'none' }}>
      <TableHead className="w-[100px] ">Date</TableHead>
      <TableHead>Description</TableHead>
      <TableHead>Used Days (-)</TableHead>
      <TableHead>Earned Days (+)</TableHead>
      <TableHead className="">Balace</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {datas.map((data) => (
      <TableRow key={data.date} className="border-gray border-b-2 ">
        <TableCell className="font-medium text-sm px-2 py-2">{data.date}</TableCell>
        <TableCell className="font-medium text-sm px-2 py-2">{data.description}</TableCell>
        <TableCell className="font-medium text-sm px-2 py-2">{data.usedDay}</TableCell>
        <TableCell className="font-medium text-sm px-2 py-2">{data.earnedDay}</TableCell>
        <TableCell className="font-medium text-sm px-2 py-2">{data.balance}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

     </>
  );
}
