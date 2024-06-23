import Signin from '@/components/buttons/signin'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Signin',
  description: 'Sign in with Github'
}

const SignUp = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center'>
      <div className=' w-[80%]  flex justify-center items-center flex-col gap-y-6'>
        <div className=' flex flex-col gap-y-1 items-center'>
          <p className=' text-[20px] font-bold'>Welcome</p>
          <p className=' text-[12px]'>please signup to syncro</p>
        </div>

        <Signin name='Signup' className=" w-full gap-x-3" />
        <p className=' text-[12px]'>
          Already an user? {" "}
          <Link href={'/signin'} className=' text-blue-600'>signin</Link>
        </p>
        <div className=' w-[80%] flex items-center justify-center'>
          <p className=' text-[10px] text-center text-slate-600 font-light'>
            By clicking on sign up, you agree to our <Link href={'/'} className=' underline'>Terms of Service</Link> and <Link href={'/policy'} className=' underline'>Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
