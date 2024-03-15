import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const Room = () => {
  return (
    <>
      <div className={`md:hidden  container`}>
        
          <div style={{ position: 'relative', width: '400px', height: '400px' }}>
            <Image
              src={"/assets/svg/room.svg"}
              alt="Picture of the author"
              fill
            />
          
        </div>
        <div className="side w-auto h-full flex justify-center flex-col items-center ">
          <h1 className='m-5 font-extrabold font-serif text-6xl'>Explore rooms in the city</h1>
            <Button>Explore</Button>
        </div>
      </div>
    </>
  )
}

export default Room
