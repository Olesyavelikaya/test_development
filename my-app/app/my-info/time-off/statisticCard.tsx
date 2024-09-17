import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function StatisticCard() {
  return (
    <div className="flex gap-12 my-6 justify-center">
      <div>
        <Card className="w-[264px] h-[138px] border-0 bg-backgroundBody rounded flex flex-col items-center gap-1 py-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">Sick</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-2">
            <span>
              <Image src="/cross.png" width={30} height={30} alt="cross" />
            </span>
            <span className="text-3xl text-darkBlue font-semibold">3</span>
          </CardContent>
          <CardFooter className="p-0 flex flex-col  gap-1">
            <p className="font-semibold text-sm">Days Available</p>
            <p className="text-sm">1 dey scheduled</p>
          </CardFooter>
        </Card>
        <p className="text-sm font-medium text-gray pt-2 text-center">
          Sick Full-Time
        </p>
      </div>

      <div>
        <Card className="w-[264px] h-[138px] border-0 bg-backgroundBody rounded flex flex-col items-center gap-1 py-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">Annual Leave </CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-2">
            <span>
              <Image src="/mount.png" width={30} height={30} alt="mount" />
            </span>
            <span className="text-3xl text-darkBlue font-semibold">10.3</span>
          </CardContent>
          <CardFooter className="p-0">
            <p className="font-semibold text-sm">Days Available</p>
          </CardFooter>
        </Card>
        <p className="text-sm font-medium text-gray pt-2 text-center">
          Sick Full-Time
        </p>
      </div>

      <div>
        <Card className="w-[264px] h-[138px] border-0 bg-backgroundBody rounded flex flex-col items-center gap-1 py-4">
          <CardHeader className="p-0">
            <CardTitle className="text-xl">Comp/in Lieu Time</CardTitle>
          </CardHeader>
          <CardContent className="p-0 flex gap-2">
            <span>
              <Image src="/cross.png" width={30} height={30} alt="cross" />
            </span>
            <span className="text-3xl text-darkBlue font-semibold">0</span>
          </CardContent>
          <CardFooter className="p-0">
            <p className="font-semibold text-sm">Human Used(YTD)</p>
          </CardFooter>
        </Card>
        <p className="text-sm font-medium text-gray pt-2 text-center">
          Comp/in Lieu Time Flexible Policy
        </p>
      </div>
    </div>
  );
}
