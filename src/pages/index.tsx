import { Button } from "@/components/ui/button";
import Room from "@/components/room";
import NeighbourHood from "../components/neighbourHood";
import MobileRoom from "@/components/room/MobileRoom";
import MobileNeigh from "@/components/neighbourHood/MobileNeigh";


export default function Home() {
  return (
    <div
      className={`h-full w-full flex flex-col justify-center items-center `}>
      <Room />
      <MobileRoom />
      <NeighbourHood />
      <MobileNeigh />
    </div>
  );
}
