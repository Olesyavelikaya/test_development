import AvatarMain from "./avatar/page";
import PersonName from "./name/page";
import Request from "./request/page";
import MenuBar from "./menuBar/page";


export default function Menu() {
    return (
        <div className="bg-customBlue">
            <div className="flex m-auto md:w-1440 sm:w-360 md:h-190 sm:h-157">
                <div className="pt-8 pl-28">
                 <AvatarMain />    
                </div>
                <div className=" ml-20 w-1047 flex flex-col">
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
    )
}