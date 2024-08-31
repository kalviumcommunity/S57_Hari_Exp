"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const PreivewHeader = () => {
  const user = useSession()
  return (
    <div className=' w-full h-[6%] flex items-center'>
      <p className=' text-[24px] font-sans font-normal'>Hi, <span>{user.data?.user.name}</span>! Here's a quick look at your work today <span>😀</span></p>
    </div>
  )
}

export default PreivewHeader
