import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/router';

const issues = () => {
  const router = useRouter()
  return (
    <div>
        <div className="issue mt-10 flex justify-center items-center"> <button className="hover:text-white hover:bg-purple-500 rounded-xl py-3 px-7 border bg-white text-purple-500" onClick={() =>{
    router.push("/forms/rooms")}}>Create an Issue</button></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-20">
      
        <Card className="bg-gray-400 relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden">
            <div className=" absolute  status w-full flex justify-end right-1 top-1">
            <button className=" rounded-md text-sm p-1 border border-yellow-500 text-yellow-500 ">Pending</button>
            </div>
          <div className="relative h-48">
            <Image className='rounded-xl' src={"/assets/jpg/rroom1.jpg"} alt={"issue"} layout="fill" objectFit="cover" />
          </div>
          <CardContent className="p-4 text-white font-semibold">
            <CardHeader>
              <CardTitle>Issue</CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-400 mb-2 w-full">I am a description of issue</CardDescription>
            <div className="content flex">
           
            <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Like</button>
            </div>
          </CardContent>
          <CardFooter  className='flex flex-col'>
          <p className="text-sm text-gray-300">Issue By : Sayeem</p>
            <p className="text-sm text-gray-300">Contact: +91 123456789</p>
          </CardFooter>
        </Card>
        <Card className="bg-gray-400 relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden">
            <div className=" absolute  status w-full flex justify-end right-1 top-1">
            <button className=" rounded-md text-sm p-1 border border-green-600 text-green-600">Solved</button>
            </div>
          <div className="relative h-48">
            <Image className='rounded-xl' src={"/next.svg"} alt={"issue"} layout="fill" objectFit="cover" />
          </div>
          <CardContent className="p-4 text-white font-semibold">
            <CardHeader>
              <CardTitle>Issue</CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-400 mb-2 w-full">I am a description of issue</CardDescription>
            <div className="content flex">
           
            <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Like</button>
            </div>
          </CardContent>
          <CardFooter  className='flex flex-col'>
          <p className="text-sm text-gray-300">Issue By : Sayeem</p>
            <p className="text-sm text-gray-300">Contact: +91 123456789</p>
          </CardFooter>
        </Card>
        <Card className="bg-gray-400 relative bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-md rounded-lg p-10 overflow-hidden">
            <div className=" absolute  status w-full flex justify-end right-1 top-1">
            <button className=" rounded-md text-sm p-1 border border-red-500 text-red-500">Started</button>
            </div>
          <div className="relative h-48">
            <Image className='rounded-xl' src={"/next.svg"} alt={"issue"} layout="fill" objectFit="cover" />
          </div>
          <CardContent className="p-4 text-white font-semibold">
            <CardHeader>
              <CardTitle>Issue</CardTitle>
            </CardHeader>
            <CardDescription className="text-gray-400 mb-2 w-full">I am a description of issue</CardDescription>
            <div className="content flex">
           
            <button className="text-white rounded-xl py-3 px-7 border hover:bg-white hover:text-purple-500">Like</button>
            </div>
          </CardContent>
          <CardFooter  className='flex flex-col'>
          <p className="text-sm text-gray-300">Issue By : Sayeem</p>
            <p className="text-sm text-gray-300">Contact: +91 123456789</p>
          </CardFooter>
        </Card>
        
        </div>
    </div>
  )
}

export default issues;
