import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const Room = () => {
  return (
    <>
      <div className="container w-[70vw] h-[35vw] bg-[#7441c2] flex rounded-3xl">
        <div className="img w-1/2 h-full ">
          <div style={{ position: 'relative', width: '500px', height: '100%' }}>
            <Image
              src={"/assets/svg/room.svg"}
              alt="Picture of the author"
              fill
            />
          </div>
        </div>
        <div className="side w-1/2 h-full flex justify-center flex-col items-center ">
          <h1 className='m-5 font-extrabold font-serif text-6xl'>Explore rooms in the city</h1>
            <Button>Explore</Button>
        </div>
      </div>
    </>
  )
}

export default Room
