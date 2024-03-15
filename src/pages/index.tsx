import { Button } from "@/components/ui/button";
import Room from "@/components/room";
import NeighbourHood from "@/components/neighbourHood";


export default function Home() {
  return (
    <div
      className={`h-full w-full mb-20 flex flex-col justify-center items-center`}>
      <Room />
      <NeighbourHood />
    </div>
  );
}
