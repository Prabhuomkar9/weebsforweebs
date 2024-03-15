import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

const galleryImages: string[] = [
   "/assets/svg/back.svg",
   "/assets/svg/back.svg",
   "/assets/svg/back.svg",
   "/assets/svg/back.svg",
   "/assets/svg/back.svg",
   "/assets/svg/back.svg",

]

const Gallery: FunctionComponent = () => {
   return (
      <Carousel>
         <CarouselContent>
            {
               galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                     <div className='relative'>
                        <Image src={image} alt={image} fill />
                     </div>
                  </CarouselItem>))
            }
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>

   )
}

export default Gallery
