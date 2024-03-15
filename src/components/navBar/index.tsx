import React, { FunctionComponent } from 'react';
import { navLinks } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LuLogIn } from "react-icons/lu";


const NavBar: FunctionComponent = () => {
  return (
    <nav className="z-50 absolute top-0 left-2/4 -translate-x-2/4 text-white bg-gradient-to-b from-[#510031] to-[#40022728] mx-3 rounded-2xl my-3 w-5/6 h-20 bg-opacity-50">
      <div className='relative w-full h-full flex flex-row justify-around items-center '>
        <div className='w-1/4 flex flex-row justify-center items-center'>
          <ul className="flex flex-row justify-center items-center gap-3 text-xl">
            {
              navLinks.map((link, index) => {
                return (
                  <li>
                    <Link key={index} className='hover:text-slate-300' href={link.url}>{link.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className='w-1/4 flex flex-row justify-center items-center'>
          <Link href="/" className="font-semibold items-center">
            <span className="text-xl">WeebsForWeebs</span>
          </Link>
        </div>
        <div className='w-1/4 flex flex-row justify-center items-center'>
          <Button className='flex flex-row justify-center items-center gap-1'>
            Login
            <LuLogIn />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
