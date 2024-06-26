import Image from 'next/image'
import React from 'react'

interface ChatInterface {
  image: string
  username: string
  timestamp: string
  message: string
}
const Question = ({ image, message, timestamp, username }: ChatInterface) => {
  return (
    <div className="flex items-start gap-2.5 flex-row-reverse">
      <Image className="w-8 h-8 rounded-full" src={image} alt="Jese image" />
      <div className="flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{username}</span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">{timestamp}</span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
      </div>

    </div>
  )
}

export default Question
