import React , {useState} from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Room } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import path from 'path';
import { useRouter } from 'next/router';

const rooms: Room[] = [
  {
    roomNumber: 1,
    roomType: 'RENTAL',
    description: 'Has automatic lighting',
    price: 1000,
    location: 'Mangalore',
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ['/assets/jpg/rroom2.jpg'],
    agent: {
      name: 'John Doe',
      contact: 1234567890,
    },
  },
  {
    roomNumber: 2,
    roomType: 'OWNED',
    description: 'Has false ceiling',
    price: 1000,
    location: 'Bombay',
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ['/assets/jpg/rroom1.jpg'],
    agent: {
      name: 'John Doe',
      contact: 1234567890,
    },
  },
  {
    roomNumber: 3,
    roomType: 'OWNED',
    description: 'Has false ceiling',
    price: 1000,
    location: 'Mysore',
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ['/assets/jpg/room3.jpg'],
    agent: {
      name: 'John Doe',
      contact: 1234567890,
    },
  },
  {
    roomNumber: 4,
    roomType: 'OWNED',
    description: 'Has false ceiling',
    price: 1000,
    location: 'Pune',
    bedrooms: 2,
    bathrooms: 1,
    size: 100,
    images: ['/assets/jpg/rrom4.jpg'],
    agent: {
      name: 'John Doe',
      contact: 1234567890,
    },
  },
];



const Rooms: NextPage = () => {
  const router = useRouter()
  return (<>
  <div className="issue mt-10 flex justify-center items-center"> <button className="hover:text-white hover:bg-purple-500 rounded-xl py-3 px-7 border bg-white text-purple-500" onClick={() =>{
    router.push("/forms/rooms")

  }} >Add room</button></div>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
      {rooms.map((room, idx) => (
        <Card key={idx} className="bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden">
          <div className="relative h-48">
            <Image className='rounded-xl' src={room.images[0]} alt={room.location} layout="fill" objectFit="cover" />
          </div>
          <CardContent className="p-4 text-white font-semibold">
            <CardHeader>
              <CardTitle>{room.location}</CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-400 mb-2 w-full">{room.description}</CardDescription>
            <div className="content flex">
            <div className="flex justify-between  items-center w-full">
              <p className="text-gray-400">Price: ${room.price}/night</p>
            </div>
            <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Book Now</button>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-500">Contact: {room.agent.contact}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
    
    </>
  );
};

export default Rooms;
