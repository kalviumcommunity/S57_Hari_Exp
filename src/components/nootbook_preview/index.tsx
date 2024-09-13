import React, { Suspense, useState } from 'react'
import Header from './header'
import { notes } from '@/services/notes/notes.service'
// import { prisma } from '../../../prisma/prisma'
import Image from 'next/image'
import notFound from '../../../public/undraw_notebook_re_id0r.svg'
import scribble from '../../../public/scribble-svgrepo-com.svg'
import Card from './cards/card'
import { Skeleton } from '../ui/skeleton'


async function llema() {
  const content = await notes()
  console.log(content?.notes)
  const boolean = content?.notes?.length ? true : false
  return {
    render: boolean,
    content: content
  }
}
const Index = async () => {
  const notes = await llema()
  console.log(notes)
  return (
    <div className=' w-full h-full p-4 overflow-y-auto'>
      <Header />
      {/* top bar search notes videos photos createNotes */}
      {/* thumbnail with sharing */}
      <div className={`min-h-fit mt-[4rem] ${notes.render && "grid grid-cols-4 gap-y-4"}  w-full h-[80%]`}>
        {
          notes.render ? (
            notes.content?.notes?.map(note => (
              <Card
                date={note?.createdAt}
                heading={note?.tag as string}
                paragraph={note?.notes.replaceAll(/<[^>]*\/?>/g, ' ') as string}
                noteId={note?.id} key={note?.tag}
              />
            ))
          ) : (
            <div className=' w-full h-full flex justify-center items-center  flex-col gap-y-6 '>
              <Image src={notFound} alt='' className=' w-[40%] h-[40%]' />
              <div className=' flex'>
                <Image src={scribble} alt='' className=' w-6 h-6' />
                <p className=' text-[12px]'>Create some notes to make your workload easier</p>
              </div>

            </div>
          )
        }

      </div>
    </div >
  )
}

export default Index
