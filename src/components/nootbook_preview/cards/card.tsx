'use client'
import React from 'react'
import Paragraph from './paragraph'
import { day } from '@/lib/createdDay'
import { useRouter } from 'next/navigation'


interface Card {
  heading: string
  paragraph: string
  date?: Date
  noteId?: string
}

const Card = ({ heading, paragraph, date, noteId }: Card) => {
  // let days
  // if (date) {
  //   days = date
  // }
  return (
    <div className=' w-[300px] h-[200px]  border rounded-xl p-2 relative shadow-sm '  >
      <Paragraph nice={day} heading={heading} paragraph={paragraph} noteId={noteId} />
    </div >
  )
}

export default Card

