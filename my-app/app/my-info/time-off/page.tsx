import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import StatisticCard from "./statisticCard";
import DataTable from "./dataTable";

export default function TimeOff() {
  return (
    <div>
      <div className="md:ml-[575px] md:w-1047 sm:w-360 bg-white">
        <div className="flex pt-12 content-between md:w-1047 sm:w-360 px-4">
          <div className="flex gap-2">
            <span className="pt-1.5">
              <Image src="/time.png" width={16} height={15} alt="time" />
            </span>
            <h2 className="text-darkBlue text-xl font-medium">Time Off</h2>
          </div>
          <div className=" flex gap-6 ml-auto ">
            <div>
              <p className="font-medium text-sm">
                Accrual Level Start Date{" "}
                <span className="text-link">03/09-2020 </span>{" "}
              </p>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="border border-black -mt-4  w-[149px] h-[33px]">
                  Add Time Off Policy
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                Place content for the popover here.
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="border border-gray my-2 mx-4"></div>
        <StatisticCard />
        <div className="px-4 flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="text-darkBlue text-sm font-medium ">
            Upcoming Time Off
          </span>
        </div>
        <div className="border border-gray my-2 mx-4"></div>
        <div className="flex px-4 py-3 gap-3.5 text-sm font-medium">
          <span>
            <Image src="/cross.png" width={30} height={30} alt="cross" />
          </span>

          <div>
            <p className="font-medium">Jan 27</p>
            <p className="flex gap-1">
              <span className="pt-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="font-medium">1 dey of Sick</span>
            </p>
          </div>
        </div>
        <div className="border border-gray my-2 mx-4"></div>
        <div className="flex px-4 py-3 gap-3.5 text-sm">
          <span>
            <Image src="/bank.png" width={30} height={30} alt="bank" />
          </span>
          <div>
            <p className="font-medium">Jul 14</p>
            <p className="font-medium">Independence Day</p>
          </div>
        </div>
        <div className="border border-gray my-2 mx-4"></div>
        <div className="px-4 pt-1.5 flex gap-2">
          <span className="pt-1">
            <Image src="/history.png" width={16} height={16} alt="history" />
          </span>
          <span className="text-darkBlue text-sm font-medium ">History</span>
        </div>
        <div className="px-4 pt-1.5">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
