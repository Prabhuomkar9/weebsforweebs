import React from 'react'
import { Button } from '../ui/button'
import { FaGoogle } from 'react-icons/fa'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'

const SignIn = () => {
  const handleSignIn = () => {
    toast.loading("Logging in")
    // signIn("google")
    //   .then((res) => {
    //     console.log(res)
    //     toast.dismiss()
    //     toast.success("Login Successful")
    //   })
    toast.success("Logged In")
  }
  return (
    <Button className='flex flex-row justify-center items-center gap-1' onClick={handleSignIn}>
      <FaGoogle />Sign In
    </Button>
  )
}

export default SignIn
