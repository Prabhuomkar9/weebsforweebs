import { Button } from "@/components/ui/button";
import Room from "@/components/room";
import Neighbourhood from "@/components/neighbourhood";
import MobileRoom from "@/components/room/MobileRoom";
import MobileNeigh from "@/components/neighbourhood/MobileNeigh";


export default function Home() {
  return (
    <div
      className={`h-full w-full flex flex-col justify-center items-center `}>
        <Room/>
        <MobileRoom/>
        <Neighbourhood/>
        <MobileNeigh/>
    </div>
  );
}
