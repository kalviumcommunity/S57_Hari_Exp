import { todaysNotes } from '@/services/todays_notes.service'
import React from 'react'
import Card from '../nootbook_preview/cards/card'
import Nodata from '../../../public/undraw_no_data_re_kwbl.svg'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Create_notes_Button from '../nootbook_preview/button_create'


const notes = async () => {
  const note = await todaysNotes()
  const render = note?.length > 0 ? 1 : 0
  return {
    render: render,
    content: note
  }
}
const Today_Notes = async () => {
  const note = await notes()
  console.log(note)
  return (
    <div className={cn(note.render ? ' grid grid-cols-4' : 'flex justify-center items-center p-6 flex-col gap-y-6', ' h-full w-full')} >
      {
        note?.render ? note.content?.map(note => (
          <Card heading={note.tag} paragraph={note.notes} key={note.tag} date={note.createdAt} />
        ))
          :
          <>
            <Image src={Nodata} alt='' className=' ' width={400} height={400} />
            <p className='' >
              Get Started by Adding Your First Note Today to Keep Track of Your Ideas and Tasks
            </p>
            <Create_notes_Button />
          </>
      }
    </div >
  )
}

export default Today_Notes
