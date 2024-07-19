'use client'
import React from 'react'
import Paragraph from './paragraph'
import { day } from '@/lib/createdDay'
import DeleteDialog from './dialog'


interface Card {
  heading: string
  paragraph: string
  date: Date
}

const Card = ({ heading, paragraph, date }: Card) => {
  const days = day(date)
  return (
    <div className=' w-[300px] h-[200px]  border rounded-xl p-2 relative shadow-sm '>
      <div className={`absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent to-transparent 
        ${days === 'Today' && 'via-blue-400'}
        ${days === 'Yesterday' && 'via-purple-400'}
        ${days === 'DayBefore' && 'via-purple-400'}
          `} />
      <div className=' w-full h-[60%] rounded-lg border relative  flex' >
        {/* <Image alt='' src={''} priority className='  w-full h-full' /> */}
        {/* <DeleteDialog id={heading} /> */}
      </div>
      <Paragraph nice={days} heading={heading} paragraph={paragraph} />
    </div >
  )
}

export default Card

