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
  let days;
  if (date) {
    let days = day(date)
  }
  else {
    return
  }
  const router = useRouter()
  return (
    <div className=' w-[300px] h-[200px]  border rounded-xl p-2 relative shadow-sm '  >
      <Paragraph nice={days} heading={heading} paragraph={paragraph} noteId={noteId} />
    </div >
  )
}

export default Card

