'use client'
import Image from 'next/image'
import React from 'react'

interface ChatInterface {
  message: string
}
const Question = ({ message }: ChatInterface) => {
  return (
    <>
      <div className=' flex flex-row-reverse'>
        <div className=' bg-slate-100 w-[600px] p-4 rounded-l-2xl rounded-b-2xl text-[13px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum deleniti sit labore consectetur ipsum autem tempora, nesciunt tenetur impedit accusamus. Eius harum perferendis aliquid quae. Dolorem numquam facilis aliquid cumque.
          lore
        </div>
      </div>
    </>

  )
}

export default Question
