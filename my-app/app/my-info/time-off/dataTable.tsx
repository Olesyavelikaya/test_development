import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DataTable() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-[256px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Sick</SelectItem>
          <SelectItem value="dark">Sick</SelectItem>
          <SelectItem value="system">Sick </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
