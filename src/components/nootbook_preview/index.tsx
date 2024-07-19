import React from 'react'
import Header from './header'
import { notes } from '@/services/notes.service'
import { prisma } from '../../../prisma/prisma'
import Card from './cards/card'
import Image from 'next/image'
import notFound from '../../../public/undraw_notebook_re_id0r.svg'
import scribble from '../../../public/scribble-svgrepo-com.svg'


async function llema() {
  const content = await notes()
  const boolean = content?.map(l => l.notes.length > 0)[0]
  const llema = content?.map(l => l.notes.map(l => l.notes))
  console.log(boolean)
  const data = content
  console.log(data)
  return {
    render: boolean,
    content: data
  }
}

// async function deletes() {
//   const notes = await prisma.note.deleteMany();
//   console.log(notes);
// }


const Index = async () => {
  const notes = await llema()
  // deletes();
  return (
    <div className=' w-full h-full p-4 overflow-y-auto'>
      <Header />
      {/* top bar search notes videos photos createNotes */}
      {/* thumbnail with sharing */}
      <div className={`min-h-fit mt-[4rem] ${notes.render && "grid grid-cols-4 gap-y-4"}  w-full h-[80%]`}>
        {
          notes.render ? (
            notes?.content?.map(llema => llema.notes.map(note => (
              < Card date={note.createdAt} heading={note.tag} paragraph={note.notes} />
            )))
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
