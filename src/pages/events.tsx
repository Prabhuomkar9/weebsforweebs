import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Event } from '@/types'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import CreateEvent from '@/components/createEvent'

const Events: NextPage = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/event", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => {
        res.json().then((data) => {
          setEvents(data.events as Event[])
        })
      })
      .catch((err) => {
        console.log(err)
      }
      )
  })

  return (
    <div className='w-full h-full flex flex-col justify-start py-10 items-center gap-10'>
      <h1 className='text-5xl font-bold'>Events</h1>
      <Dialog>
        <DialogTrigger className='border rounded-md border-slate-200 p-2'>Create Event</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
            <DialogDescription className='pt-6'>
              <CreateEvent />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <div className='flex flex-col justify-center items-center gap-3'>
        <ScrollArea >
          <div className='flex flex-col flex-wrap justify-center items-center gap-10' >
            {!events ? <p>No events currently active.</p> : events.map((event, idx) => {
              return (
                <Card className='bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white font-semibold' key={idx}>
                  <CardHeader>
                    <CardTitle>{event.Name}</CardTitle>
                    <CardDescription className='text-slate-200'>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-col justify-center items-center gap-3'>
                    <div className='relative max-w-screen-md w-screen aspect-video flex justify-center items-center flex-col'>
                      {/* <Image fill className='rounded-lg' src={`${event.image}`} alt={event.Name} /> */}
                      <Image fill className='rounded-lg' src="/assets/jpg/event1.jpg" alt="event1" />
                    </div>
                    <div className='flex flex-col w-full h-1/2'>
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                  </CardContent>
                  <CardFooter className='self-end' >
                    <p>~{event.createdBy || "OMakr"}</p>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </ScrollArea>
      </div>
    </div >
  )
}

export default Events
