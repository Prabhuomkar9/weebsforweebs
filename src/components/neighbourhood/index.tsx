import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { landingPageData } from '@/constants'
import Link from 'next/link'
import { toast } from 'sonner'

const NeighbourHood = () => {
  return (
    <div className="w-full md:h-[80vh] flex flex-row justify-center items-center gap-5">
      <div className="w-1/3 h-full flex justify-center flex-col items-center gap-10">
        <span className='leading-normal font-extrabold font-serif text-6xl'>{landingPageData.internal.tagline}</span>
        <p className='leading-relaxed text-wrap text-lg'>{landingPageData.internal.description}</p>
        <div className='w-full flex flex-row justify-around items-center'>
          <Link href="/gallery">
            <Button variant="secondary" size="lg" className='text-lg font-semibold'>View Gallery</Button>
          </Link>
          <Link href="/issues">
            <Button variant="secondary" size="lg" className='text-lg font-semibold'>Raise Issue</Button>
          </Link>
        </div>
      </div>
      <div className='relative h-4/5 aspect-square'>
        <Image className="absolute z-50 animate-happy-jump"
          src={"/assets/svg/landingInternalLeft.svg"}
          alt="leftGuy"
          fill
        />
        <Image className="absolute z-50 animate-happy-jump delay-300"
          src={"/assets/svg/landingInternalMiddle.svg"}
          alt="rightGirl"
          fill
        />
        <Image className="absolute z-50 animate-happy-jump delay-300"
          src={"/assets/svg/landingInternalRight.svg"}
          alt="rightGuy"
          fill
        />
        <Image className="absolute -z-50"
          src={"/assets/svg/landingInternalBG.svg"}
          alt="background"
          fill
        />
      </div>
    </div>
  )
}

export default NeighbourHood
