import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import Dummy from "@/components/dummy";


export default function Home() {
  return (
    <div
      className={`h-full w-full flex flex-col gap-5 justify-center items-center`}>
        <Dummy></Dummy>
      <Button onClick={
        () => {
          toast("Hello World");
        }
      }>Click Me</Button>
    </div>
  );
}
