import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { LandingPageData } from '@/constants';

const Room = () => {
  return (
    <>
      <div className="container w-[70vw] h-[35vw] flex rounded-3xl">
        <div className="img w-1/2 h-full ">
          <div style={{ position: 'relative', width: '500px', height: '100%' }}>
            <Image
              src={"/assets/svg/room.svg"}
              alt="room.svg"
              fill
            />
          </div>
        </div>
        <div className="side w-1/2 h-full flex justify-center flex-col items-center ">
          <span className='m-5 font-extrabold font-serif text-5xl'>{LandingPageData.external.tagline}</span>
          <p className=''>{LandingPageData.external.description}</p>
          <Button variant="secondary" size="lg" className='text-lg font-semibold'>Explore</Button>
        </div>
      </div>
    </>
  )
}

export default Room
