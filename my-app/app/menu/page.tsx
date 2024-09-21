import AvatarMain from "./avatar";
import PersonName from "./name";
import Request from "./request";
import MenuBar from "./menuBar";
import InfoMe from "./infoMe";
import ApolloClientProvider from '../apollo/apolloProvider';

export default function Menu() {
  return (
    <ApolloClientProvider> 
    <div className="bg-customBlue z-0 relative">
      <div className="flex m-auto md:w-1440 w-360 md:h-190 h-157">
        <div className="md:mt-8 md:ml-20 md:relative md:z-0 mt-0 ml-0">
          <div className="md:ml-16 ml-6 md:w-[150px] w-[60px] pt-[21px] md:pt-0">
            <AvatarMain />
          </div>
          <InfoMe />
        </div>
        <div className="md:ml-8 md:w-1047 w-[350px] -ml-20 md:-ml-0 flex flex-col">
          <div className="flex md:pt-[76px] pt-[21px]">
            <div className="md:pl-0 pl-24">
              <PersonName />
            </div>
            <div className="ml-auto flex flex-row gap-4">
              <Request />
            </div>
          </div>
          <div className=" md:ml-0 md:-mt-[47px] -mt-0">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
    </ApolloClientProvider>
  );
}