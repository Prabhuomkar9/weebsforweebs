import { NextPage } from 'next'
import React from 'react'
import { eventData } from '@/constants/temporary'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

const Events: NextPage = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start py-10 items-center gap-10'>
      <h1 className='text-5xl font-bold'>Events</h1>
      <div className='flex flex-col justify-center items-center gap-3'>
        <ScrollArea >
          <div className='flex flex-col flex-wrap justify-center items-center gap-10' >
            {eventData.map((event, idx) => {
              return (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-col justify-center items-center gap-3'>
                    <div className='relative max-w-screen-md w-screen aspect-video flex justify-center items-center flex-col'>
                      <Image fill src={`${event.image}`} alt={event.name} />
                    </div>
                    <div className='flex flex-col w-full h-1/2'>
                      <p>{event.date}</p>
                      <p>{event.loc}</p>
                    </div>
                  </CardContent>
                  <CardFooter className='self-end'>
                    <p>{event.createdBy}</p>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}

export default Events
