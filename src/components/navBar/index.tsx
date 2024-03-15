import React, { FunctionComponent } from 'react';
import { navLinks, siteMetadata } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';
import { LuLogIn } from "react-icons/lu";
import { toast } from 'sonner';


const NavBar: FunctionComponent = () => {
  return (
    <>
      <nav className="z-[9999] border border-white/30 fixed top-0 left-2/4 -translate-x-2/4 text-white bg-gradient-to-b from-navbar to-navbar/50 mx-3 rounded-2xl my-3 w-5/6 h-20 bg-opacity-50">
        <div className='relative w-full h-full flex flex-row justify-around items-center '>
          <div className='w-1/4 flex flex-row justify-center items-center'>
            <ul className="flex flex-row justify-center items-center gap-10 text-xl">
              {
                navLinks.map((link, index) => {
                  return (
                    <li key={index} className='hover:text-violet-400'>
                      <Link href={link.url}>{link.name}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className='w-1/4 flex flex-row justify-center items-center'>
            <Link href="/" className="font-semibold items-center text-3xl hover:text-[2rem] transition-all duration-75">
              {siteMetadata.title}
            </Link>
          </div>
          <div className='w-1/4 flex flex-row justify-center items-center gap-5'>
            <Button className='flex flex-row justify-center items-center gap-1'
              onClick={() => {
                toast.success('Sign Up');
              }}>
              Sign Up
            </Button>
            <Button className='flex flex-row justify-center items-center gap-1' onClick={() => {
              toast.success('Log In');
            }}>
              Log In
              <LuLogIn />
            </Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
