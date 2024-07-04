import Image from 'next/image'
import React from 'react'
import ai from '../../../public/opal_16147440.svg'

interface ChatInterface {
  image: string
  message: string
}
const Forwardtext = ({ image, message }: ChatInterface) => {
  return (
    <div className=' w-full'>
      <div className="flex items-start gap-2.5">
        <Image className="w-8 h-8 rounded-full" src={ai} alt="Jese image" priority />
        <div className="flex flex-col w-full w-full leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
          {message}
        </div>

      </div>
    </div>
  )
}

export default Forwardtext
