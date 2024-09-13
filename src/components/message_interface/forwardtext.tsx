import Image from 'next/image'
import React from 'react'
import ai from '../../../public/opal_16147440.svg'
import { cn } from '@/lib/utils'

interface ChatInterface {
  message: string
}
const Forwardtext = ({ message }: ChatInterface) => {
  return (
    <div className=' w-[50%]'>
      <div className=' bg-slate-100 w-full p-4 rounded-r-2xl rounded-b-2xl text-[13px]'>
        {message}
      </div>
    </div>
  )
}

export default Forwardtext
