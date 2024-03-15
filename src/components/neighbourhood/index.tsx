import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Style from "./index.module.css"
const Neighbourhood = () => {
  return (
    <>
      <div className="container bg-[#7441c2] min-h-[50vh] w-[70vw] mt-10 rounded-3xl">
        <section className=" body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="side w-full h-full flex justify-center flex-col items-center ">
                  <h1 className='m-5 font-extrabold font-serif text-6xl'>Connect with your neighbourhood</h1>
                  <div className="butons flex justify-evenly w-full">
                    <Button>Sign up</Button>
                    <Button>Log in</Button>
                  </div>
                </div>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="imgs relative h-96 w-96">

                  <Image className={`absolute z-50 ${Style.guy1}`}
                    src={"/assets/svg/guy1.svg"}
                    alt="Picture of the author"
                    fill
                  />

                  <Image className={`absolute z-50 ${Style.guy2}`}
                    src={"/assets/svg/guy2.svg"}
                    alt="Picture of the author"
                    fill
                  />

                  <Image className={`absolute z-50 ${Style.guy2}`}
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
