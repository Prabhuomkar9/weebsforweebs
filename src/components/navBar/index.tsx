import React, { FunctionComponent } from 'react';
import { navLinks, siteMetadata } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { FaGoogle } from "react-icons/fa";
import { signIn, useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import SignIn from '../signIn';

const NavBar: FunctionComponent = () => {
  const { data: session } = useSession()



  const handleSignOut = () => {
    toast.loading("Logging out")
    signOut()
      .then((res) => {
        toast.dismiss()
        toast.success("Logout Successful")
      })
      .catch((err) => {
        toast.dismiss()
        toast.error("An error occured")
      })
  }

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
            <Link href="/" className="font-semibold text-3xl hover:text-[2rem] transition-all duration-75 flex flex-row justify-center items-center gap-3">
              <div className='relative h-10 aspect-square'>
                <Image src={siteMetadata.imageUrl} alt="Logo" fill />
              </div>
              {siteMetadata.title}
            </Link>
          </div>
          <div className='w-1/4 flex flex-row justify-center items-center gap-5'>
            {!session ?
              <SignIn />
              :
              <>
                <Button className='flex flex-row justify-center items-center gap-1' onClick={handleSignOut}>
                  <FaGoogle />Sign Out
                </Button>
                <Link className='relative w-12  aspect-square' href="/profile"><Image className='rounded-full' fill src={session.user?.image || ""} alt="" /></Link>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
