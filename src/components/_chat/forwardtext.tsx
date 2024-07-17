import Image from 'next/image'
import React from 'react'
import ai from '../../../public/opal_16147440.svg'
import { cn } from '@/lib/utils'

interface ChatInterface {
  imageShown: boolean
  message: string
  className?: string
}
const Forwardtext = ({ imageShown, message, className }: ChatInterface) => {
  return (
    <div className=' w-[40%] text-nowrap h-fit'>
      <div className="flex items-start gap-2.5 h-full w-full">
        <Image className={cn('w-8 h-8 rounded-full', className, imageShown && 'hidden')} src={ai} alt="Jese image" />
        <div className="flex flex-col w-full w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          {message}
        </div>

      </div>
    </div>
  )
}

export default Forwardtext
