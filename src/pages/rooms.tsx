import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { NextPage } from 'next'
import React from 'react'
import { Room } from '@/types'
import Image from "next/image"

const rooms: Room[] = [
  {
    roomNumber: 1,
    roomType: "RENTAL",
    description: "Has automatic lighting",
    price: 1000,
    location: "Lekki",
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ["https://source.unsplash.com/random/300x300"],
    agent: {
      name: "John Doe",
      contact: 1234567890
    }
  },
  {
    roomNumber: 2,
    roomType: "OWNED",
    description: "Has false ceileing",
    price: 1000,
    location: "Lekki",
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ["https://source.unsplash.com/random/300x300"],
    agent: {
      name: "John Doe",
      contact: 1234567890
    }
  }
]

const Rooms: NextPage = () => {
  return (
    <div>
      {rooms.map((room, idx) => {
        return (
          <Card id={idx.toString()}>
            <CardHeader>
              <CardTitle>{room.location}</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Image fill src="" alt="" />
              </div>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        )
      })
      }
    </div>
  )
}

export default Rooms
