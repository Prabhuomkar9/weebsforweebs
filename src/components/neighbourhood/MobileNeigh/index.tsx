import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Style from "../index.module.css"
const Neighbourhood = () => {
  return (
    <>
      <div className="container md:hidden  mt-10 ">
      <div style={{ position: 'relative', width: '400px', height: '400px' }}>
      <h1 className=' font-extrabold font-serif text-6xl'>Connect with your neighbourhood</h1>
                  <div className="butons flex justify-evenly w-full my-10">
                    <Button>Sign up</Button>
                    <Button>Log in</Button>
                  </div>
          
        </div>
        <section className=" body-font">
          <div className="container  ">
            <div className="flex flex-wrap   text-center">
              
              <div className=" px-4">
                <div className="imgs relative h-96 w-96">

                  <Image className={`absolute z-50 animate-happy-jump`}
                    src={"/assets/svg/guy1.svg"}
                    alt="Picture of the author"
                    fill
                  />

                  <Image className={`absolute z-50 animate-happy-jump delay-300`}
                    src={"/assets/svg/guy2.svg"}
                    alt="Picture of the author"
                    fill
                  />

                  <Image className={`absolute z-50 animate-happy-jump delay-300`}
                    src={"/assets/svg/guy3.svg"}
                    alt="Picture of the author"
                    fill
                  />

                  <Image className='absolute z-0'
                    src={"/assets/svg/back.svg"}
                    alt="Picture of the author"
                    fill
                  />
            

              </div>
            </div>
          </div>
      </div>
    </section >
       </div >
    </>
  )
}

export default Neighbourhood
