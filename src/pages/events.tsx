import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { ScrollArea } from '@/components/ui/scroll-area'

const events = [
  {
    image: {
      url: "https://example.com/image1.jpg",
      filename: "image1.jpg"
    },
    Name: "Event 1",
    date: new Date("2024-03-20").toISOString(),
    description: "Description for Event 1",
    location: "Location 1",
    createdBy: null
  },
  {
    image: {
      url: "https://example.com/image2.jpg",
      filename: "image2.jpg"
    },
    Name: "Event 2",
    date: new Date("2024-03-25").toISOString(),
    description: "Description for Event 2",
    location: "Location 2",
    createdBy: null
  },
  {
    image: {
      url: "https://example.com/image3.jpg",
      filename: "image3.jpg"
    },
    Name: "Event 3",
    date: new Date("2024-04-01").toISOString(),
    description: "Description for Event 3",
    location: "Location 3",
    createdBy: null
  },
  // Add more events as needed
];


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
      <div className='flex flex-col justify-center items-center gap-3'>
        <ScrollArea >
          <div className='flex flex-col flex-wrap justify-center items-center gap-10' >
            {events.map((event, idx) => {
              return (
                <Card className='bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 text-white font-semibold' key={idx}>
                  <CardHeader>
                    <CardTitle>{event.Name}</CardTitle>
                    <CardDescription className='text-slate-200'>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className='flex flex-col justify-center items-center gap-3'>
                    <div className='relative max-w-screen-md w-screen aspect-video flex justify-center items-center flex-col'>
                      <Image fill className='rounded-lg' src={`${event.image}`} alt={event.Name} />
                    </div>
                    <div className='flex flex-col w-full h-1/2'>
                      <p>{event.date}</p>
                      <p>{event.location}</p>
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
