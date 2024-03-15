import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { landingPageData } from '@/constants';
import Link from 'next/link';

const Room = () => {
  return (
    <>
      <div className="w-full md:h-[80vh] flex flex-row justify-center items-center gap-5">
        <div className='relative h-4/5 aspect-square'>
          <Image
            src={"/assets/svg/room.svg"}
            alt="room.svg"
            fill
          />
        </div>
        <div className="w-1/3 h-full flex justify-center flex-col items-center gap-10">
          <span className='leading-normal font-extrabold font-serif text-6xl'>{landingPageData.external.tagline}</span>
          <p className='leading-relaxed text-wrap text-lg'>{landingPageData.external.description}</p>
          <Link href="/rooms"><Button variant="secondary" size="lg" className='text-lg font-semibold'>Explore Rooms</Button></Link>
        </div>
      </div>
    </>
  )
}

export default Room
