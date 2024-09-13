import { todaysNotes } from '@/services/notes/todays_notes.service'
import React from 'react'
import Card from '../nootbook_preview/cards/card'
import Nodata from '../../../public/undraw_add_notes_re_ln36.svg'
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
    <div className={cn(note.render ? ' grid grid-cols-4' : 'flex gap-y-6 p-24 items-center', ' h-full w-full ')} >
      {
        note?.render ? note.content?.map(note => (
          <Card heading={note.tag} paragraph={note.notes} key={note.tag} date={note.createdAt} />
        ))
          :
          <div className=' flex items-start gap-x-9'>
            <Image src={Nodata} alt='' className=' ' width={200} height={200} />
            <div className=' flex items-start flex-col gap-y-4'>
              <p className=' font-extralight' >
                Get Started by Adding Your First Note Today to Keep Track of Your Ideas and Tasks
              </p>
              <Create_notes_Button />
            </div>
          </div>
      }
    </div >
  )
}

export default Today_Notes
