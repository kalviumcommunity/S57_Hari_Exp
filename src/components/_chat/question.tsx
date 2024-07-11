'use client'
import Image from 'next/image'
import React from 'react'

interface ChatInterface {
  image: string
  message: string
}
const Question = ({ image, message }: ChatInterface) => {
  return (
    <>
      {[""].map((content, i) => (
        <div className="flex items-start gap-2.5 flex-row-reverse" key={i}>
          <Image className="w-8 h-8 rounded-full" src={""} alt="Jese image" />
          <div className="flex flex-col w-full max-w-[600px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{content}</p>
          </div>

        </div>
      ))}
    </>

  )
}

export default Question
