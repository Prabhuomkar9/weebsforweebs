import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Room from "@/components/room";
import Neighbourhood from "@/components/neighbourhood";


export default function Home() {
  return (
    <div
      className={`h-full w-full flex flex-col justify-center items-center`}>
      <Room />
      <Neighbourhood />
    </div>
  );
}
