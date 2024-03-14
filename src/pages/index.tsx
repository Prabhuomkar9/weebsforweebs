import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";



export default function Home() {
  return (
    <div
      className={`h-full w-full flex flex-col gap-5 justify-center items-center`}>
       
      <Button onClick={
        () => {
          toast("Hello World");
        }
      }>Click Me</Button>
    </div>
  );
}
