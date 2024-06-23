import React from 'react'
import banner from '../../../public/new_file.svg'
import Image from 'next/image'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' h-screen w-full grid grid-cols-3'>
      <div className=' border col-span-1'>
        {children}
      </div>
      <div className=' col-span-2'>
        <Image src={banner} alt='' className=' w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default AuthLayout
