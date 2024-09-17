import AvatarMain from "./avatar";
import PersonName from "./name";
import Request from "./request";
import MenuBar from "./menuBar";
import InfoMe from "./infoMe";

export default function Menu() {
  return (
    <div className="bg-customBlue z-0 relative">
      <div className="flex m-auto md:w-1440 sm:w-360 md:h-190 sm:h-157">
        <div className="mt-8 ml-20 relative z-0">
          <div className="pl-8">
            <AvatarMain />
          </div>
          <InfoMe />
        </div>
        <div className="ml-8 w-1047 flex flex-col">
          <div className="flex pt-[76px]">
            <div className="">
              <PersonName />
            </div>
            <div className="ml-auto flex flex-row  gap-4">
              <Request />
            </div>
          </div>
          <div>
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
}
